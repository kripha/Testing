let round = 0;
const ourfirsts = ['./images/sayhi.mp4', './images/airbnb.jpg', './images/couch.mp4',
                    './images/soju.jpeg', './images/sleep.jpeg', './images/stitchesagain.png',
                    './images/iplay.mp4', './images/baseball.jpeg', './images/babyplay.mp4', 
                    './images/blue.jpeg', './images/snap.jpeg', './images/orange.jpeg', 
                    './images/apple.png', './images/pie.png', './images/happy.png'];
const ourfirstsmessage = ["I loved meeting your for the first time again. I am forever grateful for going to the airbnb, hooking fingers, flirting with you, and falling sleep asleep with you.", 
'Remember when I got stitches the day after?! Omg I was so sad that I had to wait 5 days to see you because I could not talk with those stitches. But luckily, time went by fast, and we started to hangout. I loved being able to drink with you one-one for the first time. And then you slept in my room for the first time', 
'We looked so cute on our first dressedup-minigolf date. I really appreciated that it was just you and me in the Thai restaurant. I loved holding your hand on the table. I had butterflies all over again. Even though you cheated and won, I would do it all over again', 
                        'This was our first time waxing eyebrows and shopping together. I still find it funny that we did not end getting anything at all. The fact that we had mere fun trying on clothes makes me grateful that I have a partner that I can always have fun with, no matter what we do.', 
                        'I remember when I sent you red hearts for the first time. I wanted to say I Love You so bad, but I could not because I wanted to wait until we were in person. I knew that green hearts were not the right representation of how I felt for you. You tremendously helped me gained the courage to send a red heart. Thank you, baby.'];

const mystickers = ['./images/squeeze.jpeg', './images/surprisekiss.jpeg', './images/patpat.jpeg', './images/hugshugs.jpeg', './images/ily.jpeg' ];

let photo1 = document.querySelector('.photo1');
let photo2 = document.querySelector('.photo2');
let photo3 = document.querySelector('.photo3');
const para = document.querySelector('.firstsmessage');
let sticker = document.querySelector('.firstssticker');


function clicked(arrow){
    if(arrow == 'left'){
        round = round - 3;
        console.log(`left: ${round}`)
    }

    if(arrow == 'right'){
        round = round + 3;
        console.log(`right: ${round}`)
    }

    if(round == -3){
        window.location = 'index.html'
    }
    
    if(round == 15){
        window.location = 'nyc.html';
    }

    if(round == 3 || round == 9 || round == 12){

        let parent = photo1.parentNode;
        let myimage = document.createElement("img");
        myimage.classList.add('photo1');
        parent.replaceChild(myimage, photo1);
        photo1 = document.querySelector('.photo1');
        

        let parent3 = photo3.parentNode;
        let myimage3 = document.createElement("img");
        myimage3.classList.add('photo3');
        parent3.replaceChild(myimage3, photo3);
        photo3 = document.querySelector('.photo3');
        /*let myimage3 = document.createElement("img");
        myimage3.classList.add('photo3');
        parent.replaceChild(myimage3, photo3);
        photo3 = document.querySelector('.photo3');*/

        if(round == 3){
            photo2.style.transform = 'rotate(-90deg)';

        }

    }

    /*ADD for photo2*/

    let parent2 = photo2.parentNode;
    console.log(parent2);
    let myimage2 = document.createElement("img");
    myimage2.classList.add('photo2');
    parent2.replaceChild(myimage2, photo2);
    console.log(parent2);
    photo2 = document.querySelector('.photo2');

    

    let parentstick = sticker.parentNode;
    let sticker2 = document.createElement("img");
    sticker2.classList.add('firstssticker');
    parentstick.replaceChild(sticker2, sticker);
    sticker = document.querySelector('.firstssticker');



    if(round == 0 || round == 6){

        let parent = photo1.parentNode;
        let myvideo = document.createElement("video");
        myvideo.classList.add('photo1');
        myvideo.controls = true;

        let mysource = document.createElement("source");
        mysource.type = "video/mp4";
        myvideo.appendChild(mysource);
        
        parent.replaceChild(myvideo, photo1);
        photo1 = document.querySelector('.photo1');
        /*photo1 = mysource;*/



        let parent3 = photo3.parentNode;
        let myvideo3 = document.createElement("video");
        myvideo3.classList.add('photo3');
        myvideo3.controls = true;
        myvideo3.mute = true;
        myvideo3.autoplay = true;
        myvideo3.loop = true;

        let mysource3 = document.createElement("source");
        mysource3.type = "video/mp4";
        myvideo3.appendChild(mysource3);
        

        parent3.replaceChild(myvideo3, photo3);
        photo3 = document.querySelector('.photo3');
        /*photo3 = mysource3*/

        console.log(myvideo);

        photo2.style.transform = 'rotate(-360deg)';

    }


    if(round == 0 || round == 6){
        photo1.firstChild.src = ourfirsts[round];
        photo3.firstChild.src = ourfirsts[round+2];

    } else {
        photo1.src = ourfirsts[round];
        
        photo3.src = ourfirsts[round+2];
        para.textContent = ourfirstsmessage[round/3];

    }

    if(round == 3 || round == 9){
    
        sticker.style.left = '250px';
    } else{
        sticker.style.left = '990px';

    }

    

    photo2.src = ourfirsts[round+1];
    sticker.src = mystickers[round/3];
    para.textContent = ourfirstsmessage[round/3];

    let back = document.querySelector('body.firsts');
    if(round == 0 || round == 9){
        back.style.backgroundColor = '#edde9d';
    }
    else if(round == 6){
        back.style.backgroundColor = '#f5d5d5';
    }
    else if(round == 12){
        back.style.backgroundColor = '#eccdcd';

    }
    else {
        back.style.backgroundColor = '#b9d5db';
    }




    

}

