//----------------------------------HEADER------------------------------------------------

let checkbox = document.getElementById('check-menu');
const ANCHORS = document.querySelectorAll('.nav_othersS1');

for(let anchor of ANCHORS) {
    anchor.addEventListener("click", (e) => {
        const blockID = anchor.getAttribute('href');
        
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start" 
        });
        if (checkbox.checked) {
            checkbox.checked = false;
        }
    });
};


    
let sections = document.querySelectorAll('section');

document.addEventListener('scroll', e => {
    
    const currentScrollY = window.scrollY + document.querySelector('header').offsetHeight;
    const contactPosition = document.getElementById('contact').offsetTop;
    const currentPosition = window.pageYOffset;

    
    sections.forEach( (section) => {
        
        if (section.offsetTop <= currentScrollY && (section.offsetTop + section.offsetHeight) > currentScrollY) {
            document.querySelectorAll('#menu a').forEach ( (el) => {
                el.classList.remove('active');
                if (el.getAttribute('href').slice(1) == section.getAttribute('id')) {
                    el.classList.add('active');
                }
            });
        }  

    });
    if (currentPosition + 400 >= contactPosition) {
        document.querySelectorAll('#menu a').forEach((el) => {
            el.classList.remove('active');
        })
        document.getElementById('last-child1').classList.add('active');
        document.getElementById('last-child2').classList.add('active');
    }
    
});



//----------------------------------SLIDER-------------------------------------------------
let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active-slider', direction);
    })
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active-slider');
        isEnabled = true;
    })
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}
document.querySelector('.arrow-right').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem)
    }
});
document.querySelector('.arrow-left').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem)
    }
});

// ------------------------------ Phone screen --------------------
const PHONE_WALLPAPER_ONE = document.getElementById('black-one');
const PHONE_WALLPAPER_TWO = document.getElementById('black-two');
const delWallpaperOne = () => {
    if (PHONE_WALLPAPER_ONE.classList.contains('none'))
        PHONE_WALLPAPER_ONE.classList.remove('none')
    else
        PHONE_WALLPAPER_ONE.classList.add('none');
}
const delWallpaperTwo = () => {
    if (PHONE_WALLPAPER_TWO.classList.contains('none'))
        PHONE_WALLPAPER_TWO.classList.remove('none')
    else
        PHONE_WALLPAPER_TWO.classList.add('none');
}

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
