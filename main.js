let list = document.querySelectorAll(".list .item");
list.forEach((item) => {
  item.addEventListener("click", function (event) {
    if (event.target.classList.contains("add")) {
      var itemNew = item.cloneNode(true);
      let checkIsset = false;
      console.log(itemNew);

      let listCart = document.querySelectorAll(".cart .item");
      listCart.forEach((cart) => {
        if (cart.getAttribute("data-key") == itemNew.getAttribute("data-key")) {
          checkIsset = true;
          cart.classList.add("danger");
          setTimeout(function () {
            cart.classList.remove("danger");
          }, 1000);
        }
      });
      if (checkIsset == false) {
        document.querySelector(".listCart").appendChild(itemNew);
      }
    }
  });
});
function Remove($key) {
  let listCart = document.querySelectorAll(".cart .item");
  listCart.forEach((item) => {
    if (item.getAttribute("data-key") == $key) {
      item.remove();
      return;
    }
  });
}

async function checkBalance() {
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  let balance = await window.ethereum
    .request({ method: "eth_getBalance", params: [accounts[0], "latest"] })
    .catch((err) => {
      console.log(err);
    });
  let balanceInt = parseInt(balance) / Math.pow(10, 18);
  document.querySelector(".wallet").style.width = "70px";
  document.querySelector(".info-coin-eth").innerHTML = balanceInt + " ETH";
  document.querySelector(".wallet-icon").classList.add("hidden-wallet");
}
