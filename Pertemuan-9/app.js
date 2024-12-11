const { index, store, update, destroy } = require('./FruitController');

const main = () => {
    console.log('Method index - Menampilkan buah');
    console.log(index());

    const newFruit = 'Pisang';
    console.log(`\nMethod store - Menambahkan buah ${newFruit}`);
    store(newFruit);
    console.log(index());

    const updateIndex = 0;
    const updatedFruit = 'Kelapa';
    console.log(`\nMethod update - Update data ${updateIndex} menjadi ${updatedFruit}`);
    update(updateIndex, updatedFruit);
    console.log(index());

    console.log('\nMethod destroy - Menghapus data 0');
    destroy(0);
    console.log(index());
};

main();