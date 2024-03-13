import { expose } from 'comlink';
import init, {
    initThreadPool,
    init_panic_hook,
    prove,
    verify,
} from "./wasm/authdecode.js";


const NUM_OF_THREAD = 1;

export const setup = async () => {
    console.log("Wasm setup called");
    await init();
    init_panic_hook();
    await initThreadPool(NUM_OF_THREAD);
}

export const prover = () =>  {
    console.log('Prove called');
    prove();
};

export const verifier = () => {
    console.log('Verify called');
    verify();
};

const exports = {
    setup,
    prover,
    verifier,
};
export type Halo2Worker = typeof exports;

expose(exports);