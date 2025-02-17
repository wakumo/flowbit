import { analyzeTransaction } from "./txAnalyzer";
import { JsonRpcClient } from "./JsonRpcClient";
export class Flowbit {
    constructor(nodeUrl) {
        if (nodeUrl) {
            this.rpcClient = new JsonRpcClient(nodeUrl);
        }
    }
    async analyze(txid) {
        if (!this.rpcClient) {
            throw new Error("Either nodeUrl or traces must be provided.");
        }
        const [traceData, receiptData] = await this.fetchTransactionData(txid);
        return analyzeTransaction(traceData, receiptData);
    }
    async fetchTransactionData(txid) {
        if (!this.rpcClient)
            throw new Error("Node URL is required to fetch data.");
        return this.rpcClient.getTransactionData(txid);
    }
}
//# sourceMappingURL=Flowbit.js.map