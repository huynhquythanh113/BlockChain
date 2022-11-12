window.onload = function () {
  if (window.ethereum !== "undefined") {
    this.ethereum.on("accountsChanged", handleAccountsChanged);
  }
  console.log(window.ethereum.isConnected());
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  console.log(provider);
};
let accounts;
const handleAccountsChanged = (a) => {
  console.log("accounts changed");
  accounts = a;
};
// this returns the provider, or null if it wasn't detected

async function connectWallet() {
  accounts = await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .catch((err) => {
      console.log(err.code);
    });
  console.log(accounts);
}
function pageMyProduct() {
  window.location.assign("http://localhost:5501/myproduct.html");
}
function pageHome() {
  const a = "http://localhost:5501/product.html";
  window.location.assign(a);
}


async function getAccount() {
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  document.getElementById("showAccount").innerHTML = account;
  console.log(window.ethereum.isConnected());
  console.log(account);
  if (provider) {
    startApp(provider); // Initialize your app
  } else {
    console.log("Please install MetaMask!");
  }
}
async function getTrans(){
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const reponse = axios
  .get(`https://blockccapi.herokuapp.com/trans/${accounts[0]}`)
  .then((reponse) => {
      const data = reponse.data;
      const container = document.getElementById('list-table');
      data.forEach((result, idx) => {
          // Create card element
          // Construct card content
          const content = `
          <tr >
                  <th scope="row">${result.id}</th>
                  <td style="overflow: auto;
                  text-overflow: initial;" class="col-1">${result.transId}</td>
                  <td style="overflow: auto;
                  text-overflow: initial;" class="col-1">${result.walletFrom}</td>
                  <td style="overflow: auto;
                  text-overflow: initial;" class="col-1">${result.walletTo}</td>
                  <td>${result.value}</td>
                  <td style="overflow: auto;
                  text-overflow: initial;">${result.createdDate}</td>
          </tr>
`;

          // Append newyly created card element to the container
          container.innerHTML += content;
      })
      console.log(data);
  })
  .catch((error) => {
      console.log(error);
  });

}
async function checkBalance() {
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  let balance = await window.ethereum
    .request({ method: "eth_getBalance", params: [accounts[0], "latest"] })
    .catch((err) => {
      console.log(err);
    });
  console.log(parseInt(balance) / Math.pow(10, 18));
  console.log(parseInt(balance));
}
function error1(e) {
  Toastify({
    text: e,
    style: {
      background: "red",
    },
    duration: 2000,
  }).showToast();
}
function success(e) {
  Toastify({
    text: e,
    style: {
      background: "green",
    },
    duration: 2000,
  }).showToast();
}

