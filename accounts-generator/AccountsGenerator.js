const bip39 = require("bip39");
const ethers = require("ethers");

class AccountsGenerator{
    generateNewAccount(){
        const mnemonic = bip39.generateMnemonic();
        this.account = ethers.Wallet.fromMnemonic(mnemonic);
        return this.account;
    }
    getAccountAddress(){
        return this.account.address;
    }
    getAccountMnemonic(){
        return this.account.mnemonic;
    }
    getAccountPrivateKey(){
        return this.account.privateKey;
    }
}



module.exports = {
    AccountsGenerator,
}