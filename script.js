//----------------------------------HEADER------------------------------------------------
const ANCHORS = document.querySelectorAll('.nav_othersS1');

for(let anchor of ANCHORS) {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: "center" 
        });
    });
};

    
let sections = document.querySelectorAll('section');

document.addEventListener('scroll', e => {
    const currentScrollY = window.scrollY + document.querySelector('header').offsetHeight;
    sections.forEach( (section) => {
        
        if (window.innerHeight + window.scrollY == document.body.offsetHeight) {
            document.querySelectorAll('#menu a').forEach((el) => {
                el.classList.remove('active');
            })
            document.getElementById('last-child').classList.add('active');
        }
        if (section.offsetTop <= currentScrollY && (section.offsetTop + section.offsetHeight) > currentScrollY) {
            document.querySelectorAll('#menu a').forEach ( (el) => {
                el.classList.remove('active');
                if (el.getAttribute('href').slice(1) == section.getAttribute('id')) {
                    el.classList.add('active');
                }
            });
        }
        
        
    });
});



//----------------------------------SLIDER-------------------------------------------------
const LEFT_ARROW = document.getElementById('left-arrow');
const RIGHT_ARROW = document.getElementById('right-arrow');
const SlidersIdList = ['slider-red', 'slider-blue'];
let indexOfActiveSlide = 0;
let isEnabled = true;

LEFT_ARROW.addEventListener('click', (e) => {
    if (isEnabled) {
        isEnabled = false;
        if (indexOfActiveSlide == 0) {
            document.getElementById('slider-blue').style.left = "-2040px";
            document.getElementById('sliderS1').style.backgroundColor = '#648bf0';
            document.getElementById('slider-bt').style.backgroundColor = '#648bf0';
            indexOfActiveSlide = 1;
        } else {
            document.getElementById('slider-red').style.left = "-1020px";
            document.getElementById('sliderS1').style.backgroundColor = '#f06c64';
            document.getElementById('slider-bt').style.backgroundColor = '#f06c64';
            indexOfActiveSlide = 0;
        }
        const slider = setInterval(() => {
            if (indexOfActiveSlide == 1) {
                document.getElementById('slider-red').style.left = +document.getElementById('slider-red').style.left.replace('px', '') + 30 + 'px';
                document.getElementById('slider-blue').style.left = +document.getElementById('slider-blue').style.left.replace('px', '') + 30 + 'px';
                if (document.getElementById(`${SlidersIdList[0]}`).style.left == '1020px') {
                    isEnabled = true;
                    clearInterval(slider);
                }
            } else {
                document.getElementById('slider-blue').style.left = +document.getElementById('slider-blue').style.left.replace('px', '') + 30 + 'px';
                document.getElementById('slider-red').style.left = +document.getElementById('slider-red').style.left.replace('px', '') + 30 + 'px';
                if (document.getElementById('slider-red').style.left == '0px') {
                    isEnabled = true;
                    clearInterval(slider);
                }
            }
        }, 10);
    }  
});

RIGHT_ARROW.addEventListener('click', (e) => {
    if (isEnabled) {
        isEnabled = false;
        if (indexOfActiveSlide == 0) {
            document.getElementById('slider-blue').style.left = "0px";
            indexOfActiveSlide = 1;
            document.getElementById('sliderS1').style.backgroundColor = '#648bf0';
            document.getElementById('slider-bt').style.backgroundColor = '#648bf0';
        } else {
            document.getElementById('slider-red').style.left = "1020px";
            indexOfActiveSlide = 0;
            document.getElementById('sliderS1').style.backgroundColor = '#f06c64';
            document.getElementById('slider-bt').style.backgroundColor = '#f06c64';
        }
        const slider = setInterval(() => {
            if (indexOfActiveSlide == 1) {
                document.getElementById('slider-red').style.left = +document.getElementById('slider-red').style.left.replace('px', '') - 30 + 'px';
                document.getElementById('slider-blue').style.left = +document.getElementById('slider-blue').style.left.replace('px', '') - 30 + 'px';
                if (document.getElementById(`${SlidersIdList[0]}`).style.left == '-1020px') {
                    isEnabled = true;
                    clearInterval(slider);
                }
            } else {
                document.getElementById('slider-blue').style.left = +document.getElementById('slider-blue').style.left.replace('px', '') - 30 + 'px';
                document.getElementById('slider-red').style.left = +document.getElementById('slider-red').style.left.replace('px', '') - 30 + 'px';
                if (document.getElementById('slider-red').style.left == '0px') {
                    isEnabled = true;
                    clearInterval(slider);
                }
            }
        }, 10);
    }
});

document.getElementById('home-btn-v').addEventListener('click', (event) => {
    let screen_v = document.querySelector('.black-screen-v');
    if (screen_v.style.visibility === 'visible') {
        screen_v.style.visibility = 'hidden';
    } else {
        screen_v.style.visibility = 'visible';
    }
});

document.getElementById('home-btn-h').addEventListener('click', (event) => {
    let screen_h = document.querySelector('.black-screen-h');
    if (screen_h.style.visibility === 'visible') {
        screen_h.style.visibility = 'hidden';
    } else {
        screen_h.style.visibility = 'visible';
    }
});
//----------------------------------PORTFOLIO--------------------------------------------
const PORTFOLIO_MENU = document.getElementById('portfolio-menu');
const IMAGES = document.getElementById('images');
let tabs = document.querySelectorAll('a');
for(let tab of tabs) {
    tab.addEventListener('click', (event) => {
        event.preventDefault();
        PORTFOLIO_MENU.querySelectorAll('.othersS2').forEach(el => el.classList.remove('active-portfolio'));
        event.target.classList.add('active-portfolio');
        let elements = IMAGES.childNodes;
        for(let i = 0; i < elements.length; i++) {
            IMAGES.appendChild(elements[i]);
        }
    });
}



IMAGES.addEventListener('click', (event) => {
    event.preventDefault();
    IMAGES.querySelectorAll('.port-img').forEach(el => el.classList.remove('active-img'));
    event.target.classList.add('active-img');
    if (document.getElementById('images').classList.value === 'imagesPS2 active-img') {
        document.getElementById('images').classList.remove('active-img')
    }
});

//----------------------------------FORM-------------------------------------------------
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

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
        document.getElementById('result1').innerText = 'Without subject';
    } else {
        document.getElementById('result1').innerText = subject;
    }

    if (document.getElementById('describe').value === '') {
        document.getElementById('result2').innerText = 'Without description';
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
