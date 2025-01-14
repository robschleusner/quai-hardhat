"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rpcToTxData = void 0;
function rpcToTxData(rpcTransaction) {
    const isEip1559 = rpcTransaction.type === 2n;
    return {
        gasLimit: rpcTransaction.gas,
        // NOTE: RPC EIP-1559 txs still have this field for backwards compatibility,
        //  but FeeMarketEIP1559TxData doesn't.
        gasPrice: isEip1559 ? undefined : rpcTransaction.gasPrice,
        to: rpcTransaction.to ?? undefined,
        nonce: rpcTransaction.nonce,
        data: rpcTransaction.input,
        v: rpcTransaction.v,
        r: rpcTransaction.r,
        s: rpcTransaction.s,
        value: rpcTransaction.value,
        type: rpcTransaction.type,
        chainId: rpcTransaction.chainId ?? undefined,
        maxFeePerGas: rpcTransaction.maxFeePerGas,
        maxPriorityFeePerGas: rpcTransaction.maxPriorityFeePerGas,
        accessList: rpcTransaction.accessList?.map((item) => [
            item.address,
            item.storageKeys ?? [],
        ]),
    };
}
exports.rpcToTxData = rpcToTxData;
