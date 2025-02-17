import { simpleTransfer } from './simpleTransfer';
import { tokenTransfer } from './tokenTransfer';
import { swapTokenToEth } from './swapTokenToEth';

export const mockData = {
  // Simple ETH transfer
  "0xSimpleTransfer": simpleTransfer,
  // ERC20 token transfer
  "0xTokenTransfer": tokenTransfer,
  "0xSwapTokenToEth": swapTokenToEth,
} as const;

export type MockTxID = keyof typeof mockData;