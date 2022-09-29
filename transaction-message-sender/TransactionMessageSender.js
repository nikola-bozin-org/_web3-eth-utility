const Web3 = require("web3");

class TransactionMessageSender{
  constructor(httpProvider,privateKey){
    this.web3 = new Web3(httpProvider);
    this.account = this.web3.eth.accounts.privateKeyToAccount(privateKey);
  }
  toHex(str) {
    var result = '';
    for (var i=0; i<str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  }
  async sendTransactionMessage(message,to,gas){
    const tx ={
      from:this.account.address,
      to:to,
      gas:gas,
      data:this.toHex(message),
      value:0,
      type:1
    }
    const signedTx = await this.account.signTransaction(tx);
    const txRecepit = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    return txRecepit.transactionHash;
  }
}

module.exports = {
  TransactionMessageSender,
}