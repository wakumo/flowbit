import { Flowbit } from "../Flowbit";
import { mockData } from "../__mocks__/transactions";
import { mockFetchResponse } from "../test-utils";

describe("Flowbit Transaction Analysis", () => {
  const NODE_URL = "https://your-eth-node-url";

  beforeEach(() => {
    global.fetch = jest.fn();
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("Transaction Types", () => {
    test("should analyze simple ETH transfer", async () => {
      const mockTx = mockData["0xSimpleTransfer"];
      mockFetchResponse(mockTx);

      const flowbit = new Flowbit(NODE_URL);
      const result = await flowbit.analyze("0xSimpleTransfer");

      expect(console.log).toHaveBeenCalledWith("Processing TXID:", "0xSimpleTransfer");
      expect(result).toHaveLength(mockTx.expectedTransfers);
    });

    test("should analyze ERC20 token transfer", async () => {
      const mockTx = mockData["0xTokenTransfer"];
      mockFetchResponse(mockTx);

      const flowbit = new Flowbit(NODE_URL);
      const result = await flowbit.analyze("0xTokenTransfer");

      expect(console.log).toHaveBeenCalledWith("Processing TXID:", "0xTokenTransfer");
      expect(result).toHaveLength(mockTx.expectedTransfers);
    });
  });

  test("should throw an error if no nodeUrl is provided", async () => {
    const flowbit = new Flowbit();
    await expect(flowbit.analyze("0xSimpleTransfer"))
      .rejects.toThrow("Either nodeUrl or traces must be provided.");
  });
});
