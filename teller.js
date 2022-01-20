// Get model of teller from HTML with teller TAG and execute it
const tellerTag = document.getElementsByTagName("teller")[0]
function getModelAndExecute(){    
    //Create UTF
    const utfTeller = document.createElement("meta");
    utfTeller.setAttribute("charset", "UTF-8");
    utfTeller.setAttribute("type", "text/javascript");
    document.head.appendChild(utfTeller);
    setTimeout(function(){
        modeSelected = tellerTag.getAttribute("tellerMode")
        return eval(modeSelected+"()");
    }, 300)
;}

//Detect browser section /////Must go out
function detectBrowser(){
    isIE = /*@cc_on!@*/false || !!document.documentMode;
    isEdge = !isIE && !!window.StyleMedia;
    if(navigator.userAgent.indexOf("Chrome") != -1 && !isEdge){return 'chrome';}
    else if(navigator.userAgent.indexOf("Safari") != -1 && !isEdge){return 'safari';}
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) {return 'firefox';}
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){return 'ie';}//IF IE > 10
    else if(isEdge){return 'edge';}
    else {return 'other-browser';}
}

//Select text by user browser language and set it
var lang = 'es';//Navigator language
const nativeLang = tellerTag.getAttribute("nativeLang")

//Get nativeLang for Teller (it has to be set on an atribbute in tellers tag element)
if (nativeLang == null)
{lang = lang;}
else{lang = nativeLang}

//Detect language
function detectLang(){
    var ln = navigator.language || navigator.userLanguage || navigator.browserLanguage;
    if (ln == 'es-419' || ln == 'es') {lang = 'es'}
    else if (ln == 'en') {lang = 'en'}
    else {lang = lang}
}

//Set phrase by language and set it
function byLanguage(en,es){  
    if (lang == 'en') {return en;}
    else if (lang == 'es'){return es;}
}

var ballonTellerBrick = 
'<brick id="buttonFatherBrick"> \
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" ><circle class="tellersFace" cx="15" cy="15" r="15"/><path id="xBrick" d="M17.3,14.8l3.7-3.7c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-3.7,3.7L11.6,9C11,8.4,10,8.4,9.4,9c-0.6,0.6-0.6,1.5,0,2.1l3.7,3.7l-3.7,3.7c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4l3.7-3.7l3.7,3.7c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L17.3,14.8z"/></svg> \
</brick>  \
\
<brick id="hoverBrick">' + byLanguage("Share your user experience with us.","Comparte tu experiencia con nosotros.") + ' \
<brick id="hoverBrickClose"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px"height="20px" viewBox="0 0 20 20" style="overflow:visible;enable-background:new 0 0 20 20;" xml:space="preserve"><style type="text/css">.backgroundXCloseAlert{fill:none;}.xCloseAlert{fill:#333333;}</style><circle class="backgroundXCloseAlert" cx="10" cy="10" r="10"/><path class="xCloseAlert" d="M11.6,9.9L14,7.4c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-2.4,2.4L7.7,6c-0.4-0.4-1-0.4-1.4,0	c-0.4,0.4-0.4,1,0,1.4l2.4,2.4l-2.4,2.4c-0.4,0.4-0.4,1,0,1.4C6.5,13.9,6.7,14,7,14c0.3,0,0.5-0.1,0.7-0.3l2.4-2.4l2.4,2.4	c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L11.6,9.9z"/></svg></brick>\
</brick>  \
<brick id="fatherBrick"> \
<brick id="paragraphBrick">' + byLanguage('Still not using <a target="_blank" href="https://www.unirvana.com/teller">teller</a>?','Sigues sin usar <a target="_blank" href="https://www.unirvana.com/teller">teller</a>?') + '</brick> \
<brick id="titleBrick">' + byLanguage("How would you describe your experience?","Califique su experiencia.") + '</brick> \
<brick id="emojisBrick"> \
    <brick id="emojiSelectorBrick"></brick> \
    <brick id="emojiBrick1"> \
        <brick id="emojiFaceBrick1"> \
            <svg id="SuperFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path d="M25.5,20.89h-11a1,1,0,0,0-.79.37,1,1,0,0,0-.19.85A6.32,6.32,0,0,0,20,26.66c4.44,0,6.18-3,6.49-4.58a1,1,0,0,0-.21-.83A1,1,0,0,0,25.5,20.89Z"/></g></g></svg> \
        </brick> \
        <brick id="emojiDescriptionBrick1">Super</brick> \
    </brick> \
    <brick id="emojiBrick2"> \
            <brick id="emojiFaceBrick2"> \
                <svg id="GoodFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path d="M25,20.71a8.54,8.54,0,0,1-5,1.34,8.47,8.47,0,0,1-5-1.34,1,1,0,1,0-1.28,1.53A10.17,10.17,0,0,0,20,24.05a10.17,10.17,0,0,0,6.3-1.81A1,1,0,1,0,25,20.71Z"/></g></g></svg> \
            </brick> \
            <brick id="emojiDescriptionBrick2">' + byLanguage("Good","Buena") + '</brick> \
    </brick> \
    <brick id="emojiBrick3"> \
            <brick id="emojiFaceBrick3"> \
                <svg id="NeutralFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path d="M12.83,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,12.83,13.58Z"/><path d="M23.47,22.4H16.53a1,1,0,0,0,0,2h6.94a1,1,0,0,0,0-2Z"/></g></g></svg> \
            </brick> \
            <brick id="emojiDescriptionBrick3">Neutral</brick> \
    </brick> \
    <brick id="emojiBrick4"> \
            <brick id="emojiFaceBrick4"> \
                <svg id="BadFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path d="M20,20.47a10.18,10.18,0,0,0-6.3,1.82A1,1,0,1,0,15,23.82a8.46,8.46,0,0,1,5-1.35,8.46,8.46,0,0,1,5,1.35,1,1,0,0,0,.64.23,1,1,0,0,0,.64-1.76A10.18,10.18,0,0,0,20,20.47Z"/></g></g></svg> \
            </brick> \
            <brick id="emojiDescriptionBrick4">' + byLanguage("Bad","Mala") + '</brick> \
    </brick> \
    <brick id="emojiBrick5"> \
            <brick id="emojiFaceBrick5"> \
                <svg id="FuriousFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path d="M20,20.13c-4.44,0-6.18,3-6.49,4.59a1,1,0,0,0,.21.82,1,1,0,0,0,.78.37h11a1,1,0,0,0,.79-.38,1,1,0,0,0,.19-.84A6.32,6.32,0,0,0,20,20.13Z"/></g></g></svg> \
            </brick> \
            <brick id="emojiDescriptionBrick5">' + byLanguage("Furious","Furiosa") + '</brick> \
    </brick> \
</brick> \
<brick id="textAreasBrick"> \
    <textarea id="textAreaBrick" placeholder="' + byLanguage("How would you describe your experience?","Compartanos su experiencia.") + '"></textarea> \
</brick> \
<brick id="inputAreasBrick"> \
    <input id="inputAreaBrick" placeholder="' + byLanguage("email@example.com","correo@ejemplo.com") + '"></input> \
</brick> \
<brick id="actionButtonBrick">' + byLanguage("NEXT","SIG.") + '</brick> \
<brick id="skipButtonBrick">' + byLanguage("Skip","Omitir") + '</brick> \
<brick id="notificationParagraphBrick">Soy una notificacion</brick> \
</brick>'

