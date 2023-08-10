let equation = "";
function press(element){
    var displayDiv = document.querySelector("#display");
        if (displayDiv.innerHTML == 0){
            displayDiv.innerHTML = element;
        } else {
            displayDiv.innerHTML = displayDiv.innerHTML + element;
        }
}
function clr(){
    var displayDiv = document.querySelector("#display");
    displayDiv.innerHTML = 0;
    equation = "";
}
function setOP(OP){
    var displayDiv = document.querySelector("#display");
    let x = parseInt(displayDiv.innerHTML);
    equation = x + OP;
    displayDiv.innerHTML = "";
}
function calculate(){
    var displayDiv = document.querySelector("#display");
    let y = parseInt(displayDiv.innerHTML);
    let result = eval(equation + y);
    displayDiv.innerHTML = result;
}