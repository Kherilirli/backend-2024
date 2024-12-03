const { index, store, update, destroy } = require('./FruitController');

const main = () => {
    console.log('Method index - Menampilkan buah');
    console.log(index());

    console.log('\nMethod store - Menambahkan buah Pisang');
    store('Pisang');
    console.log(index());

    console.log('\nMethod update - Update data 0 menjadi Kelapa');
    update(0, 'Kelapa');
    console.log(index());

    console.log('\nMethod destroy - Menghapus data 0');
    destroy(0);
    console.log(index());
};

main();