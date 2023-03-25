$(document).ready(() => {

    function createCards(img, name, symbol, rank, link){
      let text = `
        <tr>
        <th scope="row"><img src="${img}" alt="coin" style="height: 25px; width: 25px"></th>
        <td>${name}</td>
        <td>${symbol}</td>
        <td>${rank}</td>
        <td><a href="${link}" class="btn btn-primary" target=”_blank”>See more</a></td>
        </tr>`;
    return text;
    }

    function carouselCards(){
      let text = ``;
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
              $("tbody").append(createCards(result.logo, result.name, result.symbol, result.rank, result.links.youtube));
            },
            error: function (error) {
              console.log("Error");
              $("main").css("visibility","hidden");
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