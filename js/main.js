
var count = 1;
var elem1 = document.getElementById("backdrop");

function run (){

    if(count == 1){

        elem1.style.backgroundColor = "#f8f8ff";

        count = 0;
    }
    else {

        elem1.style.backgroundColor = "#140022";

        count = 1;
    }

}