import Contribute from "./Contribute";
import TransferShare from "./TransferShare";
import RedeemShare from "./RedeemShare"
import VoteProposal from "./VoteProposal"
import InvestorList from "./InvestorList";
import ProposalList from "./ProposalList";

function Investors({state,account}) {
    return <> 
    <Contribute state={state} account={account}></Contribute>
    <TransferShare state={state} account={account}></TransferShare>
    <RedeemShare state={state} account={account}></RedeemShare>
    <VoteProposal state={state} account={account}></VoteProposal>
    <InvestorList state={state}></InvestorList>
    <ProposalList state={state}></ProposalList>
    </>
 

}
export default Investors;