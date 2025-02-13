import { analyzeTransaction } from "./txAnalyzer";
import { TransactionTrace, TransactionReceipt, JsonRpcRequest } from "./types";

export class Flowbit {
  private nodeUrl?: string;

  constructor(nodeUrl?: string) {
    this.nodeUrl = nodeUrl;
  }

  async analyze(txid: string) {
    if (!this.nodeUrl) {
      throw new Error("Either nodeUrl or traces must be provided.");
    }

    console.log("Processing TXID:", txid);

    const [traceData, receiptData] = await this.fetchTransactionData(txid);

    if (!traceData || traceData.length === 0) {
      console.log("No trace data found.");
      return [];
    }

    console.log(`Trace Length: ${traceData.length}`);

    return analyzeTransaction(traceData, receiptData);
  }

  private async fetchTransactionData(txid: string): Promise<[TransactionTrace[], TransactionReceipt]> {
    if (!this.nodeUrl) throw new Error("Node URL is required to fetch data.");

    const requests: JsonRpcRequest[] = [
      {
        jsonrpc: "2.0",
        id: 1,
        method: "trace_transaction",
        params: [txid]
      },
      {
        jsonrpc: "2.0",
        id: 2,
        method: "eth_getTransactionReceipt",
        params: [txid]
      }
    ];

    const res = await fetch(this.nodeUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requests)
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data) || !data[0].result || !data[1].result) {
      throw new Error("Failed to fetch transaction data");
    }

    return [data[0].result, data[1].result];
  }
}
