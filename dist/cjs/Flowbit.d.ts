import { TransferEvent } from "./types";
export declare class Flowbit {
    private rpcClient?;
    constructor(nodeUrl?: string);
    analyze(txid: string): Promise<TransferEvent[]>;
    private fetchTransactionData;
}
//# sourceMappingURL=Flowbit.d.ts.map