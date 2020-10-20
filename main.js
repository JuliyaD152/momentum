let time = document.querySelector('.time'),
    greeting = document.querySelector('.greeting'),
    myName = document.querySelector('.name'),
    myFocus = document.querySelector('.focus'),
    mainContent = document.querySelector('.main-content'),
    myTodayDay = document.querySelector('.today-day');
   /*  myDate = document.querySelector('.today-date'),
    myMonth = document.querySelector('.today-month'); */

    //show time 

function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        minuts = today.getMinutes(),
        sec = today.getSeconds();

    time.innerHTML = `${hour}<span>:</span>${addZero(minuts)}<span>:</span>${addZero(sec)}`;
    
    //addZero
    function addZero(n){
        return (parseInt(n, 10) < 10 ? '0': "") + n;
    }

    setTimeout(showTime, 1000);
}

    //show Day of weak with Date
function shawDayDate(){
    let today = new Date(),
        day = today.getDay(),
        todayNum = today.getDate(),
        todayMonth = today.getMonth();

        let nameOfDay = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];
        let nameOfMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
        console.log(todayNum);

        myTodayDay.innerHTML = `${nameOfDay[day]}<span>,</span> ${todayNum} ${nameOfMonth[todayMonth]}`;
}

//Change BG
function changeBG (){
    let today = new Date(),
        hour =  today.getHours();

    if(hour < 12 && hour >= 6){
        document.body.style.backgroundImage = "url('assets/images/morning/01.jpg')";
        greeting.textContent = 'Good morning!';
        mainContent.style.color = 'white';
    } else if ( hour >= 12 && hour < 18){
        document.body.style.backgroundImage = "url('assets/images/day/01.jpg')";
        greeting.textContent = 'Good Day!';
        mainContent.style.color = 'white';
    } else if (hour >= 18 && hour < 24){
        document.body.style.backgroundImage = "url('assets/images/evening/18.jpg')";
        greeting.textContent = 'Good Evening!';
        mainContent.style.color = 'white';
    } else {
        document.body.style.backgroundImage = "url('assets/images/night/01.jpg')";
        greeting.textContent = 'Good Night!';
        mainContents.style.color = 'white';
    }
}

function setName(event){
    if(event.type === 'keypress'){
        if(event.keyCode == 13){
            localStorage.setItem('name', event.target.innerText);
            myName.blur();
        }
    }else {
        localStorage.setItem('name', event.target.innerText);
    }
}


function setFocus(event){
    if(event.type === 'keypress'){
        if(event.keyCode == 13){
            localStorage.setItem('focus', event.target.innerText);
            myFocus.blur();
        }
    }else {
        localStorage.setItem('focus', event.target.innerText);
    }
}

function getName(){
    if(localStorage.getItem('name') === null){
        myName.textContent = '[Enter your name]';
    }else {
        myName.textContent = localStorage.getItem('name');
    }
}

function getFocus(){
    if(localStorage.getItem('focus') === null){
        myFocus.textContent = '[Your focus]';
    }else {
        myFocus.textContent = localStorage.getItem('focus');
    }
}

const base = 'https://github.com/JuliyaD152/ready-projects/tree/momentum/momentum/assets/images/evening/';
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;

function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
}

function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() {
       btn.disabled = false;
    }, 1000);
} 

const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);

myName.addEventListener('keypress', setName);
myName.addEventListener('blur', setName);
myFocus.addEventListener('keypress', setFocus);
myFocus.addEventListener('blur', setFocus);



showTime();
shawDayDate();
changeBG ();
getName();
getFocus();