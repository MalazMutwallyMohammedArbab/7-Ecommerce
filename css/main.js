let btncounterminus = document.querySelector("#btncounterminus");
let counter = 0;

btncounterminus.addEventListener('click', function(){
    counter--;
    if(counter < 0){
        document.querySelector("#result").innerHTML = "0";
        return;
    }
    document.querySelector("#result").innerHTML = counter;
})

let btncounterplus = document.querySelector("#btncounterplus");

btncounterplus.addEventListener('click', function(){
    counter++;
    if(counter < 0){
        document.querySelector("#result").innerHTML = "0";
        return;
    }
    document.querySelector("#result").innerHTML = counter;
})



let order = document.querySelector("#order");

order.addEventListener('click', function(){
    document.querySelector("#orders").classList.add('active');

    if (counter < 0){
        document.querySelector("#orders").innerHTML = '0';
    } else{
        document.querySelector("#orders").innerHTML = counter;
    }
})


/*function priceNumber(){
    document.querySelector('priceNumber').innerHTML = 'h';
} */


function showHide(){
    var el = document.getElementById('sub2');
    if (el && el.style.display == 'none'){
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
    if (counter <= 0){
        document.getElementById('priceNumber').innerHTML = 'Yor cart is empty';
    } else{
        document.getElementById('priceNumber').innerHTML = `Fall.Limited Edition.Sneakers $125.00*${counter} $${125 * counter}`;
    }
} 
/*function showHide(){
    document.getElementById('sub2').style.display = "block";
} */



var el1 = document.getElementById('one');
var el2 = document.getElementById('two')
el2.style.display = 'none';
var el3 = document.getElementById('three')
el3.style.display = 'none';
var el4 = document.getElementById('four')
el4.style.display = 'none';

function showImage1(){
    el1.style.display = 'block';
    el2.style.display = 'none';
    el3.style.display = 'none';
    el4.style.display = 'none';
}
function showImage2(){
    el2.style.display = 'block';
    el1.style.display = 'none';
    el3.style.display = 'none';
    el4.style.display = 'none';
}
function showImage3(){
    el3.style.display = 'block';
    el1.style.display = 'none';
    el2.style.display = 'none';
    el4.style.display = 'none';
}
function showImage4(){
    el4.style.display = 'block';
    el1.style.display = 'none';
    el2.style.display = 'none';
    el3.style.display = 'none';
}



function showimage(id){
    if (id == '1'){
        el1.style.display = 'block';
        el2.style.display = 'none';
        el3.style.display = 'none';
        el4.style.display = 'none';
    } 
    if (id == '2'){
        el1.style.display = 'none';
        el2.style.display = 'block';
        el3.style.display = 'none';
        el4.style.display = 'none';
    }
    if (id == '3'){
        el1.style.display = 'none';
        el2.style.display = 'none';
        el3.style.display = 'block';
        el4.style.display = 'none';
    }
    if (id == '4'){
        el1.style.display = 'none';
        el2.style.display = 'none';
        el3.style.display = 'none';
        el4.style.display = 'block';
    } 
} 

/* let trans = document.querySelector("#translate");
trans.addEventListener('click', function(){
    if (document.querySelector("#translate").classList == 'transition'){
        document.querySelector("#translate").classList.remove('transition');
    } else {
        document.querySelector("#translate").classList.add('transition');
    }
}) */