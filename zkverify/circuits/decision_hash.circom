pragma circom 2.1.6;
include "../node_modules/circomlib/circuits/poseidon.circom";

template DecisionHash(){
    signal input decisionSecret;
    signal input decisionHash;

    component hasher = Poseidon(1);
    hasher.inputs[0] <== decisionSecret;

    decisionHash === hasher.out;
}

component main {public [decisionHash]} = DecisionHash();