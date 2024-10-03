
    /*const namaHari = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']
    const hari = new Date().getDay()
    const hariIni = namaHari[hari]

    console.log(`hari ini adalah hari ${hariIni}`)*/


    const arraytugas = ['4', '6', '8', '', '12', '14']
    const cari10 = arraytugas[3]
    const cariaarray = cari10(10)

    console.log(arraytugas)


// const arraykamu = []
// arraykamu['ketawa'] = '😂'
// arraykamu['ngakak'] = '🤣'
// arraykamu['senyum'] = '😊'
// const length = Object.keys(arraykamu).length

// console.log(length)


// const arraysaya = ['🍿', '🧂', '🍕', '🍔', '🍟', '🌭',]
// lenght = 5

// const pizza = arraysaya.includes('🍕')

// if(pizza) {
//     const posisipizza = arraysaya.indexOf('🍕')
//     const indexbefore = posisipizza -1
//     const indexafter = posisipizza +1
//     const before = arraysaya[indexbefore]    
//     const after = arraysaya[indexafter]    
//     console.log(`makanan sebelum pizza adalah ${before}`)
//     console.log(`makanan sesudah pizza adalah ${after}`)
//     const makananawal = arraysaya.shift()
//     console.log(`makanan awal adalah ${makananawal} `)
//     const makananakhir = arraysaya.pop()
//     console.log(`makanan akhir adalah ${makananakhir}`)
// }else{
//     console.log('saya tidak tau')
// }

// const arraykita = ['🥚', '10', {tomato: function(){
//     console.log('ini tomat')},},
//     ['makan', 'makanan'] ]

// console.log(arraykita[2].tomato)

// const arrayyou = ['🍳', '🧇', '🥞']
// const arrayme = ['🧈', '🍞', '🥐']

// const margearray = arrayyou.concat(arrayme)

// // for (list in margearray) console.log(list)

// margearray.map((value, index) => console.log(index, value))




// const datas = [
//     {
//         nama: 'ihsan tri novandi',
//         job: 'student',
//         age: '17',
//     },

//     {
//         nama: 'ihsan',
//         job: 'student',
//         age: '19',
//     },

//     {
//         nama: 'tri novandi',
//         job: 'student',
//         age: '15',
//     },

//     {
//         nama: 'novandi',
//         job: 'student',
//         age: '11',
//     }
// ]

// // datas.map((value, index) => {console.log(value)})
// // datas.sort((a,b) => a.age - b.age).map(value => console.log(value))
// datas.sort((a,b) => b.age - a.age).filter((x) => x.age < 15).map(value => console.log(value))