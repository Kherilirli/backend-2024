const showDownload = (result) => {
        console.log("Download selesai");
        console.log(`Hasil Download: ${result}`);
};

const download = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = "windows-10.exe";
            resolve(result);
        }, 3000);
    });
};

module.exports = { showDownload, download };
