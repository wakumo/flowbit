import { MockTransaction } from "../__mocks__/transactions/types";

export function mockFetchResponse(mockTx: MockTransaction) {
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    status: 200,
    json: () => Promise.resolve([mockTx.trace, mockTx.receipt])
  });
}