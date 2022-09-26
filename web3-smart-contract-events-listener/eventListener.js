const ethers = require("ethers");

class EventListener{
    constructor(_contractAbi, _contractAddress, _websocketProviderURL){
        this.contractAbi = _contractAbi;
        this.contractAddress=_contractAddress;
        this.websocketProviderURL =_websocketProviderURL;
        this.provider = new ethers.providers.WebSocketProvider(this.websocketProviderURL);
        this.contract = new ethers.Contract(this.contractAddress, this.contractAbi, this.provider);
    }

    listen(eventName, numberOfEventArguments, callback) {
        let args = [];
        for (let i = 0; i < numberOfEventArguments; i++) args.push("");
        this.contract.on(eventName, (...args) => {
            let returnValues = [];
            for (let i = 0; i < numberOfEventArguments; i++) {
                returnValues.push(args[i].toString());
            }
            if (typeof (callback) == "function")
                callback([...returnValues]);
        })
    }
}

module.exports = {
    EventListener,
}
