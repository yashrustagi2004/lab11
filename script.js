let answer;
let choice;
let a;
let b;


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function division(a,b){
    if (b === 0) {
        return "division not possible";
    }
    else{
        return a/b;
    }
}

document.getElementById("myButton").onclick = function(){
    a=parseFloat(document.getElementById("num1").value);
    b=parseFloat(document.getElementById("num2").value);
    choice=parseInt(document.getElementById("myInput").value);
    console.log(choice)

    switch(choice){
        case 1:
            answer=add(a,b);
            break;
        case 2:
            answer=subtract(a,b);
            break;
        case 3:
            answer=multiply(a,b);
            break;
        case 4:
            answer=division(a,b);
            break;
        default:
            answer="invalid choice"
    }

    document.getElementById("answer").textContent = "the answer is: "+answer;

}