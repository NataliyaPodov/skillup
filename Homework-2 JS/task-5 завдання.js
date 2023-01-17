const checkForSpam = function(message) {

const check_1 = message.includes('sale');
const check_2 = message.includes('SPAM');
console.log(check_1 || check_2);
};

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));