// Ejecutar Modelo onLoad
window.addEventListener('DOMContentLoaded', getModelAndExecute());


//Main ballon function
function ballon() {

    //Detect browser for fetch
    detectBrowser()

    //Detect language for phrases
    detectLang()

    //Set style content
    const styleSheetTeller = '<style>@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100&display=swap);#hoverBrickClose{z-index: 10000;position: absolute !important; right: 10px; width: 20px; height: 20px; background-color: rgba(0,0,0,0);border-radius: 10px !important;} #hoverBrickClose:hover{background-color: rgba(0,0,0,0.1)}teller{position: absolute;z-index: 100000;left: 0px; bottom: 0px}#buttonFatherBrick{z-index:100000!important;opacity:0;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:'+userColor()+';width:50px;height:50px;left:30px;bottom:30px!important;border-radius:30px 30px 30px 7px;outline:1px solid rgba(255,255,255,.1)!important;border:1px solid rgba(0,0,0,.1)!important}#fatherBrick{display:block;opacity:0;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;font-family:Roboto,sans-serif!important;position:absolute!important;background-color:#fff;border:1px solid rgba(0,0,0,.1)!important;width:340px!important;height:220px;left:30px!important;bottom:100px!important;border-radius:10px;transform:translateY(10px)}#hoverBrick{transition: .3s !important;-webkit-transition: .3s !important;-moz-transition: .3s !important;-o-transition: .3s !important;border: 1px solid rgba(0,0,0,0.1)!important;bottom:40px!important;opacity:0;text-align:left;font-weight:200!important;font-size:small!important;font-family:Roboto,sans-serif!important;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;color:black;background-color:white!important;width:280px!important;padding-left: 20px; height:30px!important;border-radius:5px;left:90px;padding-top:10px}#xBrick{opacity:0;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;fill:'+userColor()+';transform:translateX(30px) scaleX(0)}.questBrick{opacity:1;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;fill:#cecece}#titleBrick{color:#333;opacity:1;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:transparent!important;width:300px!important;height:auto!important;left:20px!important;top:30px!important;text-align:center!important}#emojisBrick{opacity:1;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:transparent!important;width:300px!important;height:80px!important;left:20px!important;top:80px;text-align:center!important}#emojiSelectorBrick{opacity:0;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:#eaeaeb!important;width:10px!important;height:10px!important;left:25px;transform:rotate(45deg)!important;bottom:-7px!important;text-align:center!important}#emojiBrick1{opacity:1;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:transparent!important;width:60px!important;height:80px!important;left:0!important;top:0!important;text-align:center!important;cursor:pointer!important}#emojiBrick1:hover>#emojiDescriptionBrick1{color:green;opacity:1!important}#emojiBrick2{opacity:1;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:transparent!important;width:60px!important;height:80px!important;left:60px!important;top:0!important;text-align:center!important;cursor:pointer!important}#emojiBrick2:hover>#emojiDescriptionBrick2{opacity:1!important}#emojiBrick3{opacity:1;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:transparent!important;width:60px!important;height:80px!important;left:120px!important;top:0!important;text-align:center!important;cursor:pointer!important}#emojiBrick3:hover>#emojiDescriptionBrick3{opacity:1!important}#emojiBrick4{opacity:1;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:transparent!important;width:60px!important;height:80px!important;left:180px!important;top:0!important;text-align:center!important;cursor:pointer!important}#emojiBrick4:hover>#emojiDescriptionBrick4{opacity:1!important}#emojiBrick5{opacity:1;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:transparent!important;width:60px!important;height:80px!important;left:240px!important;top:0!important;text-align:center!important;cursor:pointer!important}#emojiBrick5:hover>#emojiDescriptionBrick5{opacity:1!important}#emojiFaceBrick1{opacity:1!important;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:#ffe137;width:40px!important;height:40px!important;border-radius:20px;left:10px!important;top:10px!important;cursor:pointer!important}#emojiFaceBrick2{opacity:1!important;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:#ffe137;width:40px!important;height:40px!important;border-radius:20px;left:10px!important;top:10px!important;cursor:pointer!important}#emojiFaceBrick3{opacity:1!important;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:#ffe137;width:40px!important;height:40px!important;border-radius:20px;left:10px!important;top:10px!important;cursor:pointer!important}#emojiFaceBrick4{opacity:1!important;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:#ffe137;width:40px!important;height:40px!important;border-radius:20px;left:10px!important;top:10px!important;cursor:pointer!important}#emojiFaceBrick5{opacity:1!important;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:#ffe137;width:40px!important;height:40px!important;border-radius:20px;left:10px!important;top:10px!important;cursor:pointer!important}#SuperFaceTeller{opacity:1;animation-name:Super!important;animation-direction:normal!important;animation-play-state:paused;animation-duration:2s!important;animation-timing-function:ease-all!important;animation-iteration-count:infinite!important;cursor:pointer!important}#GoodFaceTeller{opacity:1;animation-name:Good!important;animation-direction:normal!important;animation-play-state:paused;animation-duration:2s!important;animation-timing-function:ease-all!important;animation-iteration-count:infinite!important;cursor:pointer!important}#NeutralFaceTeller{opacity:1;animation-name:Neutral!important;animation-direction:normal!important;animation-play-state:paused;animation-duration:2s!important;animation-timing-function:ease-all!important;animation-iteration-count:infinite!important;cursor:pointer!important}#BadFaceTeller{opacity:1;animation-name:Bad!important;animation-direction:normal!important;animation-play-state:paused;animation-duration:2s!important;animation-timing-function:ease-all!important;animation-iteration-count:infinite!important;cursor:pointer!important}#FuriousFaceTeller{opacity:1;animation-name:Furious!important;animation-direction:normal!important;animation-play-state:paused;animation-duration:2s!important;animation-timing-function:ease-all!important;animation-iteration-count:infinite!important;cursor:pointer!important}.tellersFace{fill:none!important}#emojiDescriptionBrick1{color:#333;opacity:0;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;font-size:small!important;position:absolute!important;background-color:transparent!important;width:60px!important;height:20px!important;left:0!important;bottom:0!important;text-align:center!important;cursor:pointer!important}#emojiDescriptionBrick2{color:#333;opacity:0;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;font-size:small!important;position:absolute!important;background-color:transparent!important;width:60px!important;height:20px!important;left:0!important;bottom:0!important;text-align:center!important;cursor:pointer!important}#emojiDescriptionBrick3{color:#333;opacity:0;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;font-size:small!important;position:absolute!important;background-color:transparent!important;width:60px!important;height:20px!important;left:0!important;bottom:0!important;text-align:center!important;cursor:pointer!important}#emojiDescriptionBrick4{color:#333;opacity:0;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;font-size:small!important;position:absolute!important;background-color:transparent!important;width:60px!important;height:20px!important;left:0!important;bottom:0!important;text-align:center!important;cursor:pointer!important}#emojiDescriptionBrick5{color:#333;opacity:0;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;font-size:small!important;position:absolute!important;width:60px!important;height:20px!important;left:0!important;bottom:0!important;text-align:center!important;cursor:pointer!important}#textAreasBrick{opacity:0;display:none;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important; -o-transition:.3s!important;position:absolute!important;background-color:#eaeaeb!important;width:340px!important;height:110px!important;left:0!important;top:100px!important;text-align:center!important}#textAreaBrick{color:#333;opacity:1!important;resize:none!important;font-family:Roboto,sans-serif!important;font-size:medium!important;outline:0!important;box-shadow:none!important;border:none!important;position:absolute!important;background-color:transparent!important;width:300px!important;height:90px!important;left:20px!important;top:10px!important;text-align:left!important}#inputAreasBrick{display:none;opacity:0;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;position:absolute!important;background-color:#eaeaeb!important;width:340px!important;height:50px!important;left:0!important;top:90px!important;text-align:center!important}#inputAreaBrick{color:#333;opacity:1;resize:none!important;font-family:Roboto,sans-serif!important;font-size:medium!important;outline:0!important;box-shadow:none!important;border:none!important;position:absolute!important;background-color:transparent!important;width:300px!important;height:30px!important;left:20px!important;top:10px!important;text-align:center!important}#actionButtonBrick{display:none;opacity:0;position:absolute!important;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;bottom:10px;right:20px!important;border-radius:5px;background-color:#cecece;width:60px!important;height:25px!important;font-size:small!important;text-align:center!important;padding-top:7px!important;color:#fff!important;cursor:pointer!important}#actionButtonBrick:hover{opacity:.7!important}#skipButtonBrick{display:none;opacity:0;position:absolute!important;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;bottom:20px!important;right:80px!important;border-radius:5px;background-color:transparent!important;width:60px!important;height:25px!important;font-size:small!important;text-align:center!important;padding-top:7px!important;color:'+userColor()+'!important;cursor:pointer!important;text-decoration:underline!important}#paragraphBrick{color:#333;text-align:left;opacity:1;position:absolute!important;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;bottom:20px!important;left:20px!important;border-radius:5px;background-color:transparent!important;width:300px!important;height:25px!important;font-size:small!important;padding-top:7px!important;important;cursor:pointer!important}#paragraphBrick a{color:'+userColor()+'!important}#notificationParagraphBrick{display:block;opacity:0;transition:.3s!important;-webkit-transition:.3s!important;-moz-transition:.3s!important;-o-transition:.3s!important;font-size:small!important;position:absolute!important;background-color:transparent!important;width:300px!important;height:auto!important;left:20px!important;bottom:60px!important;text-align:center!important;color:#777!important}@keyframes Furious{0%{transform:translateX(0) translateY(0)}10%{transform:translateX(0) translateY(0)}15%{transform:translateX(4px) translateY(-3px)}20%{transform:translateX(-4px) translateY(-3px)}25%{transform:translateX(4px) translateY(-3px)}30%{transform:translateX(-4px) translateY(-3px)}35%{transform:translateX(4px) translateY(-3px)}40%{transform:translateX(-4px) translateY(-3px)}45%{transform:translateX(0) translateY(-3px)}90%{transform:translateX(0) translateY(0)}}@-webkit-keyframes Furious{0%{transform:translateX(0) translateY(0)}10%{transform:translateX(0) translateY(0)}15%{transform:translateX(4px) translateY(-3px)}20%{transform:translateX(-4px) translateY(-3px)}25%{transform:translateX(4px) translateY(-3px)}30%{transform:translateX(-4px) translateY(-3px)}35%{transform:translateX(4px) translateY(-3px)}40%{transform:translateX(-4px) translateY(-3px)}45%{transform:translateX(0) translateY(-3px)}90%{transform:translateX(0) translateY(0)}}@-moz-keyframes Furious{0%{transform:translateX(0) translateY(0)}10%{transform:translateX(0) translateY(0)}15%{transform:translateX(4px) translateY(-3px)}20%{transform:translateX(-4px) translateY(-3px)}25%{transform:translateX(4px) translateY(-3px)}30%{transform:translateX(-4px) translateY(-3px)}35%{transform:translateX(4px) translateY(-3px)}40%{transform:translateX(-4px) translateY(-3px)}45%{transform:translateX(0) translateY(-3px)}90%{transform:translateX(0) translateY(0)}}@-ms-keyframes Furious{0%{transform:translateX(0) translateY(0)}10%{transform:translateX(0) translateY(0)}15%{transform:translateX(4px) translateY(-3px)}20%{transform:translateX(-4px) translateY(-3px)}25%{transform:translateX(4px) translateY(-3px)}30%{transform:translateX(-4px) translateY(-3px)}35%{transform:translateX(4px) translateY(-3px)}40%{transform:translateX(-4px) translateY(-3px)}45%{transform:translateX(0) translateY(-3px)}90%{transform:translateX(0) translateY(0)}}@-o-keyframes Furious{0%{transform:translateX(0) translateY(0)}10%{transform:translateX(0) translateY(0)}15%{transform:translateX(4px) translateY(-3px)}20%{transform:translateX(-4px) translateY(-3px)}25%{transform:translateX(4px) translateY(-3px)}30%{transform:translateX(-4px) translateY(-3px)}35%{transform:translateX(4px) translateY(-3px)}40%{transform:translateX(-4px) translateY(-3px)}45%{transform:translateX(0) translateY(-3px)}90%{transform:translateX(0) translateY(0)}}@keyframes Bad{0%{transform:translateX(0)}10%{transform:translateX(0)}20%{transform:translateX(4px)}30%{transform:translateX(-4px)}40%{transform:translateX(4px)}50%{transform:translateX(-4px)}60%{transform:translateX(4px)}70%{transform:translateX(-4px)}80%{transform:translateX(0)}90%{transform:translateX(0)}}@-webkit-keyframes Bad{0%{transform:translateX(0)}10%{transform:translateX(0)}20%{transform:translateX(4px)}30%{transform:translateX(-4px)}40%{transform:translateX(4px)}50%{transform:translateX(-4px)}60%{transform:translateX(4px)}70%{transform:translateX(-4px)}80%{transform:translateX(0)}90%{transform:translateX(0)}}@-moz-keyframes Bad{0%{transform:translateX(0)}10%{transform:translateX(0)}20%{transform:translateX(4px)}30%{transform:translateX(-4px)}40%{transform:translateX(4px)}50%{transform:translateX(-4px)}60%{transform:translateX(4px)}70%{transform:translateX(-4px)}80%{transform:translateX(0)}90%{transform:translateX(0)}}@-ms-keyframes Bad{0%{transform:translateX(0)}10%{transform:translateX(0)}20%{transform:translateX(4px)}30%{transform:translateX(-4px)}40%{transform:translateX(4px)}50%{transform:translateX(-4px)}60%{transform:translateX(4px)}70%{transform:translateX(-4px)}80%{transform:translateX(0)}90%{transform:translateX(0)}}@-o-keyframes Bad{0%{transform:translateX(0)}10%{transform:translateX(0)}20%{transform:translateX(4px)}30%{transform:translateX(-4px)}40%{transform:translateX(4px)}50%{transform:translateX(-4px)}60%{transform:translateX(4px)}70%{transform:translateX(-4px)}80%{transform:translateX(0)}90%{transform:translateX(0)}}@keyframes Neutral{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateX(5px)}40%{transform:translateX(5px)}60%{transform:translateX(-5px)}70%{transform:translateX(-5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-webkit-keyframes Neutral{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateX(5px)}40%{transform:translateX(5px)}60%{transform:translateX(-5px)}70%{transform:translateX(-5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-moz-keyframes Neutral{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateX(5px)}40%{transform:translateX(5px)}60%{transform:translateX(-5px)}70%{transform:translateX(-5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-ms-keyframes Neutral{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateX(5px)}40%{transform:translateX(5px)}60%{transform:translateX(-5px)}70%{transform:translateX(-5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-o-keyframes Neutral{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateX(5px)}40%{transform:translateX(5px)}60%{transform:translateX(-5px)}70%{transform:translateX(-5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@keyframes Good{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(-7px)}40%{transform:translateY(5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-webkit-keyframes Good{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(-7px)}40%{transform:translateY(5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-moz-keyframes Good{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(-7px)}40%{transform:translateY(5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-ms-keyframes Good{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(-7px)}40%{transform:translateY(5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-o-keyframes Good{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(-7px)}40%{transform:translateY(5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@keyframes Super{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(4px)}50%{transform:translateY(4px)}90%{transform:translateY(0)}}@-webkit-keyframes Super{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(4px)}50%{transform:translateY(4px)}90%{transform:translateY(0)}}@-moz-keyframes Super{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(4px)}50%{transform:translateY(4px)}90%{transform:translateY(0)}}@-ms-keyframes Super{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(4px)}50%{transform:translateY(4px)}90%{transform:translateY(0)}}@-o-keyframes Super{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(4px)}50%{transform:translateY(4px)}90%{transform:translateY(0)}}</style>';

    //Create ballon
    tellerTag.innerHTML = styleSheetTeller + ballonTellerBrick;

    var entryA = "";//Emotion
    var entryB = "";//Email
    var entryC = "";//Message
    var entryD = "";//Day
    var entryE = "";//Date
    var entryF = "";//Hour
    var entryG = "";//Browser language

    entryA = tellerTag.getAttribute("entryA")
    entryB = tellerTag.getAttribute("entryB")
    entryC = tellerTag.getAttribute("entryC")
    entryD = tellerTag.getAttribute("entryD")
    entryE = tellerTag.getAttribute("entryE")
    entryF = tellerTag.getAttribute("entryF")
    entryG = tellerTag.getAttribute("entryG")
    
    function userColor(){
        a = tellerTag.getAttribute("ballonColor")
        if (a == null || a == "none" || a == "")
        return "white";
        else{return a}
    }

    function appearAfter(){
        a = tellerTag.getAttribute("appearAfter")
        if (a == null || a == "none" || a == "")
        return 1;
        else{return parseInt(a)}
    }

    console.log(userColor())

    //Regex for email 
    const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //Displayed Box or not
    var displayed = false;

    //Already interacted Box or not
    var interacted = false;

    //Ready to fetch
    var emotionSelected= false;
    var messageReady = false;
    var emailReadyTeller = false;
    var lockAndLoudTeller=false;

    //User input data
    var emotionTeller = "";
    var messageTeller = "";
    var emailTeller = "";

    //Components
    const buttonFatherBrick = document.getElementById("buttonFatherBrick");/* actionButtonBrick */
    const fatherBrick = document.getElementById("fatherBrick");
    const titleBrick = document.getElementById("titleBrick");
    const actionButtonBrick = document.getElementById("actionButtonBrick");
    const skipButtonBrick = document.getElementById("skipButtonBrick");
    const emojiDescriptionBrick1 = document.getElementById("emojiDescriptionBrick1");
    const emojiDescriptionBrick2 = document.getElementById("emojiDescriptionBrick2");
    const emojiDescriptionBrick3 = document.getElementById("emojiDescriptionBrick3");
    const emojiDescriptionBrick4 = document.getElementById("emojiDescriptionBrick4");
    const emojiDescriptionBrick5 = document.getElementById("emojiDescriptionBrick5");
    const SuperFaceTeller = document.getElementById("SuperFaceTeller");
    const GoodFaceTeller = document.getElementById("GoodFaceTeller");
    const NeutralFaceTeller = document.getElementById("NeutralFaceTeller");
    const BadFaceTeller = document.getElementById("BadFaceTeller");
    const FuriousFaceTeller = document.getElementById("FuriousFaceTeller");
    const emojiSelectorBrick = document.getElementById("emojiSelectorBrick");
    const notificationParagraphBrick = document.getElementById("notificationParagraphBrick")
    const paragraphBrick = document.getElementById("paragraphBrick");
    const xBrick = document.getElementById("xBrick");
    const hoverBrick = document.getElementById("hoverBrick");
    const hoverBrickClose = document.getElementById("hoverBrickClose");

    const textAreasBrick = document.getElementById("textAreasBrick");
    const textAreaBrick = document.getElementById("textAreaBrick");

    const inputAreaBrick = document.getElementById("inputAreaBrick");
    const emojisBrick = document.getElementById("emojisBrick");
    const emojiBrick1 = document.getElementById("emojiBrick1");
    const emojiBrick2 = document.getElementById("emojiBrick2");
    const emojiBrick3 = document.getElementById("emojiBrick3");
    const emojiBrick4 = document.getElementById("emojiBrick4");
    const emojiBrick5 = document.getElementById("emojiBrick5");

  
    //General status
    function statusBallon(){
        setTimeout(function(){    
            console.log("")
            console.log("displayed: "+ displayed)
            console.log("interacted: "+ interacted)
            console.log("emotionSelected: "+ emotionSelected)
            console.log("emotionTeller: "+ emotionTeller)
            console.log("messageReady: "+ messageReady)
            console.log("messageTeller: "+ messageTeller)
            console.log("emailReadyTeller: "+ emailReadyTeller)
            console.log("emailTeller: "+ emailTeller)
            console.log("lockAndLoudTeller: "+ lockAndLoudTeller)
            console.log("browserName: "+ detectBrowser())
            console.log("browserLang: "+ lang)
            console.log("")
        }, 1000);
    }

    function notificationAppear(l,c){
        l.style.opacity = "0";
        l.textContent = "";
        l.textContent = c;
        l.style.opacity = "1";
    }

    //Function blow ballon
    function blowBallon(){
        buttonFatherBrick.style.width = "60px";
        buttonFatherBrick.style.height = "60px";
        hoverBrick.style.opacity = "1";
        hoverBrick.style.left = "100px";
    }

    function unblowBallon(){
        buttonFatherBrick.style.width = "50px";
        buttonFatherBrick.style.height = "50px";           
        hoverBrick.style.opacity = "0";
        hoverBrick.style.left = "90px";
    }

    function fullUnblowBallon(){
        buttonFatherBrick.style.width = "0px";
        buttonFatherBrick.style.height = "0px";           
        hoverBrick.style.opacity = "0";
        hoverBrick.style.left = "90px";
        buttonFatherBrick.style.opacity = "0"
    }

    //Hover button
    buttonFatherBrick.addEventListener("mouseover", function() {
        if(!displayed){
        	blowBallon()
        }
        setTimeout(function(){
        	unblowBallon()
        },5000);
    })

    //Show invitation to comment initially
    setTimeout(function(){
        buttonFatherBrick.style.opacity = "1";
        if(!displayed && !interacted){
            setTimeout(function(){blowBallon()}, appearAfter());
            setTimeout(function(){unblowBallon()}, appearAfter() + 5000);
    }
    }, 1000);

    //By main button
    hoverBrickClose.addEventListener("click", function() {
    	unblowBallon()
    });

    //By main button
    buttonFatherBrick.addEventListener("click", function() {
    	unblowBallon()
        interacted = true;
        if(displayed){
            xBrick.style.opacity = "0";
            xBrick.style.transform = "translateX(30px) scaleX(0)";
            console.log("displayed: "+ displayed)
            fatherBrick.style.opacity = "0";
            fatherBrick.style.transform = "translateY(10px)";
            emojisBrick.style.opacity = "0";
            emojisBrick.style.transform = "translateY(20px)";
            setTimeout(function(){
                buttonFatherBrick.style.borderRadius = "30px 30px 30px 7px";
                buttonFatherBrick.style.backgroundColor = userColor();
                fatherBrick.style.display = "none";
            	displayed = false;
            }, 300);
        }

        else{
        	unblowBallon()
            buttonFatherBrick.style.borderRadius = "30px 30px 30px 30px";
            buttonFatherBrick.style.backgroundColor = "white";
            console.log("displayed: "+ displayed)
            fatherBrick.style.display = "block";
            setTimeout(function(){
                fatherBrick.style.opacity = "1";
                fatherBrick.style.transform = "translateY(0px)";
                emojisBrick.style.opacity = "1";
                emojisBrick.style.transform = "translateY(0px)";
            }, 10);
            setTimeout(function(){
                xBrick.style.opacity = "1";
                xBrick.style.transform = "translateX(0px) scaleX(1)";
            	displayed = true;
            }, 300);
        }
    });
    
    //Cuando hago click en el icon1
    emojiBrick1.addEventListener("click", function() {
        emojiSelectorBrick.style.left = "25px";
        emojiSelectorBrick.style.opacity = "1";
        emotionSelected = true;
        emotionTeller = "Super";
        emojisBrick.style.top = "20px";
        emojiBrick1.style.opacity ="1";
        emojiFaceBrick1.style.backgroundColor = "#ffe137";
        fatherBrick.style.height = "290px";
        emojiFaceBrick2.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick3.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick4.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick5.style.backgroundColor = "#E8E8E8";
        emojiBrick2.style.opacity = "0.5";       
        emojiBrick3.style.opacity = "0.5";       
        emojiBrick4.style.opacity = "0.5";       
        emojiBrick5.style.opacity = "0.5"; 
        emojiDescriptionBrick1.style.opacity = "1";
        emojiDescriptionBrick1.style.transform = "translateY(-5px)";
        emojiDescriptionBrick2.style.opacity = "0";
        emojiDescriptionBrick2.style.transform = "translateY(0px)";
        emojiDescriptionBrick3.style.opacity = "0";
        emojiDescriptionBrick3.style.transform = "translateY(0px)";
        emojiDescriptionBrick4.style.opacity = "0";
        emojiDescriptionBrick4.style.transform = "translateY(0px)";
        emojiDescriptionBrick5.style.opacity = "0";
        emojiDescriptionBrick5.style.transform = "translateY(0px)";
        titleBrick.style.opacity = "0";
        titleBrick.style.display = "none";
        actionButtonBrick.style.display = "block";
        textAreasBrick.style.display = "block";
        setTimeout(function(){ textAreasBrick.style.opacity = "1"; actionButtonBrick.style.opacity = "1"; actionButtonBrick.style.bottom = "20px" }, 1);
    });

    //Cuando hago click en el icon2
    emojiBrick2.addEventListener("click", function() {
        emojiSelectorBrick.style.left = "85px";
        emojiSelectorBrick.style.opacity = "1";
        emotionSelected = true;
        emotionTeller = "Good";
        emojisBrick.style.top = "20px";
        emojiBrick2.style.opacity ="1";
        emojiFaceBrick2.style.backgroundColor = "#ffe137";
        fatherBrick.style.height = "290px";
        emojiFaceBrick1.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick3.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick4.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick5.style.backgroundColor = "#E8E8E8"; 
        emojiBrick1.style.opacity = "0.5";       
        emojiBrick3.style.opacity = "0.5";       
        emojiBrick4.style.opacity = "0.5";       
        emojiBrick5.style.opacity = "0.5";  
        textAreaBrick.style.display = "block";
        emojiDescriptionBrick2.style.opacity = "1";
        emojiDescriptionBrick2.style.transform = "translateY(-5px)";
        emojiDescriptionBrick1.style.opacity = "0";
        emojiDescriptionBrick1.style.transform = "translateY(0px)";
        emojiDescriptionBrick3.style.opacity = "0";
        emojiDescriptionBrick3.style.transform = "translateY(0px)";
        emojiDescriptionBrick4.style.opacity = "0";
        emojiDescriptionBrick4.style.transform = "translateY(0px)";
        emojiDescriptionBrick5.style.opacity = "0";
        emojiDescriptionBrick5.style.transform = "translateY(0px)";
        titleBrick.style.display = "none";
        titleBrick.style.opacity = "0";
        actionButtonBrick.style.display = "block";
        textAreasBrick.style.display = "block";
        setTimeout(function(){ textAreasBrick.style.opacity = "1"; actionButtonBrick.style.opacity = "1"; actionButtonBrick.style.bottom = "20px" }, 1);
    });

    //Cuando hago click en el icon3
    emojiBrick3.addEventListener("click", function() {
        emojiSelectorBrick.style.left = "145px";
        emojiSelectorBrick.style.opacity = "1";
        emotionSelected = true;
        emotionTeller = "Neutral";
        emojisBrick.style.top = "20px";
        emojiBrick3.style.opacity ="1";
        emojiFaceBrick3.style.backgroundColor = "#ffe137";
        fatherBrick.style.height = "290px";
        emojiFaceBrick1.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick2.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick4.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick5.style.backgroundColor = "#E8E8E8"; 
        emojiBrick1.style.opacity = "0.5";       
        emojiBrick2.style.opacity = "0.5";       
        emojiBrick4.style.opacity = "0.5";       
        emojiBrick5.style.opacity = "0.5";  
        textAreaBrick.style.display = "block";
        emojiDescriptionBrick3.style.opacity = "1";
        emojiDescriptionBrick3.style.transform = "translateY(-5px)";
        emojiDescriptionBrick2.style.opacity = "0";
        emojiDescriptionBrick2.style.transform = "translateY(0px)";
        emojiDescriptionBrick1.style.opacity = "0";
        emojiDescriptionBrick1.style.transform = "translateY(0px)";
        emojiDescriptionBrick4.style.opacity = "0";
        emojiDescriptionBrick4.style.transform = "translateY(0px)";
        emojiDescriptionBrick5.style.opacity = "0";
        emojiDescriptionBrick5.style.transform = "translateY(-0px)";
        titleBrick.style.display = "none";
        titleBrick.style.opacity = "0";
        actionButtonBrick.style.display = "block";
        textAreasBrick.style.display = "block";
        setTimeout(function(){ textAreasBrick.style.opacity = "1"; actionButtonBrick.style.opacity = "1"; actionButtonBrick.style.bottom = "20px" }, 1);
    });

    //Cuando hago click en el icon4
    emojiBrick4.addEventListener("click", function() {
        emojiSelectorBrick.style.left = "205px";
        emojiSelectorBrick.style.opacity = "1";
        emotionSelected = true;
        emotionTeller = "Bad";
        emojisBrick.style.top = "20px";
        emojiBrick4.style.opacity = "1";
        emojiFaceBrick4.style.backgroundColor = "#ffe137";
        fatherBrick.style.height = "290px";
        emojiFaceBrick1.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick2.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick3.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick5.style.backgroundColor = "#E8E8E8"; 
        emojiBrick1.style.opacity = "0.5";       
        emojiBrick2.style.opacity = "0.5";       
        emojiBrick3.style.opacity = "0.5";       
        emojiBrick5.style.opacity = "0.5";  
        textAreaBrick.style.display = "block";
        emojiDescriptionBrick4.style.opacity = "1";
        emojiDescriptionBrick4.style.transform = "translateY(-5px)";
        emojiDescriptionBrick2.style.opacity = "0";
        emojiDescriptionBrick2.style.transform = "translateY(0px)";
        emojiDescriptionBrick1.style.opacity = "0";
        emojiDescriptionBrick1.style.transform = "translateY(0px)";
        emojiDescriptionBrick3.style.opacity = "0";
        emojiDescriptionBrick3.style.transform = "translateY(0px)";
        emojiDescriptionBrick5.style.opacity = "0";
        emojiDescriptionBrick5.style.transform = "translateY(0px)";
        titleBrick.style.display = "none";
        titleBrick.style.opacity = "0";
        actionButtonBrick.style.display = "block";
        textAreasBrick.style.display = "block";
        setTimeout(function(){ textAreasBrick.style.opacity = "1"; actionButtonBrick.style.opacity = "1"; actionButtonBrick.style.bottom = "20px" }, 1);
    });

    //Cuando hago click en el icon5
    emojiBrick5.addEventListener("click", function() {
        emojiSelectorBrick.style.left = "265px";
        emojiSelectorBrick.style.opacity = "1";
        emotionSelected = true;
        emotionTeller = "Furious";
        emojisBrick.style.top = "20px";
        emojiBrick5.style.opacity = "1";
        emojiFaceBrick5.style.backgroundColor = "#ffe137";
        fatherBrick.style.height = "290px";
        emojiFaceBrick1.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick2.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick3.style.backgroundColor = "#E8E8E8"; 
        emojiFaceBrick4.style.backgroundColor = "#E8E8E8"; 
        emojiBrick1.style.opacity = "0.5";       
        emojiBrick2.style.opacity = "0.5";       
        emojiBrick3.style.opacity = "0.5";       
        emojiBrick4.style.opacity = "0.5";  
        textAreaBrick.style.display = "block";
        emojiDescriptionBrick5.style.opacity = "1";
        emojiDescriptionBrick5.style.transform = "translateY(-5px)";
        emojiDescriptionBrick2.style.opacity = "0";
        emojiDescriptionBrick2.style.transform = "translateY(0px)";
        emojiDescriptionBrick1.style.opacity = "0";
        emojiDescriptionBrick1.style.transform = "translateY(0px)";
        emojiDescriptionBrick3.style.opacity = "0";
        emojiDescriptionBrick3.style.transform = "translateY(0px)";
        emojiDescriptionBrick4.style.opacity = "0";
        emojiDescriptionBrick4.style.transform = "translateY(0px)";
        titleBrick.style.display = "none";
        titleBrick.style.opacity = "0";
        actionButtonBrick.style.display = "block";
        textAreasBrick.style.display = "block";
        setTimeout(function(){ textAreasBrick.style.opacity = "1"; actionButtonBrick.style.opacity = "1"; actionButtonBrick.style.bottom = "20px" }, 1);
    });

    //Icon1 hover
    emojiBrick1.addEventListener("mouseover", function() {
        emojiFaceBrick1.style.transform="translateY(-10px)";
        SuperFaceTeller.style.animationPlayState = "running";
        emojiBrick1.style.opacity ="1 !important";
        if(!emotionSelected){
        emojiDescriptionBrick1.style.opacity= "1";
        emojiBrick2.style.opacity = "0.5";       
        emojiBrick3.style.opacity = "0.5";       
        emojiBrick4.style.opacity = "0.5";       
        emojiBrick5.style.opacity = "0.5";
        }
    });

    emojiBrick1.addEventListener("mouseout", function() {
        emojiFaceBrick1.style.transform="translateY(0px)";
        SuperFaceTeller.style.animationPlayState = "paused";
        if(!emotionSelected){
        emojiDescriptionBrick1.style.opacity= "0";
        emojiBrick1.style.opacity ="1"
        emojiBrick2.style.opacity = "1";       
        emojiBrick3.style.opacity = "1";       
        emojiBrick4.style.opacity = "1";       
        emojiBrick5.style.opacity = "1";
        }      
    });

    //Icon2 hover
    emojiBrick2.addEventListener("mouseover", function() {
        emojiFaceBrick2.style.transform="translateY(-10px)";
        GoodFaceTeller.style.animationPlayState = "running";
        emojiBrick2.style.opacity ="1 !important";
        if(!emotionSelected){
        emojiDescriptionBrick2.style.opacity= "1";
        emojiBrick1.style.opacity = "0.5";       
        emojiBrick3.style.opacity = "0.5";       
        emojiBrick4.style.opacity = "0.5";       
        emojiBrick5.style.opacity = "0.5";
        }      
    });

    emojiBrick2.addEventListener("mouseout", function() {
        emojiFaceBrick2.style.transform="translateY(0px)";
        GoodFaceTeller.style.animationPlayState = "paused";
        if(!emotionSelected){
        emojiDescriptionBrick2.style.opacity="0";
        emojiBrick2.style.opacity ="1"
        emojiBrick1.style.opacity = "1";       
        emojiBrick3.style.opacity = "1";       
        emojiBrick4.style.opacity = "1";       
        emojiBrick5.style.opacity = "1";
        }     
    });

    //Icon3 hover
    emojiBrick3.addEventListener("mouseover", function() {
        emojiFaceBrick3.style.transform="translateY(-10px)";
        NeutralFaceTeller.style.animationPlayState = "running";
        emojiBrick3.style.opacity ="1 !important";
        if(!emotionSelected){
        emojiDescriptionBrick3.style.opacity="1";
        emojiBrick1.style.opacity = "0.5";       
        emojiBrick2.style.opacity = "0.5";       
        emojiBrick4.style.opacity = "0.5";       
        emojiBrick5.style.opacity = "0.5";
        }      
    });

    emojiBrick3.addEventListener("mouseout", function() {
        emojiFaceBrick3.style.transform="translateY(0px)";
        NeutralFaceTeller.style.animationPlayState = "paused";
        if(!emotionSelected){
        emojiDescriptionBrick3.style.opacity="0";
        emojiBrick3.style.opacity ="1"
        emojiBrick1.style.opacity = "1";       
        emojiBrick2.style.opacity = "1";       
        emojiBrick4.style.opacity = "1";       
        emojiBrick5.style.opacity = "1";
        }    
    });

    //Icon4 hover
    emojiBrick4.addEventListener("mouseover", function() {
        emojiFaceBrick4.style.transform="translateY(-10px)";
        BadFaceTeller.style.animationPlayState = "running";
        emojiBrick4.style.opacity ="1 !important";
        if(!emotionSelected){
        emojiDescriptionBrick4.style.opacity="1";
        emojiBrick1.style.opacity = "0.5";       
        emojiBrick2.style.opacity = "0.5";       
        emojiBrick3.style.opacity = "0.5";       
        emojiBrick5.style.opacity = "0.5";
        }     
    });

    emojiBrick4.addEventListener("mouseout", function() {
        emojiFaceBrick4.style.transform="translateY(0px)";
        BadFaceTeller.style.animationPlayState = "paused";
        if(!emotionSelected){
        emojiDescriptionBrick4.style.opacity="0";
        emojiBrick4.style.opacity ="1"
        emojiBrick1.style.opacity = "1";       
        emojiBrick2.style.opacity = "1";       
        emojiBrick3.style.opacity = "1";       
        emojiBrick5.style.opacity = "1";
        }    
    });

    //Icon5 hover
    emojiBrick5.addEventListener("mouseover", function() {
        emojiFaceBrick5.style.transform="translateY(-10px)";
        FuriousFaceTeller.style.animationPlayState = "running";
        emojiBrick5.style.opacity ="1 !important";
        if(!emotionSelected){
        emojiDescriptionBrick5.style.opacity="1";
        emojiBrick1.style.opacity = "0.5";       
        emojiBrick2.style.opacity = "0.5";       
        emojiBrick3.style.opacity = "0.5";       
        emojiBrick4.style.opacity = "0.5";
        }
    });

    emojiBrick5.addEventListener("mouseout", function() {
        emojiFaceBrick5.style.transform="translateY(0px)";
        FuriousFaceTeller.style.animationPlayState = "paused";
        if(!emotionSelected){
        emojiDescriptionBrick5.style.opacity="0";
        emojiBrick5.style.opacity ="1"
        emojiBrick1.style.opacity = "1";       
        emojiBrick2.style.opacity = "1";       
        emojiBrick3.style.opacity = "1";       
        emojiBrick4.style.opacity = "1";
        }     
    });

    //Text area regex
    textAreaBrick.addEventListener("input", function() {        
        notificationAppear(notificationParagraphBrick, "");        
        const regexMsg = /^[\a-zA-Z\d\s:\u00C0-\u00FF.,¡!¿?]+$/;
        var isMsg = regexMsg.test(textAreaBrick.value);        
        if(textAreaBrick.value == ""){
            messageTeller = "";
            messageReady = false; // Confirm message setted
            messageTeller = ""; //Set message on variable
            actionButtonBrick.style.color = "white";
            actionButtonBrick.style.backgroundColor = "#CECECE";
            notificationAppear(notificationParagraphBrick, byLanguage("The message must not be empty","El mensaje no puede estar vacío."));
        }
        else if(isMsg){
            messageTeller = textAreaBrick.value;
            messageReady = true; // Confirm message setted
            messageTeller = textAreaBrick.value; //Set message on variable
            actionButtonBrick.style.color = "white";
            actionButtonBrick.style.backgroundColor = userColor();
            notificationAppear(notificationParagraphBrick, byLanguage("Thanks for your feedback","Gracias por tu comentario."));
        }
        else if(!isMsg){
            messageTeller = "";
            messageReady = false; // Confirm message setted
            messageTeller = ""; //Set message on variable
            actionButtonBrick.style.color = "white";
            actionButtonBrick.style.backgroundColor = "#CECECE";
            notificationAppear(notificationParagraphBrick, byLanguage("Use letters from Aa-Zz, numbers from 0-9, and supported special signs (?!.,; :)." ,"Usá letras de Aa-Zz, números de 0-9, y signos admitidos (?!.,;:)."));
        }    
        return;
    });


    //Check regex in input email
    function checkEmail(){
        var isEmail = regexMail.test(inputAreaBrick.value);
        if(inputAreaBrick.value==""){
            emailTeller = "";
            emailReadyTeller = false;
            lockAndLoudTeller = false;
            actionButtonBrick.style.color = "white";
            actionButtonBrick.style.backgroundColor = "#CECECE";
            notificationAppear(notificationParagraphBrick, byLanguage('The field cannot be empty.' ,'Este campo debe llenarse.'));
        }

        else if(!isEmail){
            emailTeller = "";
            emailReadyTeller = false;
            lockAndLoudTeller = false;
            actionButtonBrick.style.color = "white";
            actionButtonBrick.style.backgroundColor = "#CECECE";
            notificationAppear(notificationParagraphBrick, byLanguage("Not valid email address." ,"Correo electrónico no válido."));
        }
        else if(isEmail){
            emailTeller = inputAreaBrick.value;
            emailReadyTeller = true;
            lockAndLoudTeller = true;
            actionButtonBrick.style.color = "white";
            actionButtonBrick.style.backgroundColor = userColor();
            notificationAppear(notificationParagraphBrick, "");
        }
    }

        //Get infoUser and date to submit
        function dayGetTeller(){
        day = new Date().getDay()
        if (day == 0){return "Dom-Sun"}
        else if (day == 1){return "Lun-Mon"}
        else if (day == 2){return "Mar-Tue"}
        else if (day == 3){return "Mie-Wed"}
        else if (day == 4){return "Jue-Thu"}
        else if (day == 5){return "Vie-Fri"}
        else if (day == 6){return "Sab-Sat"}
        }
    
    var dateTeller = new Date().getDate()
    var monthTeller = new Date().getMonth()
    var yearTeller = new Date().getFullYear()
    
    function hourGetTeller(){
      hour = new Date().getHours() 
      if (hour < 10){return ("0" + hour)}
      else {return hour}
    }
    
    function minutesGetTeller(){
      minutes = new Date().getMinutes() 
      if (minutes < 10){return ("0" + minutes)}
      else {return minutes}
    }
    
    inputTimeTeller = hourGetTeller() + ":" + minutesGetTeller();
    
    var dayWeekTeller = dayGetTeller();
    var dateTeller = (yearTeller + "-" + (monthTeller+1) + "-" + dateTeller)
    var zoneTeller = "undefined"

    function entryComposer(entry,resp){
      if (entry==""){return ""}
      else return ('&entry.'+entry+'='+resp)}

    //Submit fetch
    function submit (answer) {      
        if(lockAndLoudTeller){
        answer = encodeURIComponent(answer)
                    
        var fullurl = 'https://docs.google.com/forms/d/e/1FAIpQLSdpgab-bhAdoFrIO7hqw2woqA7dIzxNHZa5sXCoMGfHT7NNCg/formResponse?usp=pp_url'+ 
        entryComposer(entryA,emotionTeller) +
        entryComposer(entryB,emailTeller) +
        entryComposer(entryC,messageTeller) +
        entryComposer(entryD,dayWeekTeller) +
        entryComposer(entryE,dateTeller) +
        entryComposer(entryF,inputTimeTeller) +
        entryComposer(entryG,lang) +
        '&submit=Submit'

        var opts = {
        method: "POST",
        mode: "no-cors", // Google will only submit a form if "mode" is "no-cors"
        redirect: "follow", 
        referrer: "no-referrer"
        }
        console.log("Making request");
        if(detectBrowser() == "ie"){
            skipButtonBrick.style.display = "none";
            inputAreaBrick.style.display = "none";
            actionButtonBrick.style.display = "none";
            titleBrick.style.transform = "translateY(65px)";
            paragraphBrick.innerHTML = byLanguage('Still not using <a target="_blank" href="https://www.unirvana.com/teller">Teller</a>?','Todavía no usas <a target="_blank" href="https://www.unirvana.com/teller">Teller</a>?')
            paragraphBrick.style.textAlign= "center";             
            paragraphBrick.style.opacity = "1";
            titleBrick.textContent = byLanguage('Your browser does not support the request, we will have to redirect it.','Su navegador no admite la solicitud, tendremos que redirigirla.'); 
            titleBrick.style.opacity = "1";
            setTimeout(function(){ window.open(fullurl, 'tellerRequest'); }, 1500);        
            setTimeout(function(){ ballon() }, 5000);  
        } 
        else{     
            fetch(fullurl, opts).then(function(response) {
            return response.text();
        })
        .then(function(text) {        
            skipButtonBrick.style.display = "none";
            inputAreaBrick.style.display = "none";
            actionButtonBrick.style.display = "none";
            titleBrick.style.transform = "translateY(65px)";
            paragraphBrick.innerHTML = byLanguage('Still not using <a target="_blank" href="https://www.unirvana.com/teller">Teller</a>?','Todavía no usas <a target="_blank" href="https://www.unirvana.com/teller">Teller</a>?')
            paragraphBrick.style.textAlign= "center";             
            paragraphBrick.style.opacity = "1";
            titleBrick.textContent = byLanguage('We receive the feedback, thanks for your time.','Recibimos su comentario, gracias por su tiempo.'); 
            titleBrick.style.opacity = "1";
        })
        .catch(function(error) {
            skipButtonBrick.style.display = "none";
            inputAreaBrick.style.display = "none";
            actionButtonBrick.style.display = "none";
            titleBrick.style.transform = "translateY(35px)";
            paragraphBrick.innerHTML = byLanguage('Still not using <a target="_blank" href="https://www.unirvana.com/teller">Teller</a>?','Todavía no usas <a target="_blank" href="https://www.unirvana.com/teller">Teller</a>?')
            paragraphBrick.style.textAlign= "center";             
            paragraphBrick.style.opacity = "1";
            titleBrick.textContent = byLanguage('Something went wrong, you should try later.','Algo salió mal, no hemos podido cargar su solicitud, por favor intentelo más tarde.'); 
            titleBrick.style.opacity = "1";
        });
            setTimeout(function(){fatherBrick.style.transform = "translateY(20px)";
                displayed = false
                fatherBrick.style.opacity = "0";
                titleBrick.style.opacity = "0";
                emojisBrick.style.opacity = "0";
                emojisBrick.style.transform = "translateY(20px)";     
                fullUnblowBallon()
                xBrick.style.opacity = "0";

                setTimeout(function(){
                    fatherBrick.style.display = "none";
                    hoverBrick.style.display = "none" 
                }, 300);
            }, 3000);
            setTimeout(function(){ ballon() }, 5000);
        }
    }}
    
    //Event listener for skip button
    skipButtonBrick.addEventListener("click", function() {
        console.log("pressing skip")
        notificationParagraphBrick.style.opacity = "0"
        emailTeller = "none";
        emailReadyTeller = true;
        lockAndLoudTeller = true;
        titleBrick.style.opacity = "0";
        skipButtonBrick.style.opacity = "0";
        inputAreasBrick.style.opacity = "0";
        actionButtonBrick.style.opacity = "0";
        submit();
    });


    actionButtonBrick.addEventListener("click", function() {

        //Empty message
        if(textAreaBrick.value == ""){
            notificationAppear(notificationParagraphBrick, byLanguage("The message must not be empty","El mensaje no puede estar vacío."));
        }

        //Emotion, message and email ready to fetch
        else if(emotionSelected == true && messageReady == true && emailReadyTeller == true && lockAndLoudTeller == true){
            notificationAppear(notificationParagraphBrick, byLanguage("",""));
            titleBrick.style.opacity = "0";
            skipButtonBrick.style.opacity = "0";
            inputAreasBrick.style.opacity = "0";
            actionButtonBrick.style.opacity = "0";
            setTimeout(function(){submit()}, 1000);
        }

        //Emotion and message completed
        else if(emotionSelected == true && messageReady == true && emailReadyTeller == false && lockAndLoudTeller == false){
            titleBrick.textContent = "";
            emojiSelectorBrick.style.opacity = 0;
            notificationAppear(notificationParagraphBrick, byLanguage("",""));
            emojisBrick.style.transform = "translateY(20px)";
            emojisBrick.style.opacity = "0";
            paragraphBrick.style.opacity = "0";
            actionButtonBrick.style.color = "transparent";
            titleBrick.style.opacity = "0";
            titleBrick.style.display = "block";
            skipButtonBrick.style.display = "block";
            textAreasBrick.style.transform = "translateY(20px)";
            textAreasBrick.style.opacity = "0";
            inputAreasBrick.style.display = "block";
            setTimeout(function(){
                titleBrick.textContent = byLanguage('Please enter your email if you are happy for us to contact you, if not press "skip".','Ingrese su correo si esta de acuerdo en que nos comuniquemos con usted, de lo contrario presione "omitir".');
                emojisBrick.style.display = "none";
                checkEmail();
                fatherBrick.style.height = "220px";
                actionButtonBrick.textContent = byLanguage("SEND","ENVIAR");
                actionButtonBrick.style.color = "white";
                actionButtonBrick.style.backgroundColor = "#CECECE";
                inputAreasBrick.style.top = "120px";
                inputAreasBrick.style.opacity = "1";
                textAreasBrick.style.display = "none";
                skipButtonBrick.style.opacity = "1";
                titleBrick.style.opacity = "1";
            }, 300);
        }
    });

    //Listen email input
    inputAreaBrick.addEventListener("input", function() {    
        checkEmail()    
    });
}
/* Primer dìa, por la mañana cojo una copa de vidrio, la lleno con agua y la pongo al sol. Por la tarde tomo
de la copa de acuerdo a cuanto sienta he de beber de ella.

Por la mañana en el primer día cojo una copa de vidrio con agua y la pongo al sol. Por la tarde tomo
del vaso de acuerdo a cuanto sienta he de beber de ella.

Por la mañana el primer día cojo una copa de vidrio con agua y la pongo al sol. Por la tarde tomo
del vaso de acuerdo sienta he de beber de ella.

El primer día por la mañana coloco una copa de vidrio con agua al sol y tomo de acuerdo sienta
he de beber de ella. Por la tarde. */



