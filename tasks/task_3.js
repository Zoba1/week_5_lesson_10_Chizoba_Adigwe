
class Dog {
    constructor(breed,colour,size,tail){
        this.breed = breed
        this.colour = colour
        this.size = size
        this.tail = tail
    }

    bark(){
        return ' my dog is barking' 
    }
    walk(){
        return'she is doing the walkIt like a Diva'; 
    }
    run(){
        return'i am sorry but you cannot catch a running Dog purr'; 
    }
    wiggleTail(){
        return'we do the wiggle when we exicted'; 
    }
    getAngry(){
       return'Damn i am boiling'; 
    }
    
}
let breed1 = new Dog('husky', 'white', 20, 'short')
console.log(breed1);
let breed2 = new Dog('GSD', 'Black','20 ft', 'average')
console.log(breed2);
let breed3 = new Dog('ekuke', 'brown',15, 'small')
console.log(breed3);

let barkBtn = document.querySelector('.bark')
let walkBtn = document.querySelector('.walk')
let runBtn = document.querySelector('.run')
let angryBtn = document.querySelector('.angry')
let tailBtn = document.querySelector('.tail')

let display = document.querySelector('.display')
let displayimg = document.querySelector('.barking-dog')

function bark() {
    display.innerText = breed1.bark()
    displayimg.src = '../images/barking-rex.gif'
}
barkBtn.addEventListener('click', bark)


function walkIt() {
    display.innerText= breed1.walk()
    displayimg.src = '../images/entering-the-door-rex.gif'
}
walkBtn.addEventListener('click', walkIt)

function runner() {
    display.innerText = breed1.run()
    displayimg.src = '../images/doghusky-running.gif'
}
runBtn.addEventListener('click', runner)

function anger() {
    display.innerText = breed1.getAngry()
    displayimg.src = '../images/angry.gif'
}
angryBtn.addEventListener('click', anger)

function tails() {
    display.innerText = breed1.wiggleTail()
    displayimg.src = '../images/wiggletail.gif'
}
tailBtn.addEventListener('click', tails)


