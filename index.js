window.onload =function(){

    if(window.ethereum !== "undefined"){
        this.ethereum.on("accountsChanged", handleAccountsChanged)
        
    }
   console.log(window.ethereum.isConnected())
   const provider = new ethers.providers.Web3Provider(window.ethereum)
    console.log(provider)


}
let accounts ;
const handleAccountsChanged = (a) =>{
    console.log("accounts changed")
    accounts = a
}


// this returns the provider, or null if it wasn't detected

async function connectWallet() {
    accounts =  await window.ethereum.request({method : 'eth_requestAccounts'}).catch((err)=>{
      console.log(err.code)   
    })
    console.log(accounts)
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
     accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    let balance = await window.ethereum.request({method : 'eth_getBalance', params:[
            accounts[0],
            'latest'
    ]}).catch((err) =>{
        console.log(err)
    })
    console.log(parseInt(balance)/ Math.pow(10,18))
    console.log(parseInt(balance))
}

async function sendTransaction(){
   accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    let params = [
        {
          from: accounts[0],
          to: accounts[0],
          gas: "0x76c0", // Number(30400).toString(16)
          gasPrice: "0x9184e72a000", // 10000000000000
          value: "0x9184e72a", // 2441406250
          data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
        },
      ]
    console.log(accounts)
    window.ethereum.request({method :"eth_sendTransaction",params})
}

let addressConstrac ="0xd9145CCE52D386f254917e481eB44e9943F39138"
let contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ]

  
  
async function checkBalanceFromConstract(){
    
}