// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Halo2VerifyingKey {
    constructor() {
        assembly {
            mstore(0x0000, 0x00430b0126a5de39441e7bca1762392f7ad410c539f2ef5a778949c3990e2792) // vk_digest
            mstore(0x0020, 0x000000000000000000000000000000000000000000000000000000000000000e) // num_instances
            mstore(0x0040, 0x000000000000000000000000000000000000000000000000000000000000000e) // k
            mstore(0x0060, 0x30638ce1a7661b6337a964756aa75257c6bf4778d89789ab819ce60c19b04001) // n_inv
            mstore(0x0080, 0x2337acd19f40bf2b2aa212849e9a0c07d626d9ca335d73a09119dbe6eaab3cac) // omega
            mstore(0x00a0, 0x2f9c1d051b2a29bd1d13a09c1489aec5303c2fb2ac7d853ee7a58fdb65b90d7d) // omega_inv
            mstore(0x00c0, 0x2c34760cd8ba6180d92ad9da798faeb6fbf85f3f63d3dfca54b3b798e4f5f37e) // omega_inv_to_l
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
            mstore(0x0220, 0x1ecc3adee893c630efda4ab769aef663631c5855f8f377cd58d734d38e472bbd) // neg_s_g2_x_1
            mstore(0x0240, 0x224afcd6480f25c04d1838d5566af274ef4c4d689fd4228ff60d6cd8e790f84a) // neg_s_g2_x_2
            mstore(0x0260, 0x245edbaf8e2f9dd2a9ad8b501956b048faba2d48913fcf0b7f4b4f5f962a6dc0) // neg_s_g2_y_1
            mstore(0x0280, 0x22a59df24b96921ae8a113a539114e3210d433876086c002f48c04ac73325b99) // neg_s_g2_y_2
            mstore(0x02a0, 0x0151d808a64cb4f02e0f295e6ccb7e6d6dff4fff559fbd0a7edcbf6475b4268e) // fixed_comms[0].x
            mstore(0x02c0, 0x284e900d3c565e13bc0acc4dca4c424c3cbdd8631ba2c2b245b2c3f8e286dee5) // fixed_comms[0].y
            mstore(0x02e0, 0x187801d8c1d824ef7022b140b4804c472376707702bce7fd86f06ede0431f4ba) // fixed_comms[1].x
            mstore(0x0300, 0x27045636e8618a3aac29da73d6022e699f72ffa5d0c70c97a36216d29e632c79) // fixed_comms[1].y
            mstore(0x0320, 0x06721ba9737f3242ca44059bf646a3b44540ec437bbb20c4884f678e0eccafc9) // fixed_comms[2].x
            mstore(0x0340, 0x2c766ef374f13bde0e2834c3d79c1f49f8979d2dae81e8662a57631735f4c0ed) // fixed_comms[2].y
            mstore(0x0360, 0x1840332809a8a0556119936854283ed671da757f1b9da3e681e434812ede9c61) // fixed_comms[3].x
            mstore(0x0380, 0x2780500b5a441d468ef5b87a45fd44ad08d8f21beeb041112e5bf7863007fe53) // fixed_comms[3].y
            mstore(0x03a0, 0x1b0f1f7a9ba4ea6d441a50fe4dcfd047aaa9ff6d2577f737fbafa8b230edb8b1) // fixed_comms[4].x
            mstore(0x03c0, 0x2393e6e9c58a49ed2829596f6fe5bf1d5096b7ddc6cc9b47bf209f2223ee656c) // fixed_comms[4].y
            mstore(0x03e0, 0x297c5b3ffe23cde51fb3fc1975a2de417000715d729bfaaf36d2105e4379013c) // permutation_comms[0].x
            mstore(0x0400, 0x049e0bca379f151b21041532e1718bb617592f5138c1e2ddb416b5e0c1c2f89c) // permutation_comms[0].y
            mstore(0x0420, 0x0cf8b6bf66f666877c4ea2b57fc06f697077bf1a456d1193210cd52651df5574) // permutation_comms[1].x
            mstore(0x0440, 0x13c3d8e39051c241b061ff8e7724614355ce26a2c12e0841d1abbb0323a3d4d5) // permutation_comms[1].y
            mstore(0x0460, 0x248a29ded34a2fd03a7d5670f6631e61365dd0b8bae1908d4cef48e8115a834e) // permutation_comms[2].x
            mstore(0x0480, 0x27c2a3d4f82fc23e9988970fa1d05feda67faf9fb7635ba575958aa213874ad1) // permutation_comms[2].y

            return(0, 0x04a0)
        }
    }
}