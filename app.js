let count = 0;



function plus() {
    document.getElementById("value").innerHTML = ++count;

}

function reset() {
    count = 0;
    document.getElementById("value").innerHTML = count;

}

function minus() {
    document.getElementById("value").innerHTML = --count;
}


function posorneg() {
    if (document.getElementById("value").value > 0) {
        document.getElementById("value").style.color = "green";
    }

    if (document.getElementById("value").innerHTML < 0) {
        document.getElementById("value").style.color = "red";
    }
    if (document.getElementById("value").innerHTML == 0) {
        document.getElementById("value").style.color = "white";
    }


    console.log(document.getElementById("value").innerHTML);
}



document.getElementById("value").style.color = "green";