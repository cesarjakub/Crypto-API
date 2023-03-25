$(document).ready(() => {

    function createCards(img, name, symbol, rank, link){
      let text = `
      <div class="card m-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"><img src="${img}" class="card-img-top" alt="img">${name}</h5>
          <p class="card-text">${symbol}</p>
          <p class="card-text">Rank: ${rank}</p>
          <a href="${link}" class="btn btn-primary" target=”_blank”>See more</a>
        </div>
      </div>
      `;
      return text;
    }

    function getCryptoByID(id){
        $.ajax({
            url: `https://api.coinpaprika.com/v1/coins/${id}`,
            type: "GET",
            data: {
              id,
            },
            success: function (result) {
              console.log(result);
              $(".cards").append(createCards(result.logo, result.name, result.symbol, result.rank, result.links.reddit));
            },
            error: function (error) {
              console.log("Error");
            },
        });
    }

    function getTopTen(){
      getCryptoByID("btc-bitcoin");
      getCryptoByID("eth-ethereum");
      getCryptoByID("usdt-tether");
      getCryptoByID("usdc-usd-coin");
      getCryptoByID("bnb-binance-coin");
      getCryptoByID("hex-hex");
      getCryptoByID("xrp-xrp");
      getCryptoByID("ada-cardano");
      getCryptoByID("okb-okb");
      getCryptoByID("doge-dogecoin");
    }

    getTopTen();
});