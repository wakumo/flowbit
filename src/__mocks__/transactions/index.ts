import { simpleTransfer } from './simpleTransfer';
import { tokenTransfer } from './tokenTransfer';

export const mockData = {
  // Simple ETH transfer
  "0xSimpleTransfer": simpleTransfer,
  // ERC20 token transfer
  "0xTokenTransfer": tokenTransfer,
} as const;

export type MockTxID = keyof typeof mockData;