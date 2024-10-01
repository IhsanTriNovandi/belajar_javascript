let nama = 'ihsan'
let umur = 18
let tinggiBadan = 169.8
let beratBadan 
let pacar = 2834

beratBadan = 60

if(pacar == null){
    pacar = 'belum punya'}
else {pacar ='udah punya'}

let saldoAwal = 100000
let saldoTambahan = Number (prompt (`saldo anda Rp.${saldoAwal} dan tambahkan saldo anda `))
const saldoAkhir = saldoAwal + saldoTambahan

alert(`total saldo anda Rp.${saldoAkhir}`)



let x = 9
let y = 10
const z = x/y 

alert (`Nilai x = ${x} / nilai Y ${y} = ${z}`)

alert(`Nama saya ${nama} umur saya ${umur} tinggi badan saya ${tinggiBadan}cm berat badan saya ${beratBadan}kg pacar saya ${pacar}`
)

const namaGuru = ['sueb', 'iman', 'salek']
for (let i = 0; i < namaGuru.length; i++) {
    console.log(namaGuru[i])
}


let i = 0
while (i < 10)
    {
        i++
        console.log('ihsan')
    }


do {
    i++
    console.log('ihsan')
}
while (i < 10)


