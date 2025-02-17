"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockFetchResponse = mockFetchResponse;
function mockFetchResponse(mockTx) {
    global.fetch.mockResolvedValueOnce({
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
//# sourceMappingURL=index.js.map