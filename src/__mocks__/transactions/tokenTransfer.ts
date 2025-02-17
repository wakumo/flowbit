import { MockTransaction } from './types';

export const tokenTransfer: MockTransaction = {
  description: "USDT token transfer",
  trace: {
    result: [
      {
        action: {
          from: "0xdb005940a914e2392a729b4d39fd6043fdfd50a3",
          callType: "call",
          gas: "0xf3c4",
          input: "0xa9059cbb000000000000000000000000316fb96cbe2fb52dbe679d75b928fcfad858241b0000000000000000000000000000000000000000000000000000000000a7d8c0",
          to: "0xdac17f958d2ee523a2206206994597c13d831ec7",
          value: "0x0"
        },
        blockHash: "0xa613961440da57d8218f1f66055770e8fe3c353d49100d98e6fdeb493bf245f5",
        blockNumber: 21841736,
        result: {
          gasUsed: "0x5fb5",
          output: "0x"
        },
        subtraces: 0,
        traceAddress: [],
        transactionHash: "0x15f25ffa7b96965f1fa4484472fb2c6886c0b736b45f1063617005ab195abfa8",
        transactionPosition: 154,
        type: "call"
      }
    ]
  },
  receipt: {
    result: {
      logs: [
        {
          address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
          topics: [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000db005940a914e2392a729b4d39fd6043fdfd50a3",
            "0x000000000000000000000000316fb96cbe2fb52dbe679d75b928fcfad858241b"
          ],
          data: "0x0000000000000000000000000000000000000000000000000000000000a7d8c0",
          blockNumber: "0x14d4748",
          transactionHash: "0x15f25ffa7b96965f1fa4484472fb2c6886c0b736b45f1063617005ab195abfa8",
          blockHash: "0xa613961440da57d8218f1f66055770e8fe3c353d49100d98e6fdeb493bf245f5",
          logIndex: "0x105",
          removed: false
        }
      ]
    }
  },
  expectedTransfers: 2
};