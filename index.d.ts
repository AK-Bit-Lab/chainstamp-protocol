export declare const VERSION: string;
export declare const DEFAULT_NETWORK: "mainnet";
export declare const DEFAULT_CONTRACT_ADDRESS: string;
export declare const DEFAULT_CONTRACT_NAMES: {
  hash: string;
  stamp: string;
  tag: string;
};
export declare const CHAINSTAMP_FEES: {
  hash: {
    store: bigint;
    batchStore: bigint;
    updateDescription: bigint;
  };
  stamp: {
    stamp: bigint;
  };
  tag: {
    store: bigint;
    update: bigint;
  };
};
export declare function createProtocolConfig(overrides?: Record<string, unknown>): {
  network: string;
  contractAddress: string;
  contractNames: {
    hash: string;
    stamp: string;
    tag: string;
  };
  version: string;
};