async function sendTransaction() {
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const name = document.querySelector('[name="wallet"]').value;
  const name1 = document.querySelector('[name="value1"]').value;
  let name2 = document.querySelector('[name="gas"]').value;
  const name3 = document.querySelector('[name="gasPrice"]').value;
  var check = false;
  let balance = await window.ethereum
    .request({ method: "eth_getBalance", params: [accounts[0], "latest"] })
    .catch((err) => {
      console.log(err);
    });
  console.log(check);
  console.log(name1);
  console.log(name2);
  console.log(name3);
  // let params = [
  //     {
  //       from: accounts[0],
  //       to: 'asdsadasdd',
  //       gas: "0x76c0", // Number(30400).toString(16)
  //       gasPrice: "0x9184e72a000", // 10000000000000
  //       value: "0x9184e72a", // 2441406250
  //       data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
  //     },
  //   ]
  console.log(accounts);
  // window.ethereum.request({
  //   method: 'eth_sendTransaction',
  //   params: [
  //     {
  //       from: accounts[0],
  //       to: "0x59A7ceF8D80B8593e015CB7F9d568C3d67c89d8e3",
  //       gas: a, // Number(30400).toString(16)
  //       gasPrice: "0x9184e72a000", // 10000000000000
  //       value: "0x9184e72a", // 2441406250
  //       data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
  //     },
  //   ],
  // })
  // .then((txHash) => console.log("aa"))
  // .catch((error) => {error1(error.message);
  // });
  let Eth = parseInt(balance) / Math.pow(10, 18);
  let gasCheck = parseInt(name2) / Math.pow(10, 18);
  let gasPriceCheck = parseInt(name3) / Math.pow(10, 18);
  console.log(Eth);
  console.log(gasCheck);
  console.log(gasPriceCheck);
   if(Eth> gasCheck + gasPriceCheck){
  try {
      // const gas = "0x" + Number(Number(21000) / Math.pow(10, 18)).toString(16);
      const gas = "0x" + Number(Number(name2)).toString(16);
      // const gasPrice = "0x" +Number(Number(100000000) / Math.pow(10, 18)).toString(16);
      const gasPrice = "0x" +Number(Number(name3)).toString(16);
      const value = "0x" + Number(Number(name1) * Math.pow(10, 18)).toString(16);
      console.log(gas);
      console.log(gasPrice);
      console.log(value);
      console.log(name2);
      console.log(name1);
      console.log(name3);
      console.log( Number(Number(name2) * Math.pow(10, 18)).toString(16));
      console.log(Number(name2));
      console.log(typeof name2);
      console.log(parseInt(gasPrice,16));
      console.log(parseInt(gas,16));
      console.log(parseInt("2710",16));
      console.log(parseInt(10000) / Math.pow(10, 18));
      console.log(parseInt(10000000000000) / Math.pow(10, 18));
      const transactionHash = await ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: accounts[0],
          to: name,
          gas: gas, // 30400
          gasPrice: gasPrice, // 10000000000000
          value: value, // 2441406250
          data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
        },
      ],
    });
    // Handle the result
    const trans ={
      walletFrom: accounts[0],
      walletTo:name,
      value: name1,
      gas:name2,
      gasPrice:name3,
      transId: transactionHash
    }
    console.log(trans);
    const response = await axios.post(`https://blockccapi.herokuapp.com/trans`,trans)
    .then(function (response) {
      console.log(response);
      $("#exampleModalLong").modal("hide");
      $("#exampleModalLong1").modal("hide");
    })
    .catch(function (response) {
      error1(response);
    });
    // const response = await axios.post(``,trans);
  } catch (error) {
    error1(error.message);
    console.log(error.message);
  }}
  else {
    error1("Not have enough ETH");
  }
}
async function sellETH(){
  try {
    const form = document.querySelector('#form-buy');
    const formData = new FormData(form);
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
    formData.append("wallet", accounts[0])
    const values = [...formData.entries()];
    console.log(values);
    console.log(formData);
    const response = await axios.post(`https://blockccapi.herokuapp.com/product`,formData)
      .then(function (response) {
        console.log(response);
        $("#exampleModalLong1").modal("hide");
        window.location.reload();
      })
      .catch(function (response) {
        error1(response);
      });
  } catch (error) {
    error1(error.message);
  }
}
function sendETH() {
  const name = document.querySelector('[name="wallet"]').value;
  const name1 = document.querySelector('[name="value"]').value;
  const name2 = document.querySelector('[name="gas"]').value;
  const name3 = document.querySelector('[name="gasPrice"]').value;
  const a = "0x" + Number(30400).toString(16);
  const obj = {
    name: Number(30400).toString(16),
    name1: Number(10000000000000).toString(16),
    name2: Number(2441406250).toString(16),
    name3: a,
  };
  console.log(obj);
}
function chooseGas(){
  var x = document.getElementById("selectGas").value;
  console.log(x);
  if(x==1){
    document.getElementById("gas").value = 31000;
    document.getElementById("gasPrice").value = 1000000000+ parseInt(document.getElementById("gas").value);
  }
  else if(x==2){
    document.getElementById("gas").value = 31000;
    document.getElementById("gasPrice").value = 1500000000+parseInt(document.getElementById("gas").value);
  }
  else if(x==3){
    document.getElementById("gas").value = 31000;
    document.getElementById("gasPrice").value = 2000000000+parseInt(document.getElementById("gas").value);
  }
  else if(x==0){
    document.getElementById("gas").value = '';
    document.getElementById("gasPrice").value ='';
  }
}
function chooseGas1(){
  var x = document.getElementById("selectGas1").value;
  console.log(x);
  if(x==1){
    document.getElementById("gas1").value = 31000;
    document.getElementById("gasPrice1").value = 1000000000+ parseInt(document.getElementById("gas1").value);
  }
  else if(x==2){
    document.getElementById("gas1").value = 31000;
    document.getElementById("gasPrice1").value = 1500000000+parseInt(document.getElementById("gas1").value);
  }
  else if(x==3){
    document.getElementById("gas1").value = 31000;
    document.getElementById("gasPrice1").value = 2000000000+parseInt(document.getElementById("gas1").value);
  }
  else if(x==0){
    document.getElementById("gas1").value = '';
    document.getElementById("gasPrice1").value ='';
  }
}
async function searchWallet(){
  var x = document.getElementById("searchWallet").value;
  const a = "http://localhost:5501/myproduct.html?wallet=" +x.toString();
  window.location.assign(a);
  console.log(a);
}
async function Remove(id){
  try {
    const remove = await axios.delete(`https://blockccapi.herokuapp.com/product/${id}`).then((response)=>{
      success("Delete success!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
    ;
    
  } catch (error) {
      error1(error);
  }
}
function reloadPage(){
  window.location.reload();
}
async function buyETH(id,wallet,name,value){
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  console.log(id);
  console.log(wallet);
  console.log(name);
  console.log(value);
  document.getElementById("value1").value = value;
  document.getElementById("wallet").value = wallet;
}
async function buyTransaction() {
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const name = document.querySelector('[name="wallet1"]').value;
  const name1 = document.querySelector('[name="value11"]').value;
  let name2 = document.querySelector('[name="gas1"]').value;
  const name3 = document.querySelector('[name="gasPrice1"]').value;
  let balance = await window.ethereum
    .request({ method: "eth_getBalance", params: [accounts[0], "latest"] })
    .catch((err) => {
      console.log(err);
    });
  console.log(name1);
  console.log(name2);
  console.log(name3);
  let Eth = parseInt(balance) / Math.pow(10, 18);
  let gasCheck = parseInt(name2) / Math.pow(10, 18);
  let gasPriceCheck = parseInt(name3) / Math.pow(10, 18);
  console.log(Eth);
  console.log(gasCheck);
  console.log(gasPriceCheck);
   if(Eth> gasCheck + gasPriceCheck){
  try {
      // const gas = "0x" + Number(Number(21000) / Math.pow(10, 18)).toString(16);
      const gas = "0x" + Number(Number(name2)).toString(16);
      // const gasPrice = "0x" +Number(Number(100000000) / Math.pow(10, 18)).toString(16);
      const gasPrice = "0x" +Number(Number(name3)).toString(16);
      const value = "0x" + Number(Number(name1) * Math.pow(10, 18)).toString(16);
      console.log(gas);
      console.log(gasPrice);
      console.log(value);
      console.log(name2);
      console.log(name1);
      console.log(name3);
      console.log( Number(Number(name2) * Math.pow(10, 18)).toString(16));
      console.log(Number(name2));
      console.log(typeof name2);
      console.log(parseInt(gasPrice,16));
      console.log(parseInt(gas,16));
      console.log(parseInt("2710",16));
      console.log(parseInt(10000) / Math.pow(10, 18));
      console.log(parseInt(10000000000000) / Math.pow(10, 18));
      const transactionHash = await ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: accounts[0],
          to: name,
          gas: gas, // 30400
          gasPrice: gasPrice, // 10000000000000
          value: value, // 2441406250
          data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
        },
      ],
    });
    // Handle the result
    console.log(transactionHash);
    console.log(typeof name2);
    const trans ={
      walletFrom: accounts[0],
      walletTo:name,
      value: name1,
      gas:name2,
      gasPrice:name3,
      transId: transactionHash
    }
    console.log(trans);
    const response = await axios.post(`https://blockccapi.herokuapp.com/trans`,trans)
    .then(function (response) {
      console.log(response);
      $("#exampleModalLong").modal("hide");
    })
    .catch(function (response) {
      error1(response);
    });
  } catch (error) {
    error1(error.message);
    console.log(error.message);
  }}
  else {
    error1("Not have enough ETH");
  }
}
function pageHistory(){
  window.location.assign("http://localhost:5501/history.html");
}

async function getMyproduct(){
  try {
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const reponse = axios
                    .get(`https://blockccapi.herokuapp.com/product/${accounts[0]}`)
                    .then((reponse) => {
                        const data = reponse.data;
                        const container = document.getElementById('list-card');
                        data.forEach((result, idx) => {
                            // Create card element
                            const card = document.createElement('div');
                            card.classList = 'card-body';
                            // Construct card content
                            const content = `
      <div class="item" data-key="${result.id}">
                        <div class="img">
                            <img src="${result.img}" alt="">
                        </div>
                        <div class="content">
                            <div class="title">${result.name}</div>
                            <div class="price">${result.value} ETH</div>
                            <button type="button" class="add" data-toggle="modal"
                                data-target="#exampleModalLong1">Edit</button>
                            <button class="remove" onclick="Remove(${result.id})"><i class="fa-solid fa-trash-can fa-lg"></i></button>
                        </div>
                    </div>
    `;
    
                            // Append newyly created card element to the container
                            container.innerHTML += content;
                        })
                        console.log(data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                console.log(reponse);
  } catch (error) {
    
  }
}