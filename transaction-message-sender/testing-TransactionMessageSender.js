const tms = require("./TransactionMessageSender.js");

sender = new tms.TransactionMessageSender("","");

(async ()=>{
    const txHash = await sender.sendTransactionMessage("Hello Blockchain!","","30000");
    console.info(txHash);
})();