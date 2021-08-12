let bod = document.querySelector('body');
let a = document.getElementById('favcolor1');
let b = document.getElementById('favcolor2');
let c, d;

let st1 = () => {
    c = a.value;
    d = b.value;
    bod.style.cssText = `background-image: linear-gradient(to right, ${c}, ${d})`
}

a.addEventListener('input', st1);
b.addEventListener('input', st1);