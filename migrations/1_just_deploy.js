const Toolb = artifacts.require("../contracts/Toolb.sol");

module.exports = async (deployer, network, addresses) => {
  await deployer.deploy(Toolb, {gas: 10000000});
};
