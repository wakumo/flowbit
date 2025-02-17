import { JsonRpcRequest, TransactionTrace, TransactionReceipt } from "./types";

const RPC_METHODS = {
  TRACE_TRANSACTION: "trace_transaction",
  GET_TRANSACTION_RECEIPT: "eth_getTransactionReceipt"
} as const;

export class JsonRpcClient {
  constructor(private readonly nodeUrl: string) {}

  async getTransactionData(txid: string): Promise<[TransactionTrace[], TransactionReceipt]> {
    const requests = this.createTransactionDataRequests(txid);
    const [traceData, receiptData] = await this.batchRequest<TransactionTrace[] | TransactionReceipt>(requests);
    return [traceData as TransactionTrace[], receiptData as TransactionReceipt];
  }

  private createTransactionDataRequests(txid: string): JsonRpcRequest[] {
    return [
      {
        jsonrpc: "2.0",
        id: 1,
        method: RPC_METHODS.TRACE_TRANSACTION,
        params: [txid]
      },
      {
        jsonrpc: "2.0",
        id: 2,
        method: RPC_METHODS.GET_TRANSACTION_RECEIPT,
        params: [txid]
      }
    ];
  }

  private async batchRequest<T>(requests: JsonRpcRequest[]): Promise<T[]> {
    const res = await fetch(this.nodeUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requests)
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const responses = await res.json();

    if (!Array.isArray(responses) || responses.length !== requests.length) {
      throw new Error("Invalid response format");
    }

    responses.forEach((response, index) => {
      if (response.jsonrpc !== "2.0" || !response.result) {
        throw new Error(`Failed to fetch data for request ${index + 1}`);
      }
    });

    return responses.map(r => r.result);
  }
}