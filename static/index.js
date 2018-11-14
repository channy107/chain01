web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]');
VotingContext = web3.eth.contract(abi)
contractInstance = VotingContext.at('0xd3798d85DEa04B21627bF8E41689935be79f5FaA');
candidate = {"0xcFeF13EaD94953eeA8E7CA5cB9b3C0eD689b5c7c":"candidate-1",
"0x6E83458A4E8573bAdbd82D1DdC756BEc4f835eBe":"candidate-2",
"0xcAf65B6F67fF3DCDd12e06D006E2C1a6acf1F5e6":"candidate-3"};

function voteForCandidate() {
    candidateNames = $("#candidate").val();

    contractInstance.voteForCandidate(candidateNames, {gas:140000, from: web3.eth.account
        let div_id = candidate[candidateNames];
        let totalVote = contractInstance.totalVotesFor.call(candidateNames).toString();
        $("#" + div_id).html(totalVote);
        console.log("#" + candidateNames + " has been voted [' + totalVote + ']. ")
        });
}

$(document).ready(function(){
    candidateNames = Object.keys(candidate);

    for (var i = 0; i < candidateNames.length; i++){
        let name = candidateNames[i];
        console.log(name);
        let val = contractInstance.totalVotesFor.call(name).toString();
        $('#' + candidate[name]).html(val);
    }

});
