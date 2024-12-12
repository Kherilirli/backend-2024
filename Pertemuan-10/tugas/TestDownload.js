const { showDownload, download } = require("./download");

const main = async () => {
    try {
        const result = await download();
        await showDownload(result);
    } catch (error) {
        console.error("Error:", error);
    }
};

main();
