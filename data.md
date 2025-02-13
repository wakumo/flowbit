curl https://rpc.ankr.com/eth/ \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"method":"eth_getTransactionReceipt","params":["0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b"],"id":1,"jsonrpc":"2.0"}' | jq .

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
    "blockNumber": "0x14d0f69",
    "contractAddress": null,
    "cumulativeGasUsed": "0x1cb16",
    "effectiveGasPrice": "0x2ea4e7bc",
    "from": "0x5f939de0e81a199a34e50615f34cbab82412459a",
    "gasUsed": "0x1cb16",
    "logs": [
      {
        "address": "0xb705268213d593b8fd88d3fdeff93aff5cbdcfae",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000005f939de0e81a199a34e50615f34cbab82412459a",
          "0x000000000000000000000000fcfe058efa0be5bccfdd45e2c079997935fe0a64"
        ],
        "data": "0x00000000000000000000000000000000000000000000096f07fb07d59b2f0000",
        "blockNumber": "0x14d0f69",
        "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
        "transactionIndex": "0x0",
        "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
        "logIndex": "0x0",
        "removed": false
      },
      {
        "address": "0xb705268213d593b8fd88d3fdeff93aff5cbdcfae",
        "topics": [
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
          "0x0000000000000000000000005f939de0e81a199a34e50615f34cbab82412459a",
          "0x0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d"
        ],
        "data": "0x0000000000000000000000000000000000000000004ac274f2f021218e308000",
        "blockNumber": "0x14d0f69",
        "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
        "transactionIndex": "0x0",
        "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
        "logIndex": "0x1",
        "removed": false
      },
      {
        "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x000000000000000000000000fcfe058efa0be5bccfdd45e2c079997935fe0a64",
          "0x0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d"
        ],
        "data": "0x0000000000000000000000000000000000000000000000000ba61b674778876b",
        "blockNumber": "0x14d0f69",
        "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
        "transactionIndex": "0x0",
        "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
        "logIndex": "0x2",
        "removed": false
      },
      {
        "address": "0xfcfe058efa0be5bccfdd45e2c079997935fe0a64",
        "topics": [
          "0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"
        ],
        "data": "0x000000000000000000000000000000000000000000015091c87dbd4eaac2d78d000000000000000000000000000000000000000000000001952a93eb185206ad",
        "blockNumber": "0x14d0f69",
        "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
        "transactionIndex": "0x0",
        "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
        "logIndex": "0x3",
        "removed": false
      },
      {
        "address": "0xfcfe058efa0be5bccfdd45e2c079997935fe0a64",
        "topics": [
          "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
          "0x0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d",
          "0x0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d"
        ],
        "data": "0x00000000000000000000000000000000000000000000096f07fb07d59b2f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ba61b674778876b",
        "blockNumber": "0x14d0f69",
        "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
        "transactionIndex": "0x0",
        "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
        "logIndex": "0x4",
        "removed": false
      },
      {
        "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "topics": [
          "0x7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65",
          "0x0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d"
        ],
        "data": "0x0000000000000000000000000000000000000000000000000ba61b674778876b",
        "blockNumber": "0x14d0f69",
        "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
        "transactionIndex": "0x0",
        "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
        "logIndex": "0x5",
        "removed": false
      }
    ],
    "logsBloom": "0x00200000000000000000000080000000000000000000000000010000000000000000000000000000000000000000100002000000480000000000000000201000000000000000000000000008000000200008000000400000000000000000200000000000000000000000000000000000000000000000040000000010000000000000000000000000004000000000000000000000000000080000044000000000020000000000000000000000020000000000100000000000000000000000000100000002000000000000000000000000000000000000001000000002000020000010200000000000000000000000000000080000000000000008000000010000",
    "status": "0x1",
    "to": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
    "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
    "transactionIndex": "0x0",
    "type": "0x2"
  }
}
```


 curl https://rpc.ankr.com/eth/ \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"method":"trace_transaction","params":["0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b"],"id":1,"jsonrpc":"2.0"}' | jq .


```
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "action": {
        "from": "0x5f939de0e81a199a34e50615f34cbab82412459a",
        "callType": "call",
        "gas": "0x7470c",
        "input": "0x18cbafe500000000000000000000000000000000000000000000096f07fb07d59b2f00000000000000000000000000000000000000000000000000000b9d28d4c12e600000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000005f939de0e81a199a34e50615f34cbab82412459a0000000000000000000000000000000000000000000000000000000067ac068c0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000b705268213d593b8fd88d3fdeff93aff5cbdcfae000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "to": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        "value": "0x0"
      },
      "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
      "blockNumber": 21827433,
      "result": {
        "gasUsed": "0x1c9ae",
        "output": "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000096f07fb07d59b2f00000000000000000000000000000000000000000000000000000ba61b674778876b"
      },
      "subtraces": 5,
      "traceAddress": [],
      "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "from": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        "callType": "staticcall",
        "gas": "0x71749",
        "input": "0x0902f1ac",
        "to": "0xfcfe058efa0be5bccfdd45e2c079997935fe0a64",
        "value": "0x0"
      },
      "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
      "blockNumber": 21827433,
      "result": {
        "gasUsed": "0x9c8",
        "output": "0x000000000000000000000000000000000000000000014722c082b5790f93d78d000000000000000000000000000000000000000000000001a0d0af525fca8e180000000000000000000000000000000000000000000000000000000067ac060f"
      },
      "subtraces": 0,
      "traceAddress": [
        0
      ],
      "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "from": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        "callType": "call",
        "gas": "0x6f940",
        "input": "0x23b872dd0000000000000000000000005f939de0e81a199a34e50615f34cbab82412459a000000000000000000000000fcfe058efa0be5bccfdd45e2c079997935fe0a6400000000000000000000000000000000000000000000096f07fb07d59b2f0000",
        "to": "0xb705268213d593b8fd88d3fdeff93aff5cbdcfae",
        "value": "0x0"
      },
      "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
      "blockNumber": 21827433,
      "result": {
        "gasUsed": "0x4eb6",
        "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
      },
      "subtraces": 0,
      "traceAddress": [
        1
      ],
      "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "from": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        "callType": "call",
        "gas": "0x6a334",
        "input": "0x022c0d9f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ba61b674778876b0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000",
        "to": "0xfcfe058efa0be5bccfdd45e2c079997935fe0a64",
        "value": "0x0"
      },
      "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
      "blockNumber": 21827433,
      "result": {
        "gasUsed": "0xfcfc",
        "output": "0x"
      },
      "subtraces": 3,
      "traceAddress": [
        2
      ],
      "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "from": "0xfcfe058efa0be5bccfdd45e2c079997935fe0a64",
        "callType": "call",
        "gas": "0x6551b",
        "input": "0xa9059cbb0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d0000000000000000000000000000000000000000000000000ba61b674778876b",
        "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "value": "0x0"
      },
      "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
      "blockNumber": 21827433,
      "result": {
        "gasUsed": "0x750a",
        "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
      },
      "subtraces": 0,
      "traceAddress": [
        2,
        0
      ],
      "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "from": "0xfcfe058efa0be5bccfdd45e2c079997935fe0a64",
        "callType": "staticcall",
        "gas": "0x5df8c",
        "input": "0x70a08231000000000000000000000000fcfe058efa0be5bccfdd45e2c079997935fe0a64",
        "to": "0xb705268213d593b8fd88d3fdeff93aff5cbdcfae",
        "value": "0x0"
      },
      "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
      "blockNumber": 21827433,
      "result": {
        "gasUsed": "0x1bd",
        "output": "0x000000000000000000000000000000000000000000015091c87dbd4eaac2d78d"
      },
      "subtraces": 0,
      "traceAddress": [
        2,
        1
      ],
      "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "from": "0xfcfe058efa0be5bccfdd45e2c079997935fe0a64",
        "callType": "staticcall",
        "gas": "0x5dc40",
        "input": "0x70a08231000000000000000000000000fcfe058efa0be5bccfdd45e2c079997935fe0a64",
        "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "value": "0x0"
      },
      "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
      "blockNumber": 21827433,
      "result": {
        "gasUsed": "0x216",
        "output": "0x000000000000000000000000000000000000000000000001952a93eb185206ad"
      },
      "subtraces": 0,
      "traceAddress": [
        2,
        2
      ],
      "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "from": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        "callType": "call",
        "gas": "0x5a831",
        "input": "0x2e1a7d4d0000000000000000000000000000000000000000000000000ba61b674778876b",
        "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "value": "0x0"
      },
      "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
      "blockNumber": 21827433,
      "result": {
        "gasUsed": "0x2407",
        "output": "0x"
      },
      "subtraces": 1,
      "traceAddress": [
        3
      ],
      "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "from": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "callType": "call",
        "gas": "0x8fc",
        "input": "0x",
        "to": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        "value": "0xba61b674778876b"
      },
      "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
      "blockNumber": 21827433,
      "result": {
        "gasUsed": "0x53",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [
        3,
        0
      ],
      "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "from": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        "callType": "call",
        "gas": "0x56928",
        "input": "0x",
        "to": "0x5f939de0e81a199a34e50615f34cbab82412459a",
        "value": "0xba61b674778876b"
      },
      "blockHash": "0xe2d3591d364a35609697d33e6dc5bd57ccd1a26b9008e86ddaa1568ed836a9d2",
      "blockNumber": 21827433,
      "result": {
        "gasUsed": "0x0",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [
        4
      ],
      "transactionHash": "0xd6467591bf47b226a89c817277ab40141a0896a1f6f79e1da06061274915092b",
      "transactionPosition": 0,
      "type": "call"
    }
  ]
}
```