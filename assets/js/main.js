function geraNumeroBoleto(){
    let numero = '';

    for(let i = 0; i<55;i++){
        if(i === 6 || i === 18 || i === 31){
            numero += '.';  
        } else if(i === 12 || i === 25 || i === 38 || i === 40){
            numero += ' ';
        } else {
            numero += String(Math.floor(Math.random()*10));
        }
    }
    console.log(numero);
}
geraNumeroBoleto();