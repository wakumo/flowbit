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

    const responses = await res.json();

    if (!Array.isArray(responses) || responses.length !== 2) {
      throw new Error("Invalid response format");
    }

    const [traceResponse, receiptResponse] = responses;

    if (traceResponse.jsonrpc !== "2.0" || !traceResponse.result) {
      throw new Error("Failed to fetch trace data");
    }

    if (receiptResponse.jsonrpc !== "2.0" || !receiptResponse.result) {
      throw new Error("Failed to fetch receipt data");
    }

    return [traceResponse.result, receiptResponse.result];
  }
}
