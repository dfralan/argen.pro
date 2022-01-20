var animationBallSVG = ' \
<svg id="YY" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 600"> \
  <defs> \
    <style> \
#YY{ \
  transition: .3s; \
  animation-name: rotation; \
  animation-play-state: running; \
  animation-direction: alternate-reverse; \
  animation-duration: 20s; \
  animation-timing-function: ease-all; \
  animation-iteration-count: infinite; \
} \
#upWall { \
  fill: none; \
} \
#downWall { \
  fill: none; transform: translateY(2px)\
} \
#greenBallContainer { \
  clip-path: url(#dwContainer); \
} \
#whiteBallContainer { \
  clip-path: url(#uwContainer); \
} \
#greenBall{ \
  filter: none; \
  fill: #00ff00; \
  transform: translateY(160px); \
  animation-name: pendulous; \
  animation-duration: 5s; \
  animation-timing-function: ease-all; \
  animation-iteration-count: infinite; \
} \
#whiteBall{ \
  fill: #fff; \
  transform: translateY(160px); \
  animation-name: pendulous; \
  animation-duration: 5s; \
  animation-timing-function: ease-all; \
  animation-iteration-count: infinite; \
} \
@keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);}} \
@-webkit-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);}} \
@-moz-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);}} \
@-ms-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);}} \
@-o-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);} \
} \
\
@keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  50.00000001% {transform: rotate(-180deg);} \
  100% {transform: rotate(360deg);}} \
@-webkit-keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  50.00000001% {transform: rotate(-180deg);} \
  100% {transform: rotate(360deg);}} \
@-moz-keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  50.00000001% {transform: rotate(-180deg);} \
  100% {transform: rotate(360deg);}} \
@-ms-keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  50.00000001% {transform: rotate(-180deg);} \
  100% {transform: rotate(360deg);}} \
    </style> \
    <clipPath id="uwContainer"> \
      <path id="upWall" d="M300,316.5c-110.46,0-200-3.13-200-7v291H500v-291C500,313.37,410.46,316.5,300,316.5Z" transform="translate(0 0.5)"/> \
    </clipPath> \
    <clipPath id="dwContainer"> \
      <path id="downWall" d="M100-.5v310c0,3.87,89.54,7,200,7s200-3.13,200-7V-.5Z" transform="translate(0 0.5)"/> \
    </clipPath> \
  </defs> \
  <g id="whiteBallContainer"> \
    <circle id="whiteBall" cx="300" cy="300" r="83.73"/> \
  </g> \
  <g id="greenBallContainer"> \
    <circle id="greenBall" cx="300" cy="300" r="83.73"/> \
  </g> \
</svg>';

