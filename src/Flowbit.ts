import { analyzeTransaction } from "./txAnalyzer";
import { TransactionTrace, TransactionReceipt } from "./types";
import { JsonRpcClient } from "./JsonRpcClient";

export class Flowbit {
  private rpcClient?: JsonRpcClient;

  constructor(nodeUrl?: string) {
    if (nodeUrl) {
      this.rpcClient = new JsonRpcClient(nodeUrl);
    }
  }

  async analyze(txid: string) {
    if (!this.rpcClient) {
      throw new Error("Either nodeUrl or traces must be provided.");
    }

    const [traceData, receiptData] = await this.fetchTransactionData(txid);

    return analyzeTransaction(traceData, receiptData);
  }

  private async fetchTransactionData(txid: string): Promise<[TransactionTrace[], TransactionReceipt]> {
    if (!this.rpcClient) throw new Error("Node URL is required to fetch data.");
    return this.rpcClient.getTransactionData(txid);
  }
}
