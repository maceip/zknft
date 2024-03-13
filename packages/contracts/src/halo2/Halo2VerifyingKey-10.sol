// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Halo2VerifyingKey {
    constructor() {
        assembly {
            mstore(0x0000, 0x107a3b684761e8c24789251beb514061d6efda3ecd04a20d0edc1fa1c11546a7) // vk_digest
            mstore(0x0020, 0x000000000000000000000000000000000000000000000000000000000000000a) // num_instances
            mstore(0x0040, 0x000000000000000000000000000000000000000000000000000000000000000a) // k
            mstore(0x0060, 0x3058355f447953c1ade231a513e0f80710e9db4e679b02351f90fd168b040001) // n_inv
            mstore(0x0080, 0x2ad9021ed07c42ab19f77c5cf2cbd2deb135ea330f1b1573bd08d99309c4bb7d) // omega
            mstore(0x00a0, 0x0ae3c95fc03c0a5f2de8a8f46c03ccdfdfed2bb98c9e4ae0b10b15eda4e3b1e3) // omega_inv
            mstore(0x00c0, 0x15f79db9c39181bc3e31c83f9291da76eedf1b23c410add7e9098464aaa4fb26) // omega_inv_to_l
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
            mstore(0x0220, 0x1b0766aaa67fcf088738c26d6674d79e9316945defb06ea458caee43fcfdbc05) // neg_s_g2_x_1
            mstore(0x0240, 0x1ab2ffc24bb7b6387ffc48d3139f8999b33ae659fba0f9355973d8242b905d8d) // neg_s_g2_x_2
            mstore(0x0260, 0x2dfa2488cbcf836cb990169deb59235182b40e314d007e5becfc9d863642db85) // neg_s_g2_y_1
            mstore(0x0280, 0x163a07f6c949d645cd9b802e0fa8b6a4cc39f0904e298fa89dd49726cb5e29f1) // neg_s_g2_y_2
            mstore(0x02a0, 0x08c6db4115dcf7df00950d05e6554656a97081a5aea5662a485932290ef4009c) // fixed_comms[0].x
            mstore(0x02c0, 0x1999b5277dad6a58a5a1ebb3ed3901b760bf5041477e42cfdeb353ac9697abd8) // fixed_comms[0].y
            mstore(0x02e0, 0x1e111269418f85b52c826d4ed32ea364c72f6996b51c3cc4c486978520f7147a) // fixed_comms[1].x
            mstore(0x0300, 0x1610f1862b8481c36fe9a895ad9ccf9c24c3022436374e5c2a123fb29759c604) // fixed_comms[1].y
            mstore(0x0320, 0x0f4354f5f7135475af3d4af9fd4a266d91fb616a2212b6dfd67123db8f86e185) // fixed_comms[2].x
            mstore(0x0340, 0x0ad30dad85585366f3606db36e90c9bf614602a30b2b77a29407c0f4de3e4a28) // fixed_comms[2].y
            mstore(0x0360, 0x0e78e66e776065a831de81374c0942f6f7ffa3f62f8f09a065b0acf1d9db9c5d) // fixed_comms[3].x
            mstore(0x0380, 0x047c3f5e5b45993b60a516694ec835dc3a9cfcb64144e6a56083346c4c12b587) // fixed_comms[3].y
            mstore(0x03a0, 0x249d77ed680cfa2a9412fb4d7144e5869b93201d29d6c87a607bff9ab2a3dfff) // fixed_comms[4].x
            mstore(0x03c0, 0x24e286e57e6de36f60fa4b146688788d50f487582f0c9b573fd6a1bb72feea32) // fixed_comms[4].y
            mstore(0x03e0, 0x0c57130ff05c5c29499f1734393f72e70e9570eebd5548a3af635d15994310bc) // permutation_comms[0].x
            mstore(0x0400, 0x287aba2850adeca6e1a5dcf7b199d48a1019ec9b92669c01fba9e9f76acea6c3) // permutation_comms[0].y
            mstore(0x0420, 0x10223ea6e3974a4c70445829376ff1e822e74f62a46f641cacaef4e479894116) // permutation_comms[1].x
            mstore(0x0440, 0x1077318b32fa0f6967e0df24388b34d21a59bc6d6132360080120e8521d8d85f) // permutation_comms[1].y
            mstore(0x0460, 0x0501475b02b2f8fec02a8075d50537669d58f1207c06367d38a9cdafd173820f) // permutation_comms[2].x
            mstore(0x0480, 0x15a1f46140d1359f82afed14341d398b52e25a61a072cd1a0aa9b2c5b067f3f2) // permutation_comms[2].y

            return(0, 0x04a0)
        }
    }
}