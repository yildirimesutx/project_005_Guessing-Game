const down =document.querySelector(".down");
const up = document.querySelector(".up");
const guess = document.querySelector("#guess-number");
const guessBtn = document.querySelector("#guess-btn");
const report = document.querySelector(".report");
const attempts = document.querySelector(".attempts");
const reset =document.querySelector(".reset");
const form= document.querySelector("#form")


let isGameOver = false;
const prevGuesses =[]

const answer = randomNumber()
console.log(answer)

function randomNumber(){
    return Math.floor(Math.random()*100)+1
}

guessBtn.addEventListener("click", e=>{
    e.preventDefault()
    if(isGameOver) return


   if(prevGuesses.includes(guess.value)){
       report.innerText=`You already guessed ${guess.value}`}
  else{
    if(guess.value>answer){
        report.innerText="Little lower!";
        up.innerText =guess.value
    }
    else if(guess.value<answer){
        report.innerText="Little higher!"
        down.innerText =guess.value
    }
    else{
        report.innerText =`You got it! The answer was ${answer}`
        isGameOver = true
        return
        }
        prevGuesses.push(guess.value)
        attempts.innerText -=1
    
        if(attempts.innerText == "0"){
            report.innerText = `You run out of attempts! The answer was ${answer}.`
            isGameOver=true
        }
     } 
     form.reset()    
})

reset.addEventListener("click", ()=>{
    isGameOver = false;
    up.innerText = 100;
    down.innerText = 0;
    report.innerText="Make a guess!"
    attempts.innerText = 10
})