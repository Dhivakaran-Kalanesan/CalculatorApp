let output = document.getElementById('display') ;

function Clear() {
    
    output.value ="";
}

function display(num) {

    output.value += num;

}
function del() {
    output.value = output.value.slice(0,-1);
}
function sum() {
    output.value = eval(output.value) ;
}