/// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

interface IPublicInputs {
    struct PublicInputs {
        bytes32 blockHash;
        bytes32 settlementRoot;
    }
}
