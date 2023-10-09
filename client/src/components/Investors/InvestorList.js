import {useState,useEffect} from "react"
function InvestorList({state}){
   const [list, setList] =useState([])

   useEffect(()=>{
      const {contract} = state;
      const listInvestor = async()=>{
       const arrList = await contract.methods.InvestorList().call()
       setList(arrList)
       
      }
      contract && listInvestor()
   },[state])
 
   return<>
    <div className="list">
    <h3>Investor's List</h3>
    {list.map((investorsAddress)=>{
       return <p key={investorsAddress}>{investorsAddress}</p>
    })}
   
    </div>
   </>
  }
  export default InvestorList;
