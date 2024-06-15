let a = Math.random() * 100;
a = Number.parseInt(a)
let inp;
let score = 100;

while (inp != a){
    score = score - 1
    inp = prompt("Enter the number :");
    if(inp == a){
        console.log("Congratulations! You guess is correct")
        console.log(`You guess the actual number in ${100 - score} chances.`)
    }else if(inp > a && inp < 100 ){
        console.log("You guess the number is greater than actual number")
    }else if(inp < a && inp > 0){
        console.log("You guess the number is smaller than actual number")
    }
    else{
        console.log("Enter the number between 1 to 100")
    }
}