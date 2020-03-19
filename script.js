let items = document.querySelectorAll(".slide");
let pictures = document.querySelectorAll(".portfolio_projects");
let currentItem = 0;
let currentPicture = 0;
let isNotAnimation = true;
let checkPhoneV = true;
let checkPhoneH = true;
let scrollToElement;
let valueScroll =0;

function currentPictureIndex(i){
    currentPicture = (i + pictures.length) % pictures.length;
}

window.addEventListener('scroll', function() {
    if(valueScroll<600){
        document.querySelectorAll(".menu-nav").forEach(e => {e.classList.remove('selected-nav');});
        firstNav.classList.add('selected-nav');
    }
    if(valueScroll>=600 && valueScroll<1100){
        document.querySelectorAll(".menu-nav").forEach(e => {e.classList.remove('selected-nav');});
        secondNav.classList.add('selected-nav');
    }
    if(valueScroll>=1100 && valueScroll<1972){
        document.querySelectorAll(".menu-nav").forEach(e => {e.classList.remove('selected-nav');});
        thirdNav.classList.add('selected-nav');
    }
    if(valueScroll>1972 && valueScroll<2707){
        document.querySelectorAll(".menu-nav").forEach(e => {e.classList.remove('selected-nav');});
        fourthNav.classList.add('selected-nav');
    }
    if(valueScroll>2707){
        document.querySelectorAll(".menu-nav").forEach(e => {e.classList.remove('selected-nav');});
        fifthNav.classList.add('selected-nav');
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
    hideItem('to-right');
    currentItemIndex(i-1);
    showItem('from-left');
}

function nextItem(i){
   
    hideItem('to-left');
    currentItemIndex(i+1);
    showItem('from-right');
    
}

document.querySelector(".left").addEventListener('click', (event)=>{
    if(isNotAnimation){
        previousItem(currentItem);
    }
    if(currentItem==1){
        document.querySelector(".slider-wrapper").classList.add('blue');
        document.querySelector(".slider-wrapper").classList.remove('border-bottom');
    } else {
        document.querySelector(".slider-wrapper").classList.remove('blue');
        document.querySelector(".slider-wrapper").classList.add('border-bottom');
    }
});

document.querySelector(".right").addEventListener('click', (event)=>{
    if(isNotAnimation){
        nextItem(currentItem);
    }
    if(currentItem==1){
        document.querySelector(".slider-wrapper").classList.remove('border-bottom');
        document.querySelector(".slider-wrapper").classList.add('blue');
        
    } else {
        document.querySelector(".slider-wrapper").classList.remove('blue');
        document.querySelector(".slider-wrapper").classList.add('border-bottom');
    }
});

document.querySelector(".circleV").addEventListener('click', (event)=>{
    if(checkPhoneV){
        checkPhoneV=false;
        document.querySelector(".layerV").classList.remove('layerBackground');
    } else{
        checkPhoneV=true;
        document.querySelector(".layerV").classList.add('layerBackground');
    }
});

document.querySelector(".SquareV").addEventListener('click', (event)=>{
    if(checkPhoneV){
        checkPhoneV=false;
        document.querySelector(".layerV").classList.remove('layerBackground');
    } else {
        checkPhoneV=true;
        document.querySelector(".layerV").classList.add('layerBackground');
    }
});

document.querySelector(".Circle").addEventListener('click', (event)=>{
    if(checkPhoneH){
        checkPhoneH=false;
        document.querySelector(".LayerH").classList.remove('layerBackground');
    } else{
        checkPhoneH=true;
        document.querySelector(".LayerH").classList.add('layerBackground');
    }
});

document.querySelector(".Square").addEventListener('click', (event)=>{
    if(checkPhoneH){
        checkPhoneH=false;
        document.querySelector(".LayerH").classList.remove('layerBackground');
    } else{
        checkPhoneH=true;
        document.querySelector(".LayerH").classList.add('layerBackground');
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