var sunsetSVG = ' \
<svg id="YY" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 600"> \
  <defs> \
    <style> \
#YY{ \
  opacity: .8; \
  transition: .3s; \
} \
#upWall { \
  fill: none; \
} \
#downWall { \
  fill: none; transform: translateY(2px)\
} \
#greenBallContainer { \
  clip-path: url(#dwContainer); \
  filter: drop-shadow(0px 0px 20px #f18c01); \
  -webkit-filter: drop-shadow(0px 0px 20px #f18c01); \
  -moz-filter: drop-shadow(0px 0px 20px #f18c01); \
  ;-ms-filter: drop-shadow(0px 0px 20px #f18c01); \
  -o-filter: drop-shadow(0px 0px 20px #f18c01); \
} \
#whiteBallContainer { \
  clip-path: url(#uwContainer); \
  filter: drop-shadow(0px 0px 20px #f18c01); \
  -webkit-filter: drop-shadow(0px 0px 20px #f18c01); \
  -moz-filter: drop-shadow(0px 0px 20px #f18c01); \
  ;-ms-filter: drop-shadow(0px 0px 20px #f18c01); \
  -o-filter: drop-shadow(0px 0px 20px #f18c01); \
  transform: translateX(-4px); \
} \
#greenBall{ \
  animation-play-state: running; \
  fill: #fefefe; \
  transform: translateY(0px); \
  animation-name: amanecerMoon; \
  animation-duration: 100s; \
  animation-timing-function: ease-all; \
  animation-iteration-count: infinite; \
} \
#whiteBall{ \
  animation-play-state: running; \
  fill: #fefefe; \
  filter: url(#turbulence); \
  transform: translateY(0px); \
  opacity: .9; \
  animation-name: amanecerReflect; \
  animation-duration: 100s; \
  animation-timing-function: ease-all; \
  animation-iteration-count: infinite; \
} \
@keyframes amanecerMoon { \
  0% {transform: translateY(110px);} \
  50% {transform: translateY(-80px);} \
  100% {transform: translateY(110px);}} \
    \ \ \
    @keyframes amanecerReflect { \
      0% {transform: translateY(-78px);} \
      50% {transform: translateY(112px);} \
      100% {transform: translateY(-78px);} }\
    \ \ \
@-webkit-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);}} \
@-moz-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);}} \
@-ms-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);}} \
@-o-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);} \
} \
@keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  100% {transform: rotate(360deg);}} \
@-webkit-keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  100% {transform: rotate(360deg);}} \
@-moz-keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  100% {transform: rotate(360deg);}} \
@-ms-keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  100% {transform: rotate(360deg);}} \
@-o-keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  100% {transform: rotate(360deg);}} \
    </style> \
    <clipPath id="uwContainer"> \
      <path id="upWall" d="M300,316.5c-110.46,0-200-3.13-200-7v291H500v-291C500,313.37,410.46,316.5,300,316.5Z" transform="translate(0 0.5)"/> \
    </clipPath> \
    <clipPath id="dwContainer"> \
      <path id="downWall" d="M100-.5v310c0,3.87,89.54,7,200,7s200-3.13,200-7V-.5Z" transform="translate(0 0.5)"/> \
    </clipPath> \
  </defs> \
  <g id="whiteBallContainer"> \
    <circle id="whiteBall" cx="300" cy="300" r="83.73"/> \
  </g> \
  <g id="greenBallContainer"> \
    <circle id="greenBall" cx="300" cy="300" r="83.73"/> \
  </g> \
  \
  <filter id="turbulence" x="0" y="0" width="200%" height="200%"> \
        <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence> \
        <feDisplacementMap scale="30" in="SourceGraphic"></feDisplacementMap> \
        <animate xlink:href="#sea-filter" attributeName="baseFrequency" dur="100s"  \
        keyTimes="0;0.5;1" values="0.1 0.6;0.07 0.8;0.2 0.6" repeatCount="indefinite"/> \
  </filter> \
</svg>';

const scrollzone = "bravo"//ID of zone where u wanna detect scrolling, must be an ID
const rest = "300"//Sleep time after scroll was made (This will be the time to make your animation)
const zonesAmount = 5//Amount of scroll interaction permited(zone 0 is included, so if you put 3, you will get 4 zones)
var scrollElement = document.getElementById(scrollzone);//Element where detect scroll

//Zone to show
var currentzone = 0;
lang = "en"

//Elements to change
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const moretitle = document.getElementById("moretitle");
const moretitle2 = document.getElementById("moretitle2");
const moretitle3 = document.getElementById("moretitle3");
const moretitle4 = document.getElementById("moretitle4");
const moreTitleContent = document.getElementById("moreTitleContent");
const firstLand = document.getElementById("firstLand");
const firstLandContent = document.getElementById("firstLandContent");
const firstLandContent2 = document.getElementById("firstLandContent2");
const bg = document.getElementById('bg');
const YY = document.getElementById('YY');
const navContainer = document.getElementById('navContainer');
const menu = document.getElementById('menu');
const menuBottom = document.getElementById('menuBottom');
const groupMenu = document.getElementById('groupMenu');
const showCloseBtn = document.getElementById('showCloseBtn');

//SVG BG Loader
function loadSVG(u){
  document.getElementById('bg').innerHTML = u;
}

//Transition facilitator
function bottomBlur(l,c,d){//l is element and c is content text
  l.style = "opacity: 0;transform: translateY(10px)";
  setTimeout(function(){ l.innerHTML = c; l.style = "opacity: 1"; }, d);
}

