let text = document.querySelector('input#text-input');
let res = document.querySelector('input#result');
let palavra = [];

function button() {
    if (text.value && true) {
        palavra.push(text.value)
    } else {
        window.alert('Please input a value')
    }
}

function vpalavra() {
    if (palavra.value == "A") {
        res = "A is a palindrome"
    }
}