"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flowbit = void 0;
const txAnalyzer_1 = require("./txAnalyzer");
const JsonRpcClient_1 = require("./JsonRpcClient");
class Flowbit {
    constructor(nodeUrl) {
        if (nodeUrl) {
            this.rpcClient = new JsonRpcClient_1.JsonRpcClient(nodeUrl);
        }
    }
    async analyze(txid) {
        if (!this.rpcClient) {
            throw new Error("Either nodeUrl or traces must be provided.");
        }
        const [traceData, receiptData] = await this.fetchTransactionData(txid);
        return (0, txAnalyzer_1.analyzeTransaction)(traceData, receiptData);
    }
    async fetchTransactionData(txid) {
        if (!this.rpcClient)
            throw new Error("Node URL is required to fetch data.");
        return this.rpcClient.getTransactionData(txid);
    }
}
exports.Flowbit = Flowbit;
//# sourceMappingURL=Flowbit.js.map