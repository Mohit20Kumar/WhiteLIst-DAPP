export const WHITELIST_CONTRACT_ADDRESS =
  "0x7c0Fc1c03d5eA8071c2211536b85FB0A45824c7c";
export const abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_maxWhiteListedAddresses",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "addAddressToWhileList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxWhiteListedAddresses",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numAddressesWhitelisted",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
