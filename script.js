let items = document.querySelectorAll(".slide");
let pictures = document.querySelectorAll(".portfolio_projects");
let currentItem = 0;
let currentPicture = 0;
let isNotAnimation = true;
let checkPhoneV = true;
let checkPhoneH = true;
let scrollToElement;
let valueScroll =0;
let checkMenu = 0;
let checkScroll = 95;


function currentPictureIndex(i){
    currentPicture = (i + pictures.length) % pictures.length;
}

if(document.documentElement.clientWidth<1020){
        document.querySelector('.about').classList.remove('about-bottom');
    }

    if(document.documentElement.clientWidth>=1020){
        document.querySelector('.about').classList.add('about-bottom');
    }

    if(document.documentElement.clientWidth<768){
        checkScroll = 71;
        document.querySelector('.menu-bar').classList.add('hide');
        document.querySelector('.header-bottom').classList.add('hide');
        document.querySelector('.portfolio').classList.remove('portfolio-bottom');
        document.querySelector('.contact').classList.remove('contact-border');
        document.querySelector('.copyright').classList.add('hide');
    }

    if(document.documentElement.clientWidth>=768){
        checkScroll = 95;
        document.querySelector('.menu-bar').classList.remove('hide');
        document.querySelector('.header-bottom').classList.remove('hide');
        document.querySelector('.portfolio').classList.add('portfolio-bottom');
        document.querySelector('.contact').classList.add('contact-border');
        document.querySelector('.copyright').classList.remove('hide');
    }

window.addEventListener('resize', function() {
    if(document.documentElement.clientWidth<1020){
        document.querySelector('.about').classList.remove('about-bottom');
    }

    if(document.documentElement.clientWidth>=1020){
        document.querySelector('.about').classList.add('about-bottom');
    }

    if(document.documentElement.clientWidth<768){
        checkScroll = 71;
        document.querySelector('.menu-bar').classList.add('hide');
        document.querySelector('.header-bottom').classList.add('hide');
        document.querySelector('.portfolio').classList.remove('portfolio-bottom');
        document.querySelector('.contact').classList.remove('contact-border');
        document.querySelector('.copyright').classList.add('hide');
    }

    if(document.documentElement.clientWidth>=768){
        checkScroll = 95;
        document.querySelector('.menu-bar').classList.remove('hide');
        document.querySelector('.header-bottom').classList.remove('hide');
        document.querySelector('.portfolio').classList.add('portfolio-bottom');
        document.querySelector('.contact').classList.add('contact-border');
        document.querySelector('.copyright').classList.remove('hide');
    }


});

window.addEventListener('scroll', function() {
    console.log(valueScroll = pageYOffset);
    valueScroll = pageYOffset;
    if(valueScroll<(document.querySelector('.services').offsetTop-checkScroll)){
        document.querySelectorAll(".menu-nav").forEach(e => {e.classList.remove('selected-nav');});
        firstNav.classList.add('selected-nav');
        firstBurger.classList.add('selected-nav');
    }
    if(valueScroll>=(document.querySelector('.services').offsetTop-checkScroll) && valueScroll<(document.querySelector('.portfolio').offsetTop-91)){
        document.querySelectorAll(".menu-nav").forEach(e => {e.classList.remove('selected-nav');});
        secondNav.classList.add('selected-nav');
        secondBurger.classList.add('selected-nav');
    }
    if(valueScroll>=(document.querySelector('.portfolio').offsetTop-checkScroll) && valueScroll<(document.querySelector('.about').offsetTop-91)){
        document.querySelectorAll(".menu-nav").forEach(e => {e.classList.remove('selected-nav');});
        thirdNav.classList.add('selected-nav');
        thirdBurger.classList.add('selected-nav');
    }
    if(valueScroll>=(document.querySelector('.about').offsetTop-checkScroll) && valueScroll<(document.querySelector('.contact').offsetTop-91)){
        document.querySelectorAll(".menu-nav").forEach(e => {e.classList.remove('selected-nav');});
        fourthNav.classList.add('selected-nav');
        fourthBurger.classList.add('selected-nav');
    }
    if(valueScroll>=(document.querySelector('.contact').offsetTop-checkScroll)){
        document.querySelectorAll(".menu-nav").forEach(e => {e.classList.remove('selected-nav');});
        fifthNav.classList.add('selected-nav');
        fifthBurger.classList.add('selected-nav');
    }
  });

