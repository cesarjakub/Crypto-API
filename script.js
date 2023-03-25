$(document).ready(() => {

    function createCards(img, name, symbol, rank, link){
      let text = `
        <tr>
        <th scope="row"><img src="${img}" alt="coin"></th>
        <td>${name}</td>
        <td>${symbol}</td>
        <td>${rank}</td>
        <td><a href="${link}" class="btn btn-primary" target=”_blank”>See more</a></td>
        </tr>`;
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
              $("tbody").append(createCards(result.logo, result.name, result.symbol, result.rank, result.links.reddit));
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