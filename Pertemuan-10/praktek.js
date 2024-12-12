const persiapan = () => {
    //setTimeout(function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mempersiapkan Bahan ...");
        }, 3000);
    });
};

const rebusAir = () => {
    //setTimeout(function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Merebus Air ...");
        }, 7000);
    });
};

const masak = () => {
    //setTimeout(function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Memasak Mie ...");
        }, 5000);
    });
};

module.exports = {persiapan, rebusAir, masak};