function steadyBlur(l,c,d){
  l.style = "opacity: 0;";
  setTimeout(function(){ l.innerHTML = c; l.style = "opacity: 1"; }, d);
}

function steadyBlurStaySame(l,d){
  l.style = "opacity: 0;";
  setTimeout(function(){ l.style = "opacity: 1"; }, d);
}

function lostInBlur(l){
  l.style = "transition: opacity .3s; opacity: 0;";
}

function appearOnBlur(l){
  l.style = "transition: opacity .3s; opacity: 1;";
}

function imgFromBottom(l){
  l.style ="top: 0%; transform: scale(1); opacity: 1;"
}

function imgToBottom(l){
  l.style ="top: 110%; transform: scale(1.2); opacity: 0;"
}

function imgToTop(l){
  l.style ="top: -110%; transform: scale(1.2); opacity: 0;"
}

//Paragraph setter
function takeLeft(l,d){
  setTimeout(function(){ l.style = "text-align: left;" }, d);
}

function takeRight(l,d){
  setTimeout(function(){ l.style = "text-align: right;" }, d);
}

function takeCenter(l,d){
  setTimeout(function(){ l.style = "text-align: center;" }, d);
}

//Color setter
function setColor(l,hx,d){
  setTimeout(function(){ l.style ="color: "+ hx +";" }, d);
}

//language trigger
function byLanguage(en,es){  
  if (lang == 'en') { 
    return en;
    
  }else if(lang == 'es'){}
    return es;
  }

//zone trigger
function zoneTrigger(){
  var zoner = eval("zone"+currentzone+"()")
  zoner
}

//Funciones por zonas
var alreadyLoadedSVG = false
var alreadyLoadedSVG2 = false

function zone0(){
  bg.classList.remove("indexBack");
  menu.style.transform = "translateY(0px)"
  menuBottom.style.transform = "translateY(60px)"
  alreadyLoadedSVG2 = false
  if (!alreadyLoadedSVG){
    lostInBlur(bg);
    setTimeout(function(){ loadSVG(animationBallSVG); appearOnBlur(bg);}, 300);
    alreadyLoadedSVG = true;
  }
  //Take text to left
  takeLeft(firstLandContent,rest);
  takeLeft(moreTitleContent,rest)
  //Reanudar rotation Animation
  document.getElementById("YY").style='animation-play-state: running';
  //Set content
  bottomBlur(title, byLanguage('Hybrid & sustainable planet.',
  'Planeta híbrido y sustentable.'
  ),rest);
  steadyBlur(subtitle, '',rest);
  //steadyBlur(subtitle, byLanguage('Cause Ecology is the new economy.',
  //'Porque la Ecología, es la nueva economía.'
  //),rest);
  steadyBlur(moretitle, byLanguage('Know the platform <button class="invertedBtn"></button>',
    'Conocé la plataforma <button class="invertedBtn"></button>'
  ),rest);
  steadyBlur(moretitle2, byLanguage('Bring me on <button class="invertedBtn"></button>',
    'Ponme dentro <button class="invertedBtn"></button>'
  ),rest);
  steadyBlur(moretitle3, byLanguage('Join the community <button class="invertedBtn"></button>',
    'Sé parte de la comunidad <button class="invertedBtn"></button>'
  ),rest);
  steadyBlur(moretitle4, byLanguage('Watch intro <button class="invertedBtn"></button>',
    'Ver intro <button class="invertedBtn"></button>'
  ),rest);
}

