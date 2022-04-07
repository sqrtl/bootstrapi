// Dog Image Flexer
const dogBtn = document.querySelector('#dogButton');
let dogImg = document.querySelector('#dogPics');


// dogBtn.addEventListener('click', function () {
//     dogImg.classList += "card-body";
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(function(httpResponse){
//         return httpResponse.json();
//     })
//     .then(function (data){
//         dogImg.src = data.message;
//     })

// }) 

dogBtn.addEventListener('click', async function(){
    dogImg.classList += "card-body";

    const httpResponse = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await httpResponse.json();
    dogImg.src = data.message;
})

// The Weather Channel

// const 
