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
     window.location.assign("http://localhost:5501/myproduct.html")
}
function pageHome() {
  window.location.assign("http://localhost:5501/product.html")
}

function Addproduct(){
  axios.get('http://localhost:8081/api/user')
  .then(function (response) {
    console.log(response);
  })
}
async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    document.getElementById("showAccount").innerHTML = account;
    console.log(window.ethereum.isConnected())
    console.log(account)
    if (provider) {
  startApp(provider); // Initialize your app
} else {
  console.log('Please install MetaMask!');
}
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
function error1(e){
  Toastify({

    text: e,
    style:{
      background: 'red',
    },
    duration: 2000
    
    }).showToast();

}

async function sendTransaction(){
   accounts = await ethereum.request({ method: 'eth_requestAccounts' });
   const name = document.querySelector('[name="wallet"]').value;
  const name1 = document.querySelector('[name="value"]').value;
  const name2= document.querySelector('[name="gas"]').value;
  const name3 = document.querySelector('[name="gasPrice"]').value;
  const a = "0x" + Number(30400).toString(16);
  var check =false;
   let balance = await window.ethereum
    .request({ method: "eth_getBalance", params: [accounts[0], "latest"] })
    .catch((err) => {
      console.log(err);
    });
    console.log(check);

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
    console.log(accounts)
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
try {
  const transactionHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [
      {
        from: accounts[0],
          to: "0x59A7ceF8D80B8593e05CB7F9d568C3d67c89d8e3",
          gas: a, // Number(30400).toString(16)
          gasPrice: "0x9184e72a000", // 10000000000000
          value: "0x9184e72a", // 2441406250
          data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
      },
    ],
  });
  // Handle the result
  $('#exampleModalLong').modal('hide');
  console.log(transactionHash);
} catch (error) {
  error1(error.message);
  console.log(error.message);
}

  }
function sendETH(){
  const name = document.querySelector('[name="wallet"]').value;
  const name1 = document.querySelector('[name="value"]').value;
  const name2= document.querySelector('[name="gas"]').value;
  const name3 = document.querySelector('[name="gasPrice"]').value;
  const a = "0x" + Number(30400).toString(16) 
  const obj = {
    name : Number(30400).toString(16),
    name1 : Number(10000000000000).toString(16),
    name2 : Number(2441406250).toString(16),
    name3 : a,
  }
  console.log(obj);
}
let addressConstrac = "0xd9145CCE52D386f254917e481eB44e9943F39138";
let contractABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
];

async function checkBalanceFromConstract() {}
