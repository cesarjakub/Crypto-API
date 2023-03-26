$(document).ready(() => {
    $(".er").css("display","none");
    $(".alert-link").click(function() {
      location.reload();
    });
    function createTable(img, name, symbol, rank, link){
      let text = `
        <tr>
        <th scope="row"><img src="${img}" data-bs-toggle="modal" data-bs-target="#${name}" style="height: 25px; width: 25px"></th>
        <td>${name}</td>
        <td>${symbol}</td>
        <td>${rank}</td>
        <td><a href="${link}" class="btn btn-primary" role="button" target=”_blank”>See more</a></td>
        </tr>`;
    return text;
    }

    function getMoreInfo(title, des){
      let text = `<div class="modal fade" id="${title}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">${title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${des}
          </div>
        </div>
      </div>
    </div>`;
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
              $("tbody").append(createTable(result.logo, result.name, result.symbol, result.rank, result.links.youtube));
              $(".modals").append(getMoreInfo(result.name, result.description));
            },
            error: function (error) {
              console.log("Error");
              $(".er").css("display","block");
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