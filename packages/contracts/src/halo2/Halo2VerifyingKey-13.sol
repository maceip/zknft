// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Halo2VerifyingKey {
    constructor() {
        assembly {
            mstore(0x0000, 0x21a26700aed75b3bc1ac724daf56fa972b3422bb086b104f5ecf1dd6e546b457) // vk_digest
            mstore(0x0020, 0x000000000000000000000000000000000000000000000000000000000000000d) // num_instances
            mstore(0x0040, 0x000000000000000000000000000000000000000000000000000000000000000d) // k
            mstore(0x0060, 0x3062cb506d9a969cb702833453cd4c52654aa6a93775a2c5bf57d68443608001) // n_inv
            mstore(0x0080, 0x10e3d295c1599ff535a1bb49f23d81aa03bd0ed25881f9ed12b179af67f67ae1) // omega
            mstore(0x00a0, 0x09ff38534bd08f2b08b6010aaee9ac485d3afb3a9ae4280907537b08fc6e53e5) // omega_inv
            mstore(0x00c0, 0x1fe62c4a3c6640bbac666390d8ab7318a0de5374d46b2921e3217838d26470ad) // omega_inv_to_l
            mstore(0x00e0, 0x0000000000000000000000000000000000000000000000000000000000000000) // has_accumulator
            mstore(0x0100, 0x0000000000000000000000000000000000000000000000000000000000000000) // acc_offset
            mstore(0x0120, 0x0000000000000000000000000000000000000000000000000000000000000000) // num_acc_limbs
            mstore(0x0140, 0x0000000000000000000000000000000000000000000000000000000000000000) // num_acc_limb_bits
            mstore(0x0160, 0x0000000000000000000000000000000000000000000000000000000000000001) // g1_x
            mstore(0x0180, 0x0000000000000000000000000000000000000000000000000000000000000002) // g1_y
            mstore(0x01a0, 0x198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c2) // g2_x_1
            mstore(0x01c0, 0x1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed) // g2_x_2
            mstore(0x01e0, 0x090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b) // g2_y_1
            mstore(0x0200, 0x12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa) // g2_y_2
            mstore(0x0220, 0x0d5ffaf0c7a4e4d678d45e08e0ad495e19dd738c935e7248d85e53a3910852ab) // neg_s_g2_x_1
            mstore(0x0240, 0x2414a93bfd31503556d24dee963b85a4a9a5e31f2b7a192cd54b6622cfd7d0b2) // neg_s_g2_x_2
            mstore(0x0260, 0x1ce32054698173acaba28e979a776ce78bcd88620822f7f18da1e632df0c5227) // neg_s_g2_y_1
            mstore(0x0280, 0x1e8f3a136cb5c754d1ed2ab37d13015e80df4baa35f3fdc91322845e47f04c52) // neg_s_g2_y_2
            mstore(0x02a0, 0x2dc3cd81d853b09e96439f3f7a90e883b521e8f57c6604260884da5382cf81ed) // fixed_comms[0].x
            mstore(0x02c0, 0x035adeaf2ece457d512891d971145789efa039136ebe1457d19302eaca995b63) // fixed_comms[0].y
            mstore(0x02e0, 0x2f57b3561a7ab8caa693fc545a12906de110646f3c7742183d53700906654ae6) // fixed_comms[1].x
            mstore(0x0300, 0x1d8072db46a2d32afada8ddd6b5a3b6dd681fb94db834d997b142dd793eb84bb) // fixed_comms[1].y
            mstore(0x0320, 0x00a412dd01242a16ed5c8fc67a8b3331f9ae3fed020fee3a2446ebe872f5ac27) // fixed_comms[2].x
            mstore(0x0340, 0x12562a9a314a80395eebd96b633b62a763694a988521b731c3912b6ad6cd10d9) // fixed_comms[2].y
            mstore(0x0360, 0x0f8bd8a49b7b782db095d7a2d1442fdfed8dfe6d0ebb0ae476cf2b4ce8d183c0) // fixed_comms[3].x
            mstore(0x0380, 0x0d5ed95bb82d93881eaad016decd6fddb3b051ae0c761efe6102cf8ae598712e) // fixed_comms[3].y
            mstore(0x03a0, 0x1c7c4f376a987d765c48f964c9ed1ef6f641d460e6a95fac3c21e803f967df07) // fixed_comms[4].x
            mstore(0x03c0, 0x224bbac09616b3496df51bc54bf2b8b304513a1614e7458166e1f5d79ef49c53) // fixed_comms[4].y
            mstore(0x03e0, 0x142385d7be8a32fbe11a8f3ea6602b16620f074bbe510fd47689b2edbf26db3b) // permutation_comms[0].x
            mstore(0x0400, 0x0340c614d70303696c4e5769a142f96c567c5310cea247e69830cb7e6d348a44) // permutation_comms[0].y
            mstore(0x0420, 0x2963fefa001aa30b3114e73acb6a2866083212178270635e7599aebce7b9e586) // permutation_comms[1].x
            mstore(0x0440, 0x1b14903c8ba069c1e10a56aa21b027df70e3eb7aa8b0c5881a7f800abc4125e5) // permutation_comms[1].y
            mstore(0x0460, 0x036fd56e21f68d635bc8e46867a4d04c2e1460f245e90b7596bf401eac00177e) // permutation_comms[2].x
            mstore(0x0480, 0x018d48b419d53cee20027c56e1072cf58831a05717fa9aab9294bc4c654b1854) // permutation_comms[2].y

            return(0, 0x04a0)
        }
    }
}