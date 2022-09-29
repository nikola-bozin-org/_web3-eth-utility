const tms = require("./TransactionMessageSender.js");

sender = new tms.TransactionMessageSender("https://goerli.infura.io/v3/ca671c43f773424da52a9d42c1bd3fc3","0x364fbff3872cee9a52d10ff2b611a86af9040fc27a02fb6b8c71d5ac0f3a1314");

(async ()=>{
    const txHash = await sender.sendTransactionMessage("Hello Blockchain!","0xFaB7EDf1CefD5D40c66D8dF09b428484De5Fa5fF","30000");
    console.info(txHash);
})();