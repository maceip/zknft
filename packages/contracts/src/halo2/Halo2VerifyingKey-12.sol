// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Halo2VerifyingKey {
    constructor() {
        assembly {
            mstore(0x0000, 0x10531b35f31f91eb0a518e98569c358de04647572fded81d51fcbafba0d1bee5) // vk_digest
            mstore(0x0020, 0x000000000000000000000000000000000000000000000000000000000000000c) // num_instances
            mstore(0x0040, 0x000000000000000000000000000000000000000000000000000000000000000c) // k
            mstore(0x0060, 0x3061482dfa038d0fb5b4c0b226194047a2616509f531d4fa3acdb77496c10001) // n_inv
            mstore(0x0080, 0x2f6122bbf1d35fdaa9953f60087a423238aa810773efee2a251aa6161f2e6ee6) // omega
            mstore(0x00a0, 0x179c2392139def1b24f4e92b4bfba20a0fa885cb6bfc2f2cb92790e00237d0c0) // omega_inv
            mstore(0x00c0, 0x28771071ab1633014eae27cfc16d5ebe08a8fe2fc9e85044e4a45f82c14cd825) // omega_inv_to_l
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
            mstore(0x0220, 0x08f22470dc8d645b446a3bfc4b030c9476c80ca916efb27a1215d2ba3f9ce56a) // neg_s_g2_x_1
            mstore(0x0240, 0x13aa224934811c411ddaba3ab32bd6b8830fec68a21ded8189c135882d87d377) // neg_s_g2_x_2
            mstore(0x0260, 0x178f73b03a6398d57aba5071f010f2b73e05a145cbc6bd3a6699ea9b03a147d4) // neg_s_g2_y_1
            mstore(0x0280, 0x25ef7e5cd584cefd59f08c2871a055181dcbcda33e213dd6c7f38550fabef564) // neg_s_g2_y_2
            mstore(0x02a0, 0x1900eed820ab0933f704589b613b95075a79f1a40310e6abe649f454f9474077) // fixed_comms[0].x
            mstore(0x02c0, 0x16612e706976e81e3a20a1d18f59811f1b5cc777e4377eee58ebc6db79d5f857) // fixed_comms[0].y
            mstore(0x02e0, 0x2532af72568ef6cfb5c4ac3ef5a41de9b988a002f15a25ee922ab3e038187cae) // fixed_comms[1].x
            mstore(0x0300, 0x0499bbff3be13912f7a2f4f8cf2ec073a68124f92ba5a7b27dfdea8b410df9fb) // fixed_comms[1].y
            mstore(0x0320, 0x081acb084b378e2d14f41c11efc5f8e2a0136befd318fa01d9ed407b62fba5e6) // fixed_comms[2].x
            mstore(0x0340, 0x1ce6843ec78fc1afde31b747a0e9b8c903bc774d8322dd54acb7066aa564b9d8) // fixed_comms[2].y
            mstore(0x0360, 0x0e0374d3b39583a6dd1d1cfa449b9730669d9bc14dbbb37bfaad8abe26865fb5) // fixed_comms[3].x
            mstore(0x0380, 0x03a6e7c59bb976527d3ecd4e6162a8edc2312f3a49941114f515ab7084d3ec14) // fixed_comms[3].y
            mstore(0x03a0, 0x21b28cc26cd8625532a51ce6b989589d71e6c6ecbdc7c8d5c927e24f554006d7) // fixed_comms[4].x
            mstore(0x03c0, 0x0d1089f7ae9fd7f46796a4a3d7e9b1088830bb5d715594cf42de62c0ec046388) // fixed_comms[4].y
            mstore(0x03e0, 0x2b6ca58dab02a1337395091512568dc451d8efa3e671d4cc63986a14de7b58ea) // permutation_comms[0].x
            mstore(0x0400, 0x16c4445bfd13777657722e909f71a2bb060d2b3af404c19ce2dffa10798611cb) // permutation_comms[0].y
            mstore(0x0420, 0x1f665805adceaf60ddaebabba5935fb0f95d2976143cd0c79707a65980c8baba) // permutation_comms[1].x
            mstore(0x0440, 0x0ad377ed1a0b8ce2b93db38621f5d792c413c638ed0af69f418a2db4183e3d22) // permutation_comms[1].y
            mstore(0x0460, 0x15a4f35dfc9bd222f0bbed5ce126c3cea14cb64d4e6b359487f38a42a4ee7cff) // permutation_comms[2].x
            mstore(0x0480, 0x1d66efa17ab51451f916755e585ccc4b4420dffc1e60cf22efd022999736133a) // permutation_comms[2].y

            return(0, 0x04a0)
        }
    }
}