import { Proof } from './types';
export declare const prove: (url: string, options: {
    notaryUrl: string;
    websocketProxyUrl: string;
    method?: string | undefined;
    headers?: {
        [key: string]: string;
    } | undefined;
    body?: string | undefined;
    maxTranscriptSize?: number | undefined;
    secretHeaders?: string[] | undefined;
    secretResps?: string[] | undefined;
}) => Promise<Proof>;
export declare const verify: (proof: Proof, publicKeyOverride?: string) => Promise<{
    time: number;
    sent: string;
    recv: string;
    notaryUrl: string;
}>;
//# sourceMappingURL=index.d.ts.map