document.querySelector(".menu").addEventListener('click', (event) => {
    if(event.target.className !== 'menu'){
    document.querySelectorAll(".menu-nav").forEach(e => {e.classList.remove('selected-nav');});
    event.target.classList.add('selected-nav');
    scrollToElement = event.target.innerText.toLowerCase()+"";
    window.scrollTo({
        top: document.querySelector(`.${scrollToElement}`).offsetTop-91,
        behavior: "smooth"
    });
    }
});

document.querySelector(".menu-small").addEventListener('click', (event) => {
    if(event.target.className !== 'menu-small'){
    document.querySelector('.burger-menu').classList.remove('rotate');
    document.querySelector('.singolo-title').classList.remove('singolo-title-left');
    document.querySelector('.open-menu').classList.add('hide');
    checkMenu=0;
    document.querySelectorAll(".menu-nav").forEach(e => {e.classList.remove('selected-nav');});
    event.target.classList.add('selected-nav');
    scrollToElement = event.target.innerText.toLowerCase()+"";
    window.scrollTo({
        top: document.querySelector(`.${scrollToElement}`).offsetTop-68,
        behavior: "smooth"
    });
    }
});

document.querySelector(".portfolio-buttons").addEventListener('click', (event) => {
    if(event.target.className !== 'portfolio-buttons'){
    document.querySelectorAll(".portfolio_button").forEach(e => {e.classList.remove('selected-portfolio');});
    event.target.classList.add('selected-portfolio');
    }
});

document.querySelector(".portfolio-container").addEventListener('click', (event) => {
    if(event.target.className !== 'portfolio-container'){
    document.querySelectorAll(".portfolio_projects").forEach(e => {e.classList.remove('borderBtn');});
    event.target.classList.add('borderBtn');
    }
});

document.querySelector(".portfolio-buttons").addEventListener('click', (event) => {
    if(event.target.className === 'portfolio_button first selected-portfolio'){
        currentPictureIndex(currentPicture);
        portfolio.append(pictures[currentPicture]);
        currentPicture++;
    }
    if(event.target.className === 'portfolio_button second selected-portfolio'){
        currentPictureIndex(currentPicture);
        portfolio.append(pictures[currentPicture]);

        currentPicture++;
    }
    if(event.target.className === 'portfolio_button third selected-portfolio'){
        currentPictureIndex(currentPicture);
        portfolio.append(pictures[currentPicture]);
        currentPicture++;
    }
    if(event.target.className === 'portfolio_button forth selected-portfolio'){
        currentPictureIndex(currentPicture);
        portfolio.append(pictures[currentPicture]);
        currentPicture++;
    }
    
});

function currentItemIndex(i){
    currentItem = (i + items.length) % items.length;
}

function hideItem(direction){
    isNotAnimation=false;
    items[currentItem].classList.add(direction); 
    items[currentItem].addEventListener('animationend',function(){
        this.classList.remove('active-slide',direction); 
    });
}

function showItem(direction){
    items[currentItem].classList.add('next',direction); 
    items[currentItem].addEventListener('animationend',function(){
        this.classList.remove('next',direction); 
        this.classList.add('active-slide');
        isNotAnimation=true;
    });
}

function previousItem(i){
    if(currentItem==1){
    hideItem('to-right1');
    currentItemIndex(i+1);
    showItem('from-left1');
    }else{
    hideItem('to-right');
    currentItemIndex(i-1);
    showItem('from-left');
    }
}

function nextItem(i){
    if(currentItem==1){
    hideItem('to-left1');
    currentItemIndex(i+1);
    showItem('from-right1');
    }
    else{
    hideItem('to-left');
    currentItemIndex(i+1);
    showItem('from-right');
    }
}

document.querySelector(".left").addEventListener('click', (event)=>{
    if(isNotAnimation){
        previousItem(currentItem);
    }
    if(currentItem==1){
        document.querySelector(".slider-wrapper").classList.add('blue');
        document.querySelector(".right").classList.add('marginLeftR');
        document.querySelector(".slider-wrapper").classList.remove('border-bottom');
    } else {
        document.querySelector(".slider-wrapper").classList.remove('blue');
        document.querySelector(".right").classList.remove('marginLeftR');
        document.querySelector(".slider-wrapper").classList.add('border-bottom');
    }
});

