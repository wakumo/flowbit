import { TransactionTrace, TransactionReceipt } from "./types";
export declare class JsonRpcClient {
    private readonly nodeUrl;
    constructor(nodeUrl: string);
    getTransactionData(txid: string): Promise<[TransactionTrace[], TransactionReceipt]>;
    private createTransactionDataRequests;
    private batchRequest;
}
//# sourceMappingURL=JsonRpcClient.d.ts.map