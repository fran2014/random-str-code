const codes = [
    "3RATCFQ95LKN9L9",
    "UF7D9TSTS4AYGDS",
    "WXT93ATH4QEKF97",
    "0XD5XA9FN0KBZIY",
    "OQPH2QHY4343A0F",
    "RDZR3ZMCTC8MFB3",
    "STS81QCRT25ZB1T",
    "85JOYO62BZ859E2",
    "YHM3V3KOZTWN0MU",
    "2LQ89BFT16TNMGN",
];

const funnyCommit = () => {
    const code = codes[Math.floor(Math.random() * codes.length)];
    console.log(`\x1b[34m${code}\x1b[89m`);
}

module.exports = {
    funnyCommit
};