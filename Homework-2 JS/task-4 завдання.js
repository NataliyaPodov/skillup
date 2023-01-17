 const formatString = function (string) {
    const stringLength = string.length;
    let primaryString = "";
    primaryString = string;

        if(stringLength<=40) {
            return primaryString;
        }
        else if(stringLength>=40) {
        let mes =  primaryString.slice(0,40) + ('...');
        return mes;
        }
       
    }
    
console.log(formatString('Curabitu r ligula sapien, tincidunt non.'));    
console.log(formatString('Vestibul um facilisis, purus nec pulvinar iaculic.'));
console.log(formatString('Curabitu r ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));

