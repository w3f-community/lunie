const kavaV0Reducers = require('./kavaV0-reducers')

function setTransactionSuccess(transaction) {
  return transaction.code ? false : true
}

function blockReducer(networkId, block, transactions) {
  return {
    networkId,
    height: block.block.header.height,
    chainId: block.block.header.chain_id,
    hash: block.block_id.hash,
    time: block.block.header.time,
    transactions,
    proposer_address: block.block.header.proposer_address
  }
}

module.exports = {
  ...kavaV0Reducers,
  setTransactionSuccess,
  blockReducer
}
