let string = '';
let buttons = document.querySelectorAll('.button');
let input = document.querySelector('.input');

//create a array of buttons so that we can add any functionality on all buttons
Array.from(buttons).forEach((button) => { 
  button.addEventListener('click', (e) => {
    
    // console.log(e.target); to check if the button is clicked.
/*------------------------------------------------------------------------------*/
try{  
    if(e.target.innerHTML === '='){
    //whenever we will get a result if there is X it will replace it with *
    string = string.replace('X', '*');
    string =eval(string);//here the value of the string will be evaluated 
    input.value = string;//the value of the string will be displayed on the screen
    }
   /* to clear the input on the screen*/
    else if(e.target.innerHTML === 'C'){
            string = '';
            input.value = string;
        }
    else{    
        string += button.innerHTML;//giving our variable the value of the button clicked
        input.value = string;//now displaying the value of the button clicked on the screen
    }
}
catch(err){
    console.error(err);
    alert("Invalid Input");
    string = '';
    input.value = string;
}
 });
});
