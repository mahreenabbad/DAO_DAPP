import "./manager.css"
function ExecuteProposal({state,account}){
      
    const proposalExecution =async(event)=>{
        try{
             const {contract} = state;
        event.preventDefault();
        const proposalId = document.querySelector("#id").value
       await contract.methods.executeProposal(proposalId).send({from:account,gas:480000});
        }catch(error){
            alert(error)
        }
        window.location.reload()
    }
       
    
    
   
    return<><form onSubmit={proposalExecution}>
    <label className="label1" htmlFor="proposalId">
    <span className="cont">Proposal Id:</span>
        </label>
    <input type="number" id="id"></input>
    <button className="button" type="submit">Execute</button>
    </form><br></br></>
    
   }
   export default ExecuteProposal;

