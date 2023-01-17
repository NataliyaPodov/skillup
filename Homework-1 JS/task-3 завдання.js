const pass =prompt ('Enter Pass');
console.log(pass);
let message;

const ADMIN_PASSWORD='jqueryismyjam';
if (pass==ADMIN_PASSWORD) {
alert (`Ласкаво просимо`); 
} else if(pass===null) {
    alert (`Скасовано користувачем!`);
}

else {
    alert (`Доступ заборонений, невiрний пароль!`);
}


 

