export const TX_ID = "0xYourTransactionID";

export const mockTraceResponse = {
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
      blockHash: "0x1234",
      blockNumber: 1234,
      result: {
        gasUsed: "0x5208",
        output: "0x"
      },
      subtraces: 0,
      traceAddress: [],
      transactionHash: TX_ID,
      transactionPosition: 0,
      type: "call"
    }
  ]
};

export const mockReceiptResponse = {
  result: {
    blockHash: "0x1234",
    blockNumber: "0x1234",
    logs: [
      {
        address: "0xTokenContract",
        topics: [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x000000000000000000000000sender000000000000000000000000000000000000",
          "0x000000000000000000000000receiver00000000000000000000000000000000000"
        ],
        data: "0x0000000000000000000000000000000000000000000000000de0b6b3a7640000",
        blockNumber: "0x1234",
        transactionHash: TX_ID,
        transactionIndex: "0x1",
        blockHash: "0x1234",
        logIndex: "0x0",
        removed: false
      }
    ],
    status: "0x1",
    transactionHash: TX_ID
  }
};