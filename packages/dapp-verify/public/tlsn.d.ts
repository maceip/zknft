export default class TLSN {
    private startPromise;
    private resolveStart;
    constructor();
    start(): Promise<void>;
    waitForStart(): Promise<any>;
    prove(url: string, options?: {
        method?: string;
        headers?: {
            [key: string]: string;
        };
        body?: string;
        maxTranscriptSize?: number;
        notaryUrl?: string;
        websocketProxyUrl?: string;
        secretHeaders?: string[];
        secretResps?: string[];
    }): Promise<any>;
    verify(proof: any, pubkey: string): Promise<any>;
}
//# sourceMappingURL=tlsn.d.ts.map