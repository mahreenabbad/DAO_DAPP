import "./investors.css"
function TransferShare({state,account}){

    const shareTransfer =async(event)=>{
        try{
              const {contract} =state;
     event.preventDefault();
     const amount = document.querySelector("#amount").value 
     const to = document.querySelector("#to").value 
     await contract.methods.transferShare(amount,to).send({from:account,gas:480000});
        }catch(error){
            alert(error)
        }
        window.location.reload()
    }
    
    return<><form onSubmit={shareTransfer}>
    <label className="label1" htmlFor="amount">
    <span className="cont">Amount:</span>
        </label>
    <input type="number" id="amount"></input>
    <label className="label1" htmlFor="to">
    <span className="cont">Address:</span>
        </label>
    <input type="text" id="to"></input>
    
    <button className="button" type="submit">Transfer Share</button>
    </form><br></br></>
   }
   export default TransferShare;