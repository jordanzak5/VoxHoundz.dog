var rinkeby = "0x4";
var mainnet = "0x1";

var config = {
  chainId: mainnet,
  contractAddress: "0x9A9f875a0b31D04CAb3454d4fD7b83d838B4e4A2",
  countdownTimestamp: 1620000000,
}


var abi = [
  {
    inputs: [{ internalType: "string", name: "baseTokenURI", type: "string" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "mintQuantity", type: "uint8" }],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintLimit",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "baseTokenURI", type: "string" }],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "weiPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

let connected = false;

async function connect() {
console.log("in0")
console.log()
  if (window.ethereum) {
console.log("in1")
    // Checking if max supply hit
    var maxSupply = 5000;
    var w3S = new Web3(window.ethereum);
    var contractS = new w3S.eth.Contract(abi, config.contractAddress);
    var currentSupply = await contractS.methods.totalSupply().call();

    if (currentSupply == maxSupply) {
      setupSoldout();
      return;
    } else {
console.log("in2")
      startApp();
      connected = true;
    }
  } else {
    modalAlert(
      "No wallet detected<br><a href='https://metamask.io/download.html' target='_blank' rel='noopener noreferrer'>Install MetaMask</a>",
      10000,
      "warning"
    );
  }
}
document.querySelector("#connect").addEventListener("click", connect);
document.querySelector("#buy").addEventListener("click", buy);

async function startApp() {
  /* Accounts request */
  ethereum
    .request({ method: "eth_requestAccounts" })
    .then(handleAccountsChanged)
    .catch((err) => {
      if (err.code === 4001) {
        console.log("User rejected the request");
      } else {
        console.error(err);
      }
    });
  ethereum.on("accountsChanged", handleAccountsChanged);

  /* Accounts change handling */
  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      modalAlert("Connect to MetaMask", 4000, "warning");
    } else {
      modalAlert("Successfully connected", 4000, "success");
      handleChain(); // warning modal if wrong chain
    }
  }

  /* Chain and chain change handling */
  function handleChain() {
    ethereum
      .request({ method: "eth_chainId" })
      .then(checkCorrectChain)
      .catch((err) => console.log(err));
    ethereum.on("chainChanged", handleChainChanged);

    function handleChainChanged(chainId) {
      if (checkCorrectChain(chainId)) {
        // User is on the correct chain
        window.location.reload();
      }
    }
  }
}

function checkCorrectChain(chainId) {
  if (chainId !== config.chainId) {
    if (config.chainId === "0x4") {
      modalAlert("Connect to the Rinkeby network", 4000, "warning");
    } else if (config.chainId === "0x1") {
      modalAlert("Connect to the Ethereum network", 4000, "warning");
    } else {
      // Chain is on neither Rinkeby nor mainnet
      modalAlert("You are connected to the wrong network", 4000, "warning");
      console.error("Chain may not be properly configured");
    }
    return false;
  }
  return true;
}

async function buy() {
  var account;
  if (!connected) {
    // Checking if has access to window.ethereum
    modalAlert("Connect to your wallet", 4000, "warning");
    return;
  } else {
    // Checking if has access to account
    try {
      var accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length === 0) {
        modalAlert("Sign into your wallet", 4000, "warning");
        return;
      } else {
        account = accounts[0];
      }
    } catch (err) {
      modalAlert("Error:", err);
      console.error(err);
      return;
    }

    // Checking if on correct chain
    try {
      var _chainId = await ethereum.request({ method: "eth_chainId" });
      if (!checkCorrectChain(_chainId)) {
        return;
      }
    } catch (err) {
      modalAlert("Error:", err);
      console.error(err);
      return;
    }

    contractLogic(account);
  }
}

