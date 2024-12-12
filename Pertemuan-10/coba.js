const {persiapan, rebusAir, masak} = require("./praktek.js");
const main = () => {
    persiapan ()
    .then ((res) => {
        console.log(res);
        return rebusAir();
    })
    .then ((res) => {
        console.log(res);
        return masak();
    })
    .then ((res) => {
        console.log(res);
    });
}

main();