function zone1(){
  //Appear BallAnimation
  menu.style.transform = "translateY(-60px)"
  menuBottom.style.transform = "translateY(0px)"
  lostInBlur(bg);
  appearOnBlur(bg);
  //Pause rotation Animation
  document.getElementById("YY").style="animation-play-state: paused";
  //Take text to left
  takeLeft(firstLandContent,rest);
  takeLeft(moreTitleContent,rest)
  //Appear from bottom
  bottomBlur(title, byLanguage('Protecting what cannot be trade, the health of the world.',
  'Protegiendo lo que no se negocia, la salud del mundo.'
  ),rest);
  steadyBlur(subtitle, byLanguage('A new economy, where trees are assets & growth comes naturally.',
  'Una nueva economía, donde los árboles son activos y el crecimiento llega naturalmente.'
  ),rest);
  steadyBlur(moretitle, byLanguage('Discover more about the proyect <button class="invertedBtn"></button>',
    'Descubrí más sobre el proyecto <button class="invertedBtn"></button>'
  ),rest);
  steadyBlur(moretitle2, "", rest);
  steadyBlur(moretitle3, "", rest);
  steadyBlur(moretitle4, "", rest);
}

function zone2(){
  if (!alreadyLoadedSVG2){
  bg.classList.add("indexBack");
  //Rename & animate text
  lostInBlur(bg);
  setTimeout(function(){ loadSVG(sunsetSVG); appearOnBlur(bg);}, 300);}
  alreadyLoadedSVG2 = true;
  takeCenter(firstLandContent,rest);
  lostInBlur(subtitle);
  lostInBlur(moretitle);
  setTimeout(function(){ takeCenter(firstLandContent,rest) }, rest);
  bottomBlur(title, "Bringing life , where trees are assets & growth comes naturally.",rest);
  alreadyLoadedSVG = false;
  imgToBottom(cover1,rest);
}

function zone3(){  
  //Rename & animate text
  alreadyLoadedSVG2 = false
  lostInBlur(subtitle);
  takeCenter(firstLandContent,rest)
  takeCenter(moreTitleContent,rest)
  lostInBlur(moretitle);
  lostInBlur(bg);
  setTimeout(function(){ takeCenter(firstLandContent,rest) }, rest);
  bottomBlur(title, "Bringing life , where trees are assets & growth comes naturally.",rest)
  imgFromBottom(cover1,rest)
  imgToBottom(cover2,rest)
}

function zone4(){takeLeft(firstLandContent,rest)
  //Rename & animate text  
  alreadyLoadedSVG2 = false
  lostInBlur(subtitle);
  lostInBlur(moretitle);
  lostInBlur(bg);
  bottomBlur(title, "Ahora si pepe.",rest)
  imgToTop(cover1,rest)
  imgFromBottom(cover2,rest)
  imgToBottom(cover3,rest)
}

function zone5(){
  //Rename & animate text  
  takeCenter(firstLandContent,rest)
  lostInBlur(subtitle);
  lostInBlur(moretitle);
  lostInBlur(bg);
  setTimeout(function(){ takeCenter(firstLandContent,rest) }, rest);
  bottomBlur(title, "z5Ahora si pepe.",rest)
  imgToTop(cover2,rest)
  imgFromBottom(cover3,rest)
}


