# Flowbit

A TypeScript library for analyzing Ethereum transaction flows, tracking token and ETH transfers.

## Features

- Track ETH transfers from transaction traces
- Track ERC20 token transfers from logs
- Consolidate multiple transfers for the same token/account
- Support for both CommonJS and ESM imports
- Full TypeScript support

## Installation

```bash
npm install flowbit
# or
yarn add flowbit
```

## Usage

```typescript
import { Flowbit } from 'flowbit';

// Initialize with an Ethereum node URL
const flowbit = new Flowbit('https://eth-mainnet.g.alchemy.com/v2/your-api-key');

// Analyze a transaction
const transfers = await flowbit.analyze('0xtx_hash_here');

// Example output:
// [
//   {
//     token: '0xb705268213d593b8fd88d3fdeff93aff5cbdcfae',
//     value: '44549462000000000000000',
//     direction: 'out',
//     account: '0x5f939de0e81a199a34e50615f34cbab82412459a'
//   },
//   {
//     token: '0xffffffffffffffffffffffffffffffffffffffff', // ETH
//     value: '839388510945838955',
//     direction: 'in',
//     account: '0x5f939de0e81a199a34e50615f34cbab82412459a'
//   }
// ]
```

## API

### `Flowbit`

#### Constructor
```typescript
new Flowbit(nodeUrl?: string)
```

#### Methods
```typescript
analyze(txid: string): Promise<TransferEvent[]>
```

### Types

```typescript
interface TransferEvent {
  token: string;    // Token address (ETH is 0xfff...)
  value: string;    // Amount in smallest unit (wei for ETH)
  direction: 'in' | 'out';
  account: string;  // Ethereum address
}
```

## License

MIT