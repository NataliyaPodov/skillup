let input;
let total=0;

    for(let i=0; i !==null; i+=1) {
      input = prompt('Enter number');
        
        if (input !==null) {
            input=Number(input);
            total+=input;
        
        } else if (input ===null) {
            alert (`Загальна сума чисел дорівнює ${total}`);
        }
     }
     







