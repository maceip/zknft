// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Halo2VerifyingKey {
    constructor() {
        assembly {
            mstore(0x0000, 0x2452af9dfe5b5ad743062596669925b433496584f9a0124e03465edbc65e26c6) // vk_digest
            mstore(0x0020, 0x0000000000000000000000000000000000000000000000000000000000000010) // num_instances
            mstore(0x0040, 0x0000000000000000000000000000000000000000000000000000000000000010) // k
            mstore(0x0060, 0x30641e0e92bebef818268d663bcad6dbcfd6c0149170f6d7d350b1b1fa6c1001) // n_inv
            mstore(0x0080, 0x09d2cc4b5782fbe923e49ace3f647643a5f5d8fb89091c3ababd582133584b29) // omega
            mstore(0x00a0, 0x0cf312e84f2456134e812826473d3dfb577b2bfdba762aba88b47b740472c1f0) // omega_inv
            mstore(0x00c0, 0x17cbd779ed6ea1b8e9dbcde0345b2cfdb96e80bea0dd1318bdd0e183a00e0492) // omega_inv_to_l
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
            mstore(0x0220, 0x0ba07530348dff4c85ba5fb2d0532791966fb6a44dc658d7d92daaae6569bf55) // neg_s_g2_x_1
            mstore(0x0240, 0x13a2f41db26383dabb4018e0ebfb3523938629d2003c7c5a8e4404bdb100558e) // neg_s_g2_x_2
            mstore(0x0260, 0x0983d9a302a7e9df4e6d04e2ded96a5cc15a692f9b75d721944f9844b86bcca5) // neg_s_g2_y_1
            mstore(0x0280, 0x25303cbfeafe19afae651e1eb40030bd5c3b691151a33539a5f6b02db0c26de7) // neg_s_g2_y_2
            mstore(0x02a0, 0x1d3b2cd064d4484bd2739eaee25e168e66863e2b4023be3e278450a6fa461baf) // fixed_comms[0].x
            mstore(0x02c0, 0x0e1698a01fead73db601dff66912a45fdcc76036d2d7fbc4c6d683a374b8b27a) // fixed_comms[0].y
            mstore(0x02e0, 0x2a8ca823b7ba9cdd731e81cdabbab387198739f02ae710640197dfecac4b4383) // fixed_comms[1].x
            mstore(0x0300, 0x1f758ff7a2588bf84e4f4739fd626c9166482c72030387a9edddd632d5de8f00) // fixed_comms[1].y
            mstore(0x0320, 0x23c95f6d5335edc7d39a49b26ecd32f1aec0c228d33541471641a8a4cd1935c0) // fixed_comms[2].x
            mstore(0x0340, 0x11a413e3efbb0337ab354bba65f27db94e76140b76e1533c40fbf341f388c0a3) // fixed_comms[2].y
            mstore(0x0360, 0x04d6146162513d5e32c07da8699dcb9ab8c2bac936492ef05d01973fa5ded9ee) // fixed_comms[3].x
            mstore(0x0380, 0x2f199642843369eb6d89f86a6ba4e050d7f10b75c1208a52c3f9db8f53ad2af7) // fixed_comms[3].y
            mstore(0x03a0, 0x009bd0b58726a5af6557088158f5a5ab74e8314935d3a02067b90a664bdf88ea) // fixed_comms[4].x
            mstore(0x03c0, 0x191c7a85c945d4f9c194aa19fc46714527359570cd5d2a2cc2fccf4db48c445f) // fixed_comms[4].y
            mstore(0x03e0, 0x061b3729d35d7d556516cf471d78af9a9820e51d030e083510bfca3ed76f16b5) // permutation_comms[0].x
            mstore(0x0400, 0x11f68ffee86f88abfa0e59f770d0dda49ade5de6478dcb1127f9445aa29533a1) // permutation_comms[0].y
            mstore(0x0420, 0x2771528fa64bece4e9c7ef6f002da2ad987e2ef27fadc1bf555fa727beceaeec) // permutation_comms[1].x
            mstore(0x0440, 0x274684d4153b2b8275ee3aca8c0bcfbfa2f0fb894d5594e3b6e490d01abce3d4) // permutation_comms[1].y
            mstore(0x0460, 0x03ab54979133879d0465b8a11200fc1fd44f9930fb48d1e8b9943168e5d78069) // permutation_comms[2].x
            mstore(0x0480, 0x0c335852913ad3d19f152bb3e6dc9df9325ecc9139fbf90e40f44f0f0fac7d82) // permutation_comms[2].y

            return(0, 0x04a0)
        }
    }
}