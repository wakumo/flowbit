import { MockTransaction } from './types';

export const tokenTransfer: MockTransaction = {
  description: "ERC20 token transfer",
  trace: {
    result: [{
      action: {
        from: "0xSender",
        to: "0xTokenContract",
        value: "0x0",
        callType: "call",
        gas: "0x7470c",
        input: "0x"
      },
      type: "call"
    }]
  },
  receipt: {
    result: {
      logs: [
        {
          address: "0xTokenContract",
          topics: [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000sender000000000000000000000000000000000000",
            "0x000000000000000000000000receiver00000000000000000000000000000000000"
          ],
          data: "0x0000000000000000000000000000000000000000000000000de0b6b3a7640000"
        }
      ]
    }
  },
  expectedTransfers: 1
};