/*function flipCard(mycard){
    mycard.classList.toggle('flipCard');

}*/

const card = document.querySelectorAll('.card');
for(let i = 0; i < card.length; i++){
    card[i].addEventListener('click', () => {
    card[i].classList.toggle('flipCard');
});
}

/*const card1 = document.querySelectorAll('.cardOne');
console.log(card1);
for(let i = 0; i < card1.length; i++){
    card1[i].addEventListener('click', () => {
    card1[i].classList.toggle('flipCard');
});
}*/

function flipCardOne(){
    const card1 = document.querySelectorAll('.cardOne');
    for(let i = 0; i < card1.length; i++){
        card1[i].classList.toggle('flipCard');       
    }
}

function flipCardTwo(){
    const card1 = document.querySelectorAll('.cardTwo');
    for(let i = 0; i < card1.length; i++){
        card1[i].classList.toggle('flipCard');       
    }
}

function flipCardThree(){
    const card1 = document.querySelectorAll('.cardThree');
    for(let i = 0; i < card1.length; i++){
        card1[i].classList.toggle('flipCard');       
    }
}

function flipCardFour(){
    const card1 = document.querySelectorAll('.cardFour');
    for(let i = 0; i < card1.length; i++){
        card1[i].classList.toggle('flipCard');       
    }
}

const items = document.querySelectorAll('.love');
const title = document.querySelector('.longTitle');

console.log(title ==null);

items.forEach(x => x.addEventListener('mouseover', mouseOn));

items.forEach(x => x.addEventListener('mouseout', mouseOff));


function mouseOn(){
    title.style.display = 'none';
}

function mouseOff(){
    title.style.display = "block";
}


function change() {
    const elements = document.querySelectorAll(".screenshot");
    for (const element of elements) {
      element.classList.toggle("transformedstate");
    }

    const elements2 = document.querySelectorAll(".reason");
    for (const element of elements2) {
      element.style.display = 'block';
      element.classList.toggle("transformedstate2");
    }


}
  
const changeButton = document.querySelector(".callbutton");
changeButton.addEventListener("click", change);
  


/* YESSS OMG THIS WORKS FOR ONE CARD 
card.addEventListener('click', () => {
    card.classList.toggle('flipCard');
});*/

/*const cards = document.querySelectorAll('.card');*/
/*const cards = document.querySelector('.card');*/
/*const cardsArray = Array.from(cards);*/
/*for(let i =0; i < cardsArray.length; i++){
    cardsArray[i].addEventListener('click', flipCard(cardsArray[i]));
}*/


/*cardsArray.forEach(element => element.addEventListener( 'click', flipCard(element)));*/
/*cards.addEventListener( 'click', function() {
        cards.classList.toggle('is-flipped');
        });
cards.addEventListener('click', flipCard(cards));*/







