/// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

import {IConfig} from "./IConfig.sol";
import {IVerifier} from "../verifier/IVerifier.sol";


import {IAsset} from "../common/IAsset.sol";

contract Config is AccessControlUpgradeable, UUPSUpgradeable, IConfig {
    bytes32 public constant DEPLOYER = keccak256("DEPLOYER");

    AddressBook public addressBook;

    function initialize() public initializer {
        __AccessControl_init();
        __UUPSUpgradeable_init();
        _grantRole(DEPLOYER, _msgSender());
    }

    function configure(
        address operator_,
        IAsset.AssetsAddress memory tokenAddresses_,
        address halo2VerifyingKeyAddress_,
        address halo2VerifierAddress_,
        address verifier_
    ) external onlyRole(DEPLOYER) {
        IVerifier(verifier_).config(
            halo2VerifyingKeyAddress_,
            halo2VerifierAddress_
        );
     

        addressBook = AddressBook(
            operator_,
            tokenAddresses_,
            halo2VerifyingKeyAddress_,
            halo2VerifierAddress_,
            verifier_
        );
    }

    function getAddressBook() external view returns (AddressBook memory) {
        return addressBook;
    }

    function _authorizeUpgrade(address) internal override onlyRole(DEPLOYER) {}
}