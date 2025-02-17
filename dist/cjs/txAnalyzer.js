"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeTransaction = analyzeTransaction;
const constants_1 = require("./constants");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
function hexToDecimal(hex) {
    const cleanHex = hex.replace('0x', '');
    return new bignumber_js_1.default(`0x${cleanHex}`).toString(10);
}
function consolidateTransfers(transfers) {
    const balanceMap = new Map();
    // Sum up all transfers
    transfers.forEach(transfer => {
        const key = `${transfer.account.toLowerCase()}-${transfer.token.toLowerCase()}`;
        const currentBalance = balanceMap.get(key) || new bignumber_js_1.default(0);
        const value = new bignumber_js_1.default(transfer.value);
        balanceMap.set(key, currentBalance.plus(transfer.direction === 'in' ? value : value.negated()));
    });
    // Convert non-zero balances back to transfers
    const result = [];
    balanceMap.forEach((balance, key) => {
        if (!balance.isZero()) {
            const [account, token] = key.split('-');
            result.push({
                token,
                value: balance.abs().toString(10),
                direction: balance.isPositive() ? 'in' : 'out',
                account
            });
        }
    });
    return result;
}
function analyzeTransaction(traces, receipt) {
    const transfers = [];
    // Analyze native ETH transfers from traces
    traces.forEach(trace => {
        if (trace.type === 'call' && trace.action.value !== '0x0') {
            transfers.push({
                token: constants_1.ETH_ADDRESS,
                value: hexToDecimal(trace.action.value),
                direction: 'out',
                account: trace.action.from
            });
            transfers.push({
                token: constants_1.ETH_ADDRESS,
                value: hexToDecimal(trace.action.value),
                direction: 'in',
                account: trace.action.to
            });
        }
    });
    // Analyze token transfers from receipt logs
    if (receipt.logs) {
        receipt.logs.forEach(log => {
            if (log.topics && log.topics[0] === constants_1.TRANSFER_EVENT_SIGNATURE) {
                const from = '0x' + log.topics[1].slice(26);
                const to = '0x' + log.topics[2].slice(26);
                const value = hexToDecimal(log.data);
                transfers.push({
                    token: log.address,
                    value,
                    direction: 'out',
                    account: from
                });
                transfers.push({
                    token: log.address,
                    value,
                    direction: 'in',
                    account: to
                });
            }
        });
    }
    const consolidatedTransfers = consolidateTransfers(transfers);
    return consolidatedTransfers;
}
//# sourceMappingURL=txAnalyzer.js.map