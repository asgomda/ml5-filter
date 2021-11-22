const buttonOne = document.querySelector("#pOne");
const buttonTwo = document.querySelector("#pTwo");
const buttonThree = document.querySelector("pThree");
const div = document.querySelector("#container");
let imageSrc = '';


// div which controls all the buttons
div.addEventListener('click', function (evt) {
    // incrementing the player value
    switch (evt.target.id){
        case 'pOne':
            imageSrc = '';
            console.log(1)
            break;
        case 'pTwo':
          imageSrc = '';
          console.log(2)
            break;
        case 'pThree':
          imageSrc = '';
          console.log(3)
            break;
    }
    
  });