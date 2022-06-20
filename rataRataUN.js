const mtk = 80
const bIndo = 90
const bIngg = 89
const ipa = 69
if (mtk >=0 && bIndo >=0 && bIngg>=0 && ipa>=0){
    let rata2Nilai=(mtk+bIndo+bIngg+ipa)/4
    if (rata2Nilai <=100 && rata2Nilai >=90){
        console.log(`Rata-rata = ${rata2Nilai}
        grade = A
        `);
    }
    else if (rata2Nilai <=89 && rata2Nilai >=80){
        console.log(`Rata-rata = ${rata2Nilai}
        grade = B
        `)
    }
    else if (rata2Nilai <=79 && rata2Nilai >=70){
        console.log(`Rata-rata = ${rata2Nilai}
        grade = C
        `)
    }
    else if (rata2Nilai <=69 && rata2Nilai >=60){
        console.log(`Rata-rata = ${rata2Nilai}
        grade = D
        `)
    }
    else //(rata2Nilai <=59 && rata2Nilai >=0)
    {
        console.log(`Rata-rata = ${rata2Nilai}
        grade = E
        `)
    }
}
else {console.log("Harus diisi semua dengan angka!")}