const decrement = document.querySelector("#decrement");
const increment = document.getElementById("increment");
const displayValue = document.getElementById("display");
const resetbtn = document.getElementById("reset");

// console.log(displayValue);
                     // decrement btn
decrement.addEventListener("click", function(){
    const value = Number(displayValue.innerText);
    if(value > 0){
        displayValue.innerText = value-1;
    }
    else{
        alert("Negative value not allowed");
    }
});
                    //increment
increment.addEventListener("click",function(){
    const value = Number(displayValue.innerText);
    if(value >=10){
        alert("10+ values are not allowed");
    }
    else{
        displayValue.innerText = value + 1;
    }
} );

                //reset button
resetbtn.addEventListener("click",()=>{
   displayValue.innerText = 0;

})

