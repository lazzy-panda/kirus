module.exports.DictsFromSubs = function (string) {
    const regex = /[\W]+|[\d]+/g;
    let result = [...new Set(string.split(regex)
        .filter(Boolean)
        .filter(item => item.length > 3)
        .filter(word => !(word[0] === word[0].toUpperCase()))
    )];
    console.log(result);


}