var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var dgc = document.getElementById("dogecoin");
var ltc = document.getElementById("litecoin");
var ada = document.getElementById("cardano");
var dot = document.getElementById("polkadot");
var xlm = document.getElementById("stellar");
var xmr = document.getElementById("monero");
var sol = document.getElementById("solana");
var link = document.getElementById("chainlink");


var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Clitecoin%2Ccardano%2Cpolkadot%2Cstellar%2Ctether%2Cmonero%2Csolana%2Cchainlink&vs_currencies=inr",
    "method": "GET",
    "headers": {}
}


$.ajax(settings).done(function(response) {
    btc.innerHTML = response.bitcoin.inr;
    eth.innerHTML = response.ethereum.inr;
    dgc.innerHTML = response.dogecoin.inr;
    ltc.innerHTML = response.litecoin.inr;
    ada.innerHTML = response.cardano.inr;
    dot.innerHTML = response.polkadot.inr;
    xlm.innerHTML = response.stellar.inr;
    xmr.innerHTML = response.monero.inr;
    sol.innerHTML = response.solana.inr;
    link.innerHTML = response.chainlink.inr;
});