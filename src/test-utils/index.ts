import { MockTransaction } from "../__mocks__/transactions/types";

export function mockFetchResponse(mockTx: MockTransaction) {
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    status: 200,
    json: () => Promise.resolve([
      {
        jsonrpc: "2.0",
        id: 1,
        result: mockTx.trace.result
      },
      {
        jsonrpc: "2.0",
        id: 2,
        result: mockTx.receipt.result
      }
    ])
  });
}