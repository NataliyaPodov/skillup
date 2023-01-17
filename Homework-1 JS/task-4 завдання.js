const credits = 23580
const pricePerDroid = 3000
const Droid=prompt('Number of Droid')

const totalPrice = Droid * pricePerDroid
console.log(totalPrice)
const result = credits - totalPrice


if (totalPrice>credits) {
    console.log('Недостатньо коштiв на рахунку')
} else if (Droid===null) {
    console.log('Скасовано користувачем!')
}

else if (totalPrice<credits) {
console.log(`Ви купили ${Droid} дроiдiв, на рахунку залишилось ${result} кредитiв.`)
}
    



