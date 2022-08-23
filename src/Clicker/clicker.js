let count = 0;

function clicked(){
    count += 1;
}

function show(){
    document.getElementById("counter").innerHTML = count;
}