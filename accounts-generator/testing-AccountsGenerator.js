const accountsGenerator = require("./AccountsGenerator.js");

(async () =>{
    const accountGenerator = new accountsGenerator.AccountsGenerator();
    const account = accountGenerator.generateNewAccount();
    console.info(account);
    console.info(accountGenerator.getAccountAddress());
    console.info(accountGenerator.getAccountMnemonic());
    console.info(accountGenerator.getAccountPrivateKey());

})();