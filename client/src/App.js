import {useState, useEffect} from "react"
import Web3 from "web3"
import DAO from "./contracts/DAO.json"
import './App.css';
import Investors from "./components/Investors/Investors";
import Manager from "./components/Manager/Manager";

function App() {
  const [state, setState] = useState({web3:null,contract:null})
  const [account,setAccount] =useState("Not connected")
  const [balance, setBalance] =useState(0)

  useEffect(()=>{
    const init =async()=>{
      const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
      const networkId = await web3.eth.net.getId()
      const deployedNetwork = DAO.networks[networkId]
      const contract = new web3.eth.Contract(DAO.abi,deployedNetwork.address);
      setState({web3:web3,contract:contract})
    }
     init() 
  },[])
  useEffect(()=>{
        const {web3} =state;
        const allAccounts =async()=>{
          var select = document.querySelector("#selectNumber");
          var options = await web3.eth.getAccounts();
          for(var i=0; i< options.length;i++){
            var opt = options[i]
            var el = document.createElement("option")
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el)
          }
        };
        web3 && allAccounts()
        
  },[state]);
  const selectAccount =()=>{
    let selectedAccount =  document.querySelector("#selectNumber").value
    if(selectedAccount && selectedAccount !== "Choose an account"){
      setAccount(selectedAccount)
    }

  }
  //if any change in dependency list ,useEffect will run
  useEffect(()=>{
     const {web3} =state;
     async function getBalance(){
      if(account !== "Not connected"){
          const balanceWei = await web3.eth.getBalance(account)
      const balanceEth = web3.utils.fromWei(balanceWei,"ether")
      setBalance(balanceEth)
     }
      }
      
      
      
     web3 && getBalance()
  },[state,account]) 
  

  return (
    <div className='App'>
      <h1>Decentralized Autonoumous Organization</h1>

      <p className="cont">Connected Account:{account}</p>
      <p className="cont">Available Fund:{balance}</p>
      <form className="label0" id="myForm">
        <label htmlFor=""></label>
        <select className='innerBox' id='selectNumber'onChange={selectAccount}>
          <option align="center">Choose an account</option>
        </select>
      </form>
      <p className="font">For Manager</p>
      <Manager state={state} account={account}></Manager>
      <p className="font">For Investors</p>
      <Investors state={state} account={account}></Investors>

    </div>
  );
}

export default App;
