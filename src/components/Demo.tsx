import React from 'react';
import { useAppKitProvider } from '@reown/appkit/react';
import { BrowserProvider, Contract, Eip1193Provider } from 'ethers';

function Components() {
  const { walletProvider } = useAppKitProvider('eip155');
  const controllerAddress = "0x54d02DcB38B76A67dC9368D8457D1F384B865c70"; // Add your controller contract address here
  const controllerContractAbi = [{ "inputs": [{ "internalType": "address", "name": "_controllerAdmin", "type": "address" }, { "internalType": "address", "name": "_treasury", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_collateralProxy", "type": "address" }, { "indexed": false, "internalType": "address[]", "name": "_assets", "type": "address[]" }, { "indexed": false, "internalType": "uint256[]", "name": "_amounts", "type": "uint256[]" }], "name": "Liquidation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_collateralProxy", "type": "address" }, { "indexed": false, "internalType": "address[]", "name": "_assets", "type": "address[]" }, { "indexed": false, "internalType": "uint256[]", "name": "_amounts", "type": "uint256[]" }], "name": "Payment", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_collateralProxy", "type": "address" }, { "indexed": false, "internalType": "address", "name": "_asset", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "Withdrawal", "type": "event" }, { "inputs": [], "name": "EIP712_DOMAIN_NAME", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "EIP712_DOMAIN_TYPE_HASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "EIP712_DOMAIN_VERSION", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PAY_TYPE_HASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "WITHDRAW_TYPE_HASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "controllerAdmin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_collateralProxy", "type": "address" }], "name": "increaseNonce", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_collateralProxy", "type": "address" }, { "internalType": "address[]", "name": "_assets", "type": "address[]" }, { "internalType": "uint256[]", "name": "_amounts", "type": "uint256[]" }], "name": "liquidateAsset", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_collateralProxy", "type": "address" }, { "internalType": "address[]", "name": "_assets", "type": "address[]" }, { "internalType": "uint256[]", "name": "_amounts", "type": "uint256[]" }, { "internalType": "uint256", "name": "_expiresAt", "type": "uint256" }, { "internalType": "bytes32", "name": "_salt", "type": "bytes32" }, { "internalType": "bytes", "name": "_signature", "type": "bytes" }], "name": "makePayment", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonce", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "treasury", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_controllerAdmin", "type": "address" }], "name": "updateControllerAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_treasury", "type": "address" }], "name": "updateTreasury", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_collateralProxy", "type": "address" }, { "internalType": "address", "name": "_asset", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "address", "name": "_recipient", "type": "address" }, { "internalType": "uint256", "name": "_expiresAt", "type": "uint256" }, { "internalType": "bytes32", "name": "_salt", "type": "bytes32" }, { "internalType": "bytes", "name": "_signature", "type": "bytes" }], "name": "withdrawAsset", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
  const proxyAddress = "0xb13B1A18Add4d33979392d5022Aa86B1310A0549"; // Add the proxy address here
  const token = "0x29684075a3C86ea11D9964BcAf0F956e801396bD"; // Add the token address here
  const amount = 500; // Specify the amount here
  const recipientAddress = "0xB1Eb2977D71b27EB6DE81dd13E7FB744f9B8F98c"; // Add the recipient address here
  const expiresAtUnix = Math.floor(new Date("2025-01-24T12:38:43.000Z").getTime() / 1000);// Add the date here
  const saltBuffer = Uint8Array.from(
    atob("F9oeW2bOhDTLy68WG8t3jREXEni3R8NPAJkj/pzjDPQ="),
    (c) => c.charCodeAt(0)
  ); // Specify the salt value here
  const signature = "0x6d02eec9ec3e9cd267fec1996974b9f68db4928b9f84587b4c6aea509b6011de44c328f9acb7f23f00dbae9d390a1f2677f425bb2d9d9d3a68bb642adbbcaea81c"; // Add the signature here

  const ethersProvider = React.useMemo(
    () => new BrowserProvider(walletProvider as Eip1193Provider),
    [walletProvider]
  );

  const handleWithdraw = async () => {
    try {
      if (!controllerAddress || !controllerContractAbi) {
        console.error("Controller address or ABI is not set.");
        return;
      }

      const signer = await ethersProvider.getSigner();
      console.log("signer", signer);
      const controllerContract = new Contract(controllerAddress, controllerContractAbi, signer);

      console.log("Signer", signer);
      console.log("Controller contract", controllerContract);

      const tx = await controllerContract.withdrawAsset(
        proxyAddress,
        token,
        amount,
        recipientAddress,
        expiresAtUnix,
        saltBuffer,
        signature
      );

      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Transaction confirmed:", tx.hash, tx);
    } catch (error) {
      console.error("Error while withdrawing asset:", error);
    }
  };

  return (
    <button
      onClick={handleWithdraw}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      Withdraw Money
    </button>
  );
}

export default Components;