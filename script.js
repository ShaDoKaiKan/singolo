const MENU = document.getElementById('menu');
const ANCHORS = document.querySelectorAll('a[href*="#"]');

const LEFT_ARROW = document.getElementById('left-arrow');
const RIGHT_ARROW = document.getElementById('right-arrow');
const HOME_BTN_V = document.getElementById('home-btn-v');
const HOME_BTN_H = document.getElementById('home-btn-h');

const PORTFOLIO_MENU = document.getElementById('portfolio-menu');
const IMAGES = document.getElementById('images');

const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

//----------------------------------HEADER------------------------------------------------
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

for(let anchor of ANCHORS) {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};
//----------------------------------SLIDER-------------------------------------------------
let count = 0;

LEFT_ARROW.addEventListener('click', (event) => {

    if (count === -1020) {
        let interval = setInterval(() => {
            document.querySelectorAll('.slider').forEach((slider) => {
                count += 10;
                slider.style.left = `${count}px`;
                document.getElementById('sliderS1').style.backgroundColor = '#f06c64';
                document.getElementById('slider-bt').style.backgroundColor = '#f06c64';
                if (slider.style.left === '0px') {
                    clearInterval(interval);
                    return;
                }
            });
        }, 1);
    }

    if (count === 0) {
        let interval = setInterval(() => {
            document.querySelectorAll('.slider').forEach((slider) => {
                count -= 10;
                slider.style.left = `${count}px`;
                document.getElementById('sliderS1').style.backgroundColor = '#648bf0';
                document.getElementById('slider-bt').style.backgroundColor = '#648bf0';
                if (slider.style.left === '-1020px') {
                    clearInterval(interval);
                    return;
                }
            });
        }, 1);
    }   

});

RIGHT_ARROW.addEventListener('click', (event) => {
    if (count === 0) {
        let interval = setInterval(() => {
            document.querySelectorAll('.slider').forEach((slider) => {
                count -= 10;
                slider.style.left = `${count}px`;
                document.getElementById('sliderS1').style.backgroundColor = '#648bf0';
                document.getElementById('slider-bt').style.backgroundColor = '#648bf0';
                if (slider.style.left === '-1020px') {
                    clearInterval(interval);
                    return;
                }
            });
        }, 1);
    } 

    if (count === -1020) {
        let interval = setInterval(() => {
            document.querySelectorAll('.slider').forEach((slider) => {
                count += 10;
                slider.style.left = `${count}px`;
                document.getElementById('sliderS1').style.backgroundColor = '#f06c64';
                document.getElementById('slider-bt').style.backgroundColor = '#f06c64';
                if (slider.style.left === '0px') {
                    clearInterval(interval);
                    return;
                }
            });
        }, 1);
    }
   
});




HOME_BTN_V.addEventListener('click', (event) => {
    let screen_v = document.querySelector('.black-screen-v');
    if (screen_v.style.visibility === 'hidden') {
        screen_v.style.visibility = 'visible';
    } else {
        screen_v.style.visibility = 'hidden';
    }
});

HOME_BTN_H.addEventListener('click', (event) => {
    let screen_h = document.querySelector('.black-screen-h');
    if (screen_h.style.visibility === 'hidden') {
        screen_h.style.visibility = 'visible';
    } else {
        screen_h.style.visibility = 'hidden';
    }
});
//----------------------------------PORTFOLIO--------------------------------------------

PORTFOLIO_MENU.addEventListener('click', (event) => {
    PORTFOLIO_MENU.querySelectorAll('a').forEach(el => el.classList.remove('active-portfolio'));
    event.target.classList.add('active-portfolio');
    let elements = IMAGES.childNodes;
    for(let i = 0; i < elements.length; i++) {
        IMAGES.appendChild(elements[i]);
    }
});

IMAGES.addEventListener('click', (event) => {
    IMAGES.querySelectorAll('.port-img').forEach(el => el.classList.remove('active-img'));
    event.target.classList.add('active-img');
    if (document.getElementById('images').classList.value === 'imagesPS2 active-img') {
        document.getElementById('images').classList.remove('active-img')
    }
});

//----------------------------------FORM-------------------------------------------------
BUTTON.addEventListener('click', (event) => {
    const subject = document.getElementById('subject').value.toString();
    const describe = document.getElementById('describe').value.toString();
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    if (document.getElementById('name').checkValidity() && document.getElementById('email').checkValidity()) {
        event.preventDefault();
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    } else return;

    if (document.getElementById('subject').value === '') {
        document.getElementById('result1').innerText = 'Без темы';
    } else {
        document.getElementById('result1').innerText = subject;
    }

    if (document.getElementById('describe').value === '') {
        document.getElementById('result2').innerText = 'Без описания';
    } else {
        document.getElementById('result2').innerText = describe;
    }

    document.getElementById('message-block').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', (event) => {
    document.getElementById('subject').value = '';
    document.getElementById('describe').value = '';
    document.getElementById('message-block').classList.add('hidden');
});
