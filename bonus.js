const cart = [{
    nama: "Pensil",
    harga: 2000
}, {
    nama: "Buku",
    harga: 4000
}, {
    nama: "Penghapus",
    harga: 3000
}]

// const filter = cart.filter( item => item.harga >= 3000)
const totalBelanja = cart.reduce((prev, curr) => prev + curr.harga, 0)

// p = 0  c = 2000
// p = 2000 c = 4000
// p = 6000 c = 3000
// p = 9000 
// r = 9000
console.log(totalBelanja)