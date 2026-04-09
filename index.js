/**
 * ChainStamp Protocol - shared protocol metadata for the ChainStamp ecosystem.
 */

const VERSION = "0.1.0";

const DEFAULT_CONTRACT_ADDRESS = "SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT";

const DEFAULT_CONTRACT_NAMES = {
  hash: "hash-registry",
  stamp: "stamp-registry",
  tag: "tag-registry",
};

const DEFAULT_NETWORK = "mainnet";

const CHAINSTAMP_FEES = {
  hash: {
    store: 30000n,
    batchStore: 25000n,
    updateDescription: 10000n,
  },
  stamp: {
    stamp: 50000n,
  },
  tag: {
    store: 40000n,
    update: 40000n,
  },
};

function createProtocolConfig(overrides = {}) {
  return {
    network: DEFAULT_NETWORK,
    contractAddress: DEFAULT_CONTRACT_ADDRESS,
    contractNames: { ...DEFAULT_CONTRACT_NAMES },
    version: VERSION,
    ...overrides,
  };
}

module.exports = {
  VERSION,
  DEFAULT_NETWORK,
  DEFAULT_CONTRACT_ADDRESS,
  DEFAULT_CONTRACT_NAMES,
  CHAINSTAMP_FEES,
  createProtocolConfig,
};
