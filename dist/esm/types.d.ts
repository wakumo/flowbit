export interface JsonRpcRequest {
    jsonrpc: "2.0";
    id: number;
    method: string;
    params: any[];
}
export interface TraceAction {
    from: string;
    to: string;
    value: string;
    callType: string;
    gas: string;
    input: string;
}
export interface TraceResult {
    gasUsed: string;
    output: string;
}
export interface TransactionTrace {
    action: TraceAction;
    blockHash: string;
    blockNumber: number;
    result: TraceResult;
    subtraces: number;
    traceAddress: number[];
    transactionHash: string;
    transactionPosition: number;
    type: string;
}
export interface Log {
    address: string;
    topics: string[];
    data: string;
    blockNumber: string;
    transactionHash: string;
    transactionIndex: string;
    blockHash: string;
    logIndex: string;
    removed: boolean;
}
export interface TransactionReceipt {
    blockHash: string;
    blockNumber: string;
    contractAddress: string | null;
    cumulativeGasUsed: string;
    effectiveGasPrice: string;
    from: string;
    gasUsed: string;
    logs: Log[];
    logsBloom: string;
    status: string;
    to: string;
    transactionHash: string;
    transactionIndex: string;
    type: string;
}
export interface TraceResponse {
    result: TransactionTrace[];
}
export interface TransferEvent {
    token: string;
    value: string;
    direction: 'in' | 'out';
    account: string;
}
//# sourceMappingURL=types.d.ts.map