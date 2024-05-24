let ans = 0, tempans = 0;
const b17 = 0, b15 = 3, b14 = 2, b13 = 1, b11 = 6, b10 = 5, b9 = 4, b7 = 9, b6 = 8, b5 = 7;
let point = false;
let signi = 0;
div = false;
mul = false;
add = false;
sub = false;
opp=false;


const button1 = document.querySelector("#b1");
const button2 = document.querySelector("#b2");
const button3 = document.querySelector("#b3");
const button4 = document.querySelector("#b4");
const button5 = document.querySelector("#b5");
const button6 = document.querySelector("#b6");
const button7 = document.querySelector("#b7");
const button8 = document.querySelector("#b8");
const button9 = document.querySelector("#b9");
const button10 = document.querySelector("#b10");
const button11 = document.querySelector("#b11");
const button12 = document.querySelector("#b12");
const button13 = document.querySelector("#b13");
const button14 = document.querySelector("#b14");
const button15 = document.querySelector("#b15");
const button16 = document.querySelector("#b16");
const button17 = document.querySelector("#b17");
const button18 = document.querySelector("#b18");
const button19 = document.querySelector("#b19");
const ansbox = document.querySelector("#answersection");
button15.onclick = bb15;
button17.onclick = bb17;
button14.onclick = bb14;
button13.onclick = bb13;
button11.onclick = bb11;
button10.onclick = bb10;
button9.onclick = bb9;
button7.onclick = bb7;
button6.onclick = bb6;
button5.onclick = bb5;
button1.onclick = AC;
button2.onclick = invert;
button3.onclick = percentt;
button18.onclick = dott;
button4.onclick = divide;
button8.onclick=multiply;
button12.onclick=subtract;
button16.onclick=addition;
button19.onclick=total;



function total(){
    if (add){
        ans=ans+tempans;
    }
    if (sub){
        ans=tempans-ans;
    }
    if (mul){
        ans=ans*tempans;
    }
    if (div){

        ans=tempans/ans;

    }
    ansbox.innerText = ans;
    tempans=ans;
    ans=0;
    
}
function divide(){
    tempans=ans;
    
    mul = false;
    add = false;
    sub = false;
    ans = 0;
    point = false;
    signi = 0;
    opp=true;
    div=true;
}
function multiply(){
    div = false;
    
    add = false;
    sub = false;
    opp=true;
    tempans=ans;
    ans = 0;
    point = false;
    signi = 0;
    mul=true;
}

function addition(){
    tempans=ans;
    div = false;
    mul = false;
  
    sub = false;
    ans = 0;
    point = false;
    signi = 0;
    opp=true;
    add=true;
}

function subtract(){
    div = false;
    mul = false;
    add = false;

    tempans=ans;
    ans = 0;
    point = false;
    signi = 0;
    opp=true;
    sub=true;
}



function dott() {
    if (point == false) {
        ansbox.innerText = ans + '.';
        point = true;
    }
}

function percentt() {
    ans = ans / 100;
    ansbox.innerText = ans;
}


function invert() {
    ans = ans * (-1);
    ansbox.innerText = ans;
}


function bb15() {
    if (point == false) {
        if (ans == 0) {
            ans = b15;
        }
        else {
            ans = ans * 10 + b15;
        }
    }
    else {
        signi++;
        ans = ans + b15 / (10 ** signi);
    }
    ansbox.innerText = ans;

}
function bb17() {
    if (point == false) {
        if (ans == 0) {
            ans = b17;
        }
        else {
            ans = ans * 10 + b17;
        }
    }
    else {
        signi++;
        ans = ans + b17 / (10 ** signi);
    }
    ansbox.innerText = ans;
}
function bb14() {
    if (point == false) {
        if (ans == 0) {
            ans = b14;
        }
        else {
            ans = ans * 10 + b14;
        }
    }
    else {
        signi++;
        ans = ans + b14 / (10 ** signi);
    }
    ansbox.innerText = ans;
}
function bb13() {
    if (point == false) {
        if (ans == 0) {
            ans = b13;
        }
        else {
            ans = ans * 10 + b13;
        }
    }
    else {
        signi++;
        ans = ans + b13 / (10 ** signi);
    }
    ansbox.innerText = ans;
}
function bb11() {
    if (point == false) {
        if (ans == 0) {
            ans = b11;
        }
        else {
            ans = ans * 10 + b11;
        }
    }
    else {
        signi++;
        ans = ans + b11 / (10 ** signi);
    }
    ansbox.innerText = ans;
}
function bb10() {
    if (point == false) {
        if (ans == 0) {
            ans = b10;
        }
        else {
            ans = ans * 10 + b10;
        }
    }
    else {
        signi++;
        ans = ans + b10 / (10 ** signi);
    }
    ansbox.innerText = ans;
}
function bb9() {
    if (point == false) {
        if (ans == 0) {
            ans = b9;
        }
        else {
            ans = ans * 10 + b9;
        }
    }
    else {
        signi++;
        ans = ans + b9 / (10 ** signi);
    }
    ansbox.innerText = ans;
}
function bb5() {
    if (point == false) {
        if (ans == 0) {
            ans = b5;
        }
        else {
            ans = ans * 10 + b5;
        }
    }
    else {
        signi++;
        ans = ans + b5 / (10 ** signi);
    }
    ansbox.innerText = ans;
}
function bb6() {
    if (point == false) {
        if (ans == 0) {
            ans = b6;
        }
        else {
            ans = ans * 10 + b6;
        }
    }
    else {
        signi++;
        ans = ans + b6 / (10 ** signi);
    }
    ansbox.innerText = ans;
}
function bb7() {
    if (point == false) {
        if (ans == 0) {
            ans = b7;
        }
        else {
            ans = ans * 10 + b7;
        }
    }
    else {
        signi++;
        ans = ans + b7 / (10 ** signi);
    }
    ansbox.innerText = ans;
}
function AC() {
    ans = 0;
    point = false;
    signi = 0;
    div = false;
    mul = false;
    add = false;
    sub = false;


    ansbox.innerText = ans;
}








