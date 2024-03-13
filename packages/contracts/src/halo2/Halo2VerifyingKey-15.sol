// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Halo2VerifyingKey {
    constructor() {
        assembly {
            mstore(0x0000, 0x0756b3ac0bd0949cfb9f3d81db60fe5a7ed84dac6e171a7f00f1eff556c68c61) // vk_digest
            mstore(0x0020, 0x000000000000000000000000000000000000000000000000000000000000000f) // num_instances
            mstore(0x0040, 0x000000000000000000000000000000000000000000000000000000000000000f) // k
            mstore(0x0060, 0x3063edaa444bddc677fcd515f614555a777997e0a9287d1e62bf6dd004d82001) // n_inv
            mstore(0x0080, 0x2b7ddfe4383c8d806530b94d3120ce6fcb511871e4d44a65f0acd0b96a8a942e) // omega
            mstore(0x00a0, 0x1f67bc4574eaef5e630a13c710221a3e3d491e59fddabaf321e56f3ca8d91624) // omega_inv
            mstore(0x00c0, 0x2427343dea588e4242e165ef52d4c1f5986149f372f5c87534f7f6274ef4eeff) // omega_inv_to_l
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
            mstore(0x0220, 0x1705219d43ba91ed371f70d9e18f5ed059c08ffbe18a0ae862cf32a7c758f2ad) // neg_s_g2_x_1
            mstore(0x0240, 0x1c25c51b5c507ae7049a5169215464f8da3f0e2044795d02d662517c70100818) // neg_s_g2_x_2
            mstore(0x0260, 0x2fe8b432956e2837c7cc49f14f3420ec1749d90ffad9d9fd6e4c9bff8047d188) // neg_s_g2_y_1
            mstore(0x0280, 0x1ef6f9f69e7aa6831b7b00d06415fc7002e77a031f4756c80a6e6e08fb347972) // neg_s_g2_y_2
            mstore(0x02a0, 0x2dc6d28ae6674d093df5ec15e1f5cf06ff0ab0c58784f619e0e915f7b3e479f8) // fixed_comms[0].x
            mstore(0x02c0, 0x1017193625e10fd2ca88f8bf1b43028014d7e12c2dc9b99b831e2c4ff8f114aa) // fixed_comms[0].y
            mstore(0x02e0, 0x2dba203c1aaa280d42aa00a961abb0f7c11f19ae8fbbf4942e0ba39923a0c135) // fixed_comms[1].x
            mstore(0x0300, 0x20741306c5bf2c962c0b96403f0f0e9190e5ec030d7fe3771f96658f53340584) // fixed_comms[1].y
            mstore(0x0320, 0x2032d60a7b38d5ae54754b49e3026f0bc65b416403ed276621c95aaf3d0140c3) // fixed_comms[2].x
            mstore(0x0340, 0x226944aaebe40f4ab1677bb8d747936491dbdb3850ea5045471770232d4f2750) // fixed_comms[2].y
            mstore(0x0360, 0x1e02ec3dea27bd60a6fd0d051383dd39604d112150cc90a2d57b4c1750607d69) // fixed_comms[3].x
            mstore(0x0380, 0x2cf5684942767c0da7927c974c54200f9f73b6252cb40583fe831e8120ebc55a) // fixed_comms[3].y
            mstore(0x03a0, 0x280fa7f37123de3592d8750c8e7eb2863d29c49b3da9d141fae8a71a98ad308b) // fixed_comms[4].x
            mstore(0x03c0, 0x1e27c65bd2808c9f8041109fab43730907d98f2b1ac1e5d041969bb229fa458b) // fixed_comms[4].y
            mstore(0x03e0, 0x1152d0d4be653c1986f515fbb9031bc21287fcbf01ac4bca4e89389aaa1af516) // permutation_comms[0].x
            mstore(0x0400, 0x166de71351d5555711fcd8b23de4d58804e82ef4bcefeb9997cc1ba5d3a76f2d) // permutation_comms[0].y
            mstore(0x0420, 0x0e55e0baffe87a4902e2750d22059957ffc6e1680dc277587a502a82c94ffee6) // permutation_comms[1].x
            mstore(0x0440, 0x2def7b29477e84faba392bcf1f2649c1f98e5ae3a590903eef370426df031bb9) // permutation_comms[1].y
            mstore(0x0460, 0x1dbfb5cbdef886c37850a6f95ca651bdc6164619b3bcca7d4366ccdbd8ea16c4) // permutation_comms[2].x
            mstore(0x0480, 0x2ec411e5c816cd6ce2cea228674e4e7cae77fc8e12113795fb2f478334c4322c) // permutation_comms[2].y

            return(0, 0x04a0)
        }
    }
}