//Init function on load
document.addEventListener("DOMContentLoaded", init);
function init() {

  //Detect language
  var ln = navigator.language || navigator.userLanguage;
  if (ln == 'es-419') {lang = 'es'}
  else{lang = 'en'}

  loadSVG(sunsetSVG)//Load Background
  zone0()
  var static = true;//Boolean to keep scroll animation steady
  
  //Key listener
  document.onkeydown = checkKey;
  //Key counter & zone setter
  function checkKey(e) {
      if(!static){return};
      e = e || window.event;
      if (e.keyCode == '40') {
          // down arrow
          if(currentzone>=zonesAmount){
            currentzone=zonesAmount;
            return;
          }
          else if(currentzone>=0){
          currentzone++;
          zoneTrigger();
        }       
      }
      else if (e.keyCode == '38') {
          if(!static){return};
          // up arrow
          if(currentzone<=0){
            currentzone=0;
            return;
          }
          else if(currentzone>0){
          currentzone--;
          zoneTrigger();
        }        
      }
      else if (e.keyCode == '37') {
        // left arrow
      }
      else if (e.keyCode == '39') {
        // right arrow
      }
      static = false;
      setTimeout(function(){ static = true; }, rest);
      console.log('Changing to zone '+ currentzone + ' by key.')
      i = currentzone*100;
  }

  var rotationgAngle = 0;

  //Displayer menu on click
  var displayedMenu = false;
  showCloseBtn.addEventListener("click", showHide);
  function showHide() {
    if(displayedMenu){
      groupMenu.style.transform="translateX(5px)";
      groupMenu.style.opacity="0";
      rotateReady = rotationgAngle + 45;
      rotationgAngle = rotateReady;
      showCloseBtn.style.transform="rotate("+ rotationgAngle +"deg)";
      setTimeout(function(){ 
        groupMenu.style.display="none";
        displayedMenu = false;
      }, 300);
    }
    else{
      rotateReady = rotationgAngle + 45;
      rotationgAngle = rotateReady;
      showCloseBtn.style.transform="rotate("+ rotationgAngle +"deg)";
      groupMenu.style.display="block";
      setTimeout(function(){
        groupMenu.style.opacity="1";
        groupMenu.style.transform="translateX(0px)";
        displayedMenu = true;
      }, 10);
    }
  }

  menuBottom.addEventListener("click", takeMeUp);
  function takeMeUp() {
    zone4();
    zone3();
    zone2();
    zone1();
    setTimeout(function(){ 
      zone0();
    }, 300);
    currentzone = 0;
  }

  //Scroll trigger
  var i = 0;//Scroll counter  
  scrollElement.addEventListener("wheel", function(e) {
    if(!static){return};    
    i += e.deltaY;
    iRounded = Math.round(i * 0.01);
    if(iRounded>currentzone){currentzone++}
    else{currentzone--}
    if(currentzone<0 || toString(currentzone) == "-0"){
      currentzone=0;
      i = currentzone*100;
      return;
    }    
    else if(currentzone>zonesAmount){//Limiter
      currentzone=zonesAmount;
      i = zonesAmount*100;
      return;
    }
    else if(currentzone>=0){//Actions when true
      zoneTrigger();    
    }
    static = false;
    setTimeout(function(){ static = true; }, rest);
    console.log('Changing to zone '+ currentzone + ' by scroll.')
  });

  //Swipe detector

  //Touch coord
  var clientY;
  var deltaY;

  //Up or down detector
  function detectSwipe(){
    if(!static){return};

    if(clientY>deltaY){currentzone++}
    else{currentzone--}

    if(currentzone<0 || toString(currentzone) == "-0"){
      currentzone=0;
      i = currentzone*100;
      return;
    }    
    else if(currentzone>zonesAmount){//Limiter
      currentzone=zonesAmount;
      i = zonesAmount*100;
      return;
    }
    else if(currentzone>=0){//Actions when true
      zoneTrigger(); 
    }
    static = false;
    setTimeout(function(){ static = true; }, rest);
    console.log('Changing to zone '+ currentzone + ' by swipe.')
  }

  //Register touchstart
  scrollElement.addEventListener('touchstart', function(e) {
    scrollElement.style="opacity: .8";
    clientY = e.touches[0].clientY;
  }, false);

  //Register touchend
  scrollElement.addEventListener('touchend', function(e) {
    scrollElement.style="opacity: 1";
    deltaY = e.changedTouches[0].clientY - clientY;
    detectSwipe()
  }, false);
}


//Browser detector
var browser_name = '';
isIE = /*@cc_on!@*/false || !!document.documentMode;
isEdge = !isIE && !!window.StyleMedia;
if(navigator.userAgent.indexOf("Chrome") != -1 && !isEdge)
{
    browser_name = 'chrome';
}
else if(navigator.userAgent.indexOf("Safari") != -1 && !isEdge)
{
    browser_name = 'safari';
}
else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
{
    browser_name = 'firefox';
}
else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
{
    var div = document.getElementById('bg');
    div.innerHTML += '<img style="background-repeat: no-repeat;" src="assets/images/svgToGif.gif">';
    browser_name = 'ie';
}
else if(isEdge)
{
    browser_name = 'edge';
}
else 
{
    browser_name = 'other-browser';
}
/* alert(browser_name); */