document.querySelector(".right").addEventListener('click', (event)=>{
    if(isNotAnimation){
        nextItem(currentItem);
    }
    if(currentItem==1){
        document.querySelector(".right").classList.add('marginLeftR');
        document.querySelector(".slider-wrapper").classList.remove('border-bottom');
        document.querySelector(".slider-wrapper").classList.add('blue');
        
    } else {
        document.querySelector(".right").classList.remove('marginLeftR');
        document.querySelector(".slider-wrapper").classList.add('border-bottom');
        document.querySelector(".slider-wrapper").classList.remove('blue');
    }
});

document.querySelector(".vertical-base").addEventListener('click', (event)=>{
    if(checkPhoneV){
        checkPhoneV=false;
        document.querySelector(".vertical-layer").classList.remove('hide');
    } else{
        checkPhoneV=true;
        document.querySelector(".vertical-layer").classList.add('hide');
    }
});

document.querySelector(".vertical-layer").addEventListener('click', (event)=>{
    if(checkPhoneV){
        checkPhoneV=false;
        document.querySelector(".vertical-layer").classList.remove('hide');
    } else {
        checkPhoneV=true;
        document.querySelector(".vertical-layer").classList.add('hide');
    }
});

document.querySelector(".horizontal-base").addEventListener('click', (event)=>{
    if(checkPhoneH){
        checkPhoneH=false;
        document.querySelector(".horizontal-layer").classList.remove('hide');
    } else{
        checkPhoneH=true;
        document.querySelector(".horizontal-layer").classList.add('hide');
    }
});

document.querySelector(".horizontal-layer").addEventListener('click', (event)=>{
    if(checkPhoneH){
        checkPhoneH=false;
        document.querySelector(".horizontal-layer").classList.remove('hide');
    } else{
        checkPhoneH=true;
        document.querySelector(".horizontal-layer").classList.add('hide');
    }
});

const textModal = document.querySelector(".text-modal");

function addTextFromInput(element){
    if(element.value){
        return `<p>Тема: ${element.value}</p>`;
    } else {
        return `<p>Без темы</p>`;
    }
}

function addTextFromTextarea(element){
    if(element.value){
        return `<p>Описание: ${element.value}</p>`;
    } else {
        return `<p>Без описания</p>`;
    }
}

function addButtonOK(){
    textModal.innerHTML += '<button class="button-OK" type="button">OK</button>';
    let btnOk = document.querySelector(".button-OK");
    btnOk.addEventListener('click', ()=>{
        document.querySelector(".modal").classList.add('hide');
        firstInput.value="";
        secondInput.value="";
        thirdInput.value="";
        firstTextarea.value="";
    });
}

document.querySelector(".button-last").addEventListener('click', (e)=>{
    if(firstInput.checkValidity() && secondInput.checkValidity()){
    e.preventDefault();
    let textInput = "<p>Письмо отправлено</p>";
    textInput += addTextFromInput(thirdInput);
    textInput += addTextFromTextarea(firstTextarea);
    textModal.innerHTML = textInput;
    addButtonOK();
    document.querySelector(".modal").classList.remove('hide');
    }
});

document.querySelector('.burger-menu').addEventListener('click', ()=>{
    if(checkMenu==0){
    document.querySelector('.burger-menu').classList.add('rotate');
    document.querySelector('.singolo-title').classList.add('singolo-title-left');
    document.querySelector('.open-menu').classList.remove('hide');
    checkMenu=1;
    } else if(checkMenu==1){
        document.querySelector('.burger-menu').classList.remove('rotate');
        document.querySelector('.singolo-title').classList.remove('singolo-title-left');
        document.querySelector('.open-menu').classList.add('hide');
        checkMenu=0;
    }
});

window.addEventListener('resize', function() {
     document.querySelector('.open-menu').classList.add('hide');
      document.querySelector('.burger-menu').classList.remove('rotate');
      document.querySelector('.singolo-title').classList.remove('singolo-title-left');
});



