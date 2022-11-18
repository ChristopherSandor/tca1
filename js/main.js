
var count = 1;
var elem1 = document.getElementById("backdrop");
var elem2 = document.getElementsByClassName("card");

function run (){

    if(count == 1){

        elem1.style.backgroundColor = "#f8f8ff";
        elem2.style.borderColor = "#140022";

        count = 0;
    }
    else {

        elem1.style.backgroundColor = "#140022";
        elem2.style.borderColor = "#f8f8ff";

        count = 1;
    }

}