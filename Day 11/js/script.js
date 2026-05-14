
function outer(){

    let value=10;

     function inner(){
        value++;
        console.log(value);
    }
    return inner;
}

let resultFunction =outer();

resultFunction()
resultFunction()
resultFunction()