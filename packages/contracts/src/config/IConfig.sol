/// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IAsset} from "../common/IAsset.sol";

interface IConfig {
    struct AddressBook {
        address operator;
        IAsset.AssetsAddress tokenAddresses;
        address halo2VerifyingKeyAddress;
        address halo2VerifierAddress;
        address verifier;
    }

    function configure(
        address operator_,
        IAsset.AssetsAddress memory tokenAddresses_,
        address halo2VerifyingKeyAddress_,
        address halo2VerifierAddress_,
        address verifier_
    ) external;

    function getAddressBook() external view returns (AddressBook memory);
}