async function contractLogic(account) {
  var w3 = new Web3(Web3.givenProvider);
  var contract = new w3.eth.Contract(abi, config.contractAddress);

  var qty = document.getElementById("quantity").value;
  var unitPrice = 0.08;
  var totalEthPrice = parseFloat(qty * unitPrice).toFixed(2);
  var totalWeiPrice = w3.utils.toWei(totalEthPrice);

  await contract.methods
    .mint(qty)
    .send({ from: account, value: totalWeiPrice })
    .on("transactionHash", (txHash) =>
      modalAlertForPurchase(
        "Order Submitted",
        "Transaction hash: " + txHash,
        undefined
      )
    )
    .on("receipt", (receipt) => {
      modalAlertForPurchase(
        "Order Successful!",
        "Transaction hash: " + receipt.transactionHash,
        "success"
      );
    })
    .on("error", (err) => {
      if (err.code === 4001) {
        modalAlert("Purchase aborted", 4000, "warning");
      } else if (err.transactionHash) {
        modalAlertForPurchase(
          "Error",
          "Transaction hash:" + err.transactionHash,
          "error"
        );
      } else {
        modalAlert("Error", 4000, "error");
      }
    });
}

function setupSoldout() {
  var web3Component = document.getElementById("web3-component");
  web3Component.innerHTML =
    "<div class='alert alert-primary' role='alert'>All VoxHoundz have been minted. <br>Try buying on OpenSea.</div>";
}

document.getElementById("quantity").addEventListener("change", function (qty) {
  var quantity = qty.target.value;
  var unitPrice = 0.08;

  document.getElementById("price").innerHTML =
    parseFloat(quantity * unitPrice).toFixed(2) + " ETH";

  if (quantity > 40) {
    modalAlert("A maximum of 40 can be minted at a time", 4000);
  }
});

function modalAlert(text, time, icon = undefined) {
  let timerInterval;
  Swal.fire({
    html: text,
    timer: time,
    icon: icon,
    timerProgressBar: true,
    showConfirmButton: false,
    didOpen: () => {
      timerInterval = setInterval(() => {
        const content = Swal.getHtmlContainer();
        if (content) {
          const b = content.querySelector("b");
          if (b) {
            b.textContent = Swal.getTimerLeft();
          }
        }
      }, 1000);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
}
function modalAlertForPurchase(title, text, icon = undefined) {
  let timerInterval;
  Swal.fire({
    title: title,
    html: text,
    icon: icon,
    timerProgressBar: true,
    showConfirmButton: false,
    didOpen: () => {
      timerInterval = setInterval(() => {
        const content = Swal.getHtmlContainer();
        if (content) {
          const b = content.querySelector("b");
          if (b) {
            b.textContent = Swal.getTimerLeft();
          }
        }
      }, 1000);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
}

/* Countdown */
var targetTimestamp = config.countdownTimestamp * 1000;
var currentTimestamp = new Date().getTime();
if (currentTimestamp < targetTimestamp) {
  setupCountdown(targetTimestamp);
} else {
  // do web3 sold out check here?
}

function setupCountdown(targetTimestamp) {
  var web3Component = document.getElementById("web3-component");
  web3Component.innerHTML = `
  <h1 text-light>Available in</h1>
  <div class="d-flex justify-content-center">
    <div id="clock">
      <div>
        <span class="days fs-2 text-light"></span>
        <div class="fs-6 text-light">Days</div>
      </div>
      <div>
        <span class="hours fs-2 text-light"></span>
        <div class="fs-6 text-light">Hours</div>
      </div>
      <div>
        <span class="minutes fs-2 text-light"></span>
        <div class="fs-6 text-light">Minutes</div>
      </div>
      <div>
        <span class="seconds fs-2 text-light"></span>
        <div class="fs-6 text-light">Seconds</div>
      </div>
    </div>
  </div>
  `;
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }
  function initClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector(".days");
    const hoursSpan = clock.querySelector(".hours");
    const minutesSpan = clock.querySelector(".minutes");
    const secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
      const t = getTimeRemaining(endtime);
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  const deadline = new Date(targetTimestamp);
  initClock("clock", deadline);
}
