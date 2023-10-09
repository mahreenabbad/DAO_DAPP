import "./investors.css"
function RedeemShare({state,account}){
    const redeemShare =async(event)=>{
        try{
             const {contract} =state;
    event.preventDefault();
    const shares = document.querySelector("#shares").value 
    await contract.methods.reedemShare(shares).send({from:account,gas:480000});
        }catch(error){
            alert(error)
        }
        window.location.reload()
    }
    return<><form onSubmit={redeemShare}>
         <label className="label1" htmlFor="shares">
         <span className="cont">Number of Shares:</span>
        </label>
    <input type="text" id="shares"></input>

    <button className="button" type="submit">Reedem Share</button>
    </form><br></br></>
}
export default RedeemShare;
