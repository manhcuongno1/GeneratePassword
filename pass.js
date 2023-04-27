const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const bar4 = document.querySelector('.bar4');
const input1 = document.querySelector('#inputs1');
const input2 = document.querySelector('#inputs2');
const input3 = document.querySelector('#inputs3');
const input4 = document.querySelector('#inputs4');
const view = document.querySelector('.views');
const btn = document.querySelector('.btn');
const imga = document.querySelector('.imga');
const coppied = document.querySelector('.copied');
const message = document.querySelector('#message');

let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let statusss = document.querySelector('.medium');
let lengthPassWord = document.querySelector('#range1');
let str, pass;
let length1 = document.querySelector('#Number1');
let isChecked;
length1.textContent = lengthPassWord.value;
function validateForm() {
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        return false;
    }
    return true;
}

const displayLength = function () {
    length1.textContent = lengthPassWord.value;
    if (lengthPassWord.value < 5) {
        bar1.classList.remove("tooweak", "weak", "medium1", "strong");
        bar2.classList.remove("tooweak", "weak", "medium1", "strong");
        bar3.classList.remove("tooweak", "weak", "medium1", "strong");
        bar4.classList.remove("tooweak", "weak", "medium1", "strong");
        bar1.classList.add("tooweak");
        statusss.textContent = "too weak";
    }
    if (lengthPassWord.value >= 5 && lengthPassWord.value < 7) {
        bar1.classList.remove("tooweak", "weak", "medium1", "strong");
        bar2.classList.remove("tooweak", "weak", "medium1", "strong");
        bar3.classList.remove("tooweak", "weak", "medium1", "strong");
        bar4.classList.remove("tooweak", "weak", "medium1", "strong");
        bar1.classList.add("weak");
        bar2.classList.add("weak");
        statusss.textContent = "weak";

    }
    if (lengthPassWord.value >= 7 && lengthPassWord.value < 9) {
        bar1.classList.remove("tooweak", "weak", "medium1", "strong");
        bar2.classList.remove("tooweak", "weak", "medium1", "strong");
        bar3.classList.remove("tooweak", "weak", "medium1", "strong");
        bar4.classList.remove("tooweak", "weak", "medium1", "strong");
        bar1.classList.add("medium1");
        bar2.classList.add("medium1");
        bar3.classList.add("medium1");
        statusss.textContent = "medium";

    }
    if (lengthPassWord.value > 9) {
        bar1.classList.remove("tooweak", "weak", "medium1", "strong");
        bar2.classList.remove("tooweak", "weak", "medium1", "strong");
        bar3.classList.remove("tooweak", "weak", "medium1", "strong");
        bar4.classList.remove("tooweak", "weak", "medium1", "strong");
        bar1.classList.add("strong");
        bar2.classList.add("strong");
        bar3.classList.add("strong");
        bar4.classList.add("strong");
        statusss.textContent = "strong";

    }

}
btn.addEventListener("click", function () {
    isChecked = false;
    if (validateForm()) {
        message.classList.add('hidden');
        coppied.classList.add('hidden');
        imga.src = "./assets/imgs/icon-copy.svg";
        pass = "";
        str = "ABCDEFGHIqwertyuiopasdfghjklzxcvbnm&*()^%$#@!123456789";
        if (!input1.checked) {
            str = str.replace("ABCDEFGHI", "");
            console.log(str);
        }
        if (!input2.checked) {
            str = str.replace("qwertyuiopasdfghjklzxcvbnm", "");
        }
        if (!input3.checked) {
            str = str.replace("123456789", "");
        }
        if (!input4.checked) {
            str = str.replace("&*()^%$#@!", "");
        }
        for (let i = 0; i < lengthPassWord.value; i++) {
            pass += str[Math.trunc(Math.random() * str.length)];
        }
        view.textContent = pass;
    }
    else {
        message.classList.remove('hidden');
        message.textContent = "Please select one or more options";
    }

})

imga.addEventListener('click', function () {
    coppied.classList.remove('hidden');
    imga.src = "./assets/imgs/icon-copy-hover.svg";
})
