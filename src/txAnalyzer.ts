import { TransactionTrace, TransactionReceipt } from "./types";

const TRANSFER_EVENT_SIGNATURE = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';

interface TransferEvent {
  type: 'transfer';
  token: string;
  from: string;
  to: string;
  value: string;
}

export function analyzeTransaction(traces: TransactionTrace[], receipt: TransactionReceipt): TransferEvent[] {
  const transfers: TransferEvent[] = [];

  // Analyze native ETH transfers from traces
  traces.forEach(trace => {
    if (trace.type === 'call' && trace.action.value !== '0x0') {
      transfers.push({
        type: 'transfer',
        token: 'ETH',
        from: trace.action.from,
        to: trace.action.to,
        value: trace.action.value
      });
    }
  });

  // Analyze token transfers from receipt logs
  if (receipt.logs) {
    receipt.logs.forEach(log => {
      if (log.topics && log.topics[0] === TRANSFER_EVENT_SIGNATURE) {
        transfers.push({
          type: 'transfer',
          token: log.address,
          from: '0x' + log.topics[1].slice(26),
          to: '0x' + log.topics[2].slice(26),
          value: log.data
        });
      }
    });
  }

  return transfers;
}
