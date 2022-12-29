const country = prompt('Enter country')
const country_1='Китай'
const country_2='Чилi'
const country_3='Австралiя'
const country_4='İндiя'
const country_5='Ямайка'
const price_1=100
const price_2=250
const price_3=170
const price_4=80
const price_5=120

switch (country) {
    case 'Китай': 
        console.log(`Доставка в ${country_1} буде коштувати ${price_1} кредитiв`)
        break
    case 'Чилi':
        console.log(`Доставка в ${country_2} буде коштувати ${price_2} кредитiв`) 
        break 
    case 'Австралiя':
        console.log(`Доставка в ${country_3} буде коштувати ${price_3} кредитiв`) 
        break
    case 'İндiя':
        console.log(`Доставка в ${country_4} буде коштувати ${price_4} кредитiв`)  
        break
   case 'Ямайка':
    console.log(`Доставка в ${country_5} буде коштувати ${price_5} кредитiв`)
    break
    default :
        console.log(`У вашiй краiнi доставка недоступна`)
}