import { MockTransaction } from './types';

export const simpleTransfer: MockTransaction = {
  description: "Simple ETH transfer between accounts",
  trace: {
    result: [
      {
        action: {
          from: "0xSender",
          to: "0xReceiver",
          value: "0x10",
          callType: "call",
          gas: "0x7470c",
          input: "0x"
        },
        type: "call"
      }
    ]
  },
  receipt: {
    result: {
      logs: []
    }
  },
  expectedTransfers: 1
};