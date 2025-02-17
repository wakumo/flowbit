import { Flowbit } from "../Flowbit";
import { mockData } from "../__mocks__/transactions";
import { mockFetchResponse } from "../test-utils";
import { ETH_ADDRESS } from "../constants";

describe("Flowbit Transaction Analysis", () => {
  const NODE_URL = "https://your-eth-node-url";

  beforeEach(() => {
    global.fetch = jest.fn();
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

      expect(result).toHaveLength(2);

      // Check outgoing transfer
      expect(result[0]).toEqual({
        token: ETH_ADDRESS,
        value: '16',
        direction: 'out',
        account: '0xsender'
      });

      // Check incoming transfer
      expect(result[1]).toEqual({
        token: ETH_ADDRESS,
        value: '16',
        direction: 'in',
        account: '0xreceiver'
      });
    });

    test("should analyze ERC20 token transfer", async () => {
      const mockTx = mockData["0xTokenTransfer"];
      mockFetchResponse(mockTx);

      const flowbit = new Flowbit(NODE_URL);
      const result = await flowbit.analyze("0xTokenTransfer");

      expect(result).toHaveLength(2);

      // Check outgoing transfer
      expect(result[0]).toEqual({
        token: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        value: '11000000',
        direction: 'out',
        account: '0xdb005940a914e2392a729b4d39fd6043fdfd50a3'
      });

      // Check incoming transfer
      expect(result[1]).toEqual({
        token: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        value: '11000000',
        direction: 'in',
        account: '0x316fb96cbe2fb52dbe679d75b928fcfad858241b'
      });
    });

    test("should analyze token to ETH swap", async () => {
      const mockTx = mockData["0xSwapTokenToEth"];
      mockFetchResponse(mockTx);

      const flowbit = new Flowbit(NODE_URL);
      const result = await flowbit.analyze("0xSwapTokenToEth");

      expect(result).toHaveLength(6);

      // Before consolidation we should see 6 transfers:
      // 1. User -> Pool: IDEX token out (from Transfer event)
      // 2. Pool receives IDEX token in (from Transfer event)
      // 3. Pool -> Router: WETH out (from Transfer event)
      // 4. Router receives WETH in (from Transfer event)
      // 5. Router -> User: ETH out (from trace)
      // 6. User receives ETH in (from trace)

      // IDEX token transfer
      expect(result).toContainEqual({
        token: '0xb705268213d593b8fd88d3fdeff93aff5cbdcfae',
        value: '44549462000000000000000',
        direction: 'out',
        account: '0x5f939de0e81a199a34e50615f34cbab82412459a'
      });
      expect(result).toContainEqual({
        token: '0xb705268213d593b8fd88d3fdeff93aff5cbdcfae',
        value: '44549462000000000000000',
        direction: 'in',
        account: '0xfcfe058efa0be5bccfdd45e2c079997935fe0a64'
      });

      // WETH transfer
      expect(result).toContainEqual({
        token: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        value: '839388510945838955',
        direction: 'out',
        account: '0xfcfe058efa0be5bccfdd45e2c079997935fe0a64'
      });
      expect(result).toContainEqual({
        token: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        value: '839388510945838955',
        direction: 'in',
        account: '0x7a250d5630b4cf539739df2c5dacb4c659f2488d'
      });

      // ETH transfer
      expect(result).toContainEqual({
        token: ETH_ADDRESS,
        value: '839388510945838955',
        direction: 'out',
        account: '0x7a250d5630b4cf539739df2c5dacb4c659f2488d'
      });
      expect(result).toContainEqual({
        token: ETH_ADDRESS,
        value: '839388510945838955',
        direction: 'in',
        account: '0x5f939de0e81a199a34e50615f34cbab82412459a'
      });
    });

    test("should throw an error if no nodeUrl is provided", async () => {
      const flowbit = new Flowbit();
      await expect(flowbit.analyze("0xSimpleTransfer"))
        .rejects.toThrow("Either nodeUrl or traces must be provided.");
    });
  });
});
