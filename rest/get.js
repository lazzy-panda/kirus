const {default: fetch} = require("fetch-with-proxy");

module.exports.getData = async function (url, ...args) {
    try {
        let response = await fetch(url);
        return await response;

    } catch(e) {
        console.log(e);
        throw e
    }

}