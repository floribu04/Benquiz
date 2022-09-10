const fullVociDE =["Hallo", "Tschüss", "Haus", "Tisch"];
const FullVociEN =["Hello", "Goodby", "House", "Table"];
let vociDe = [];
let vociEn = [];
let Wort;
let Auswahl;
let ordre;

//Cookie:

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie(cname) {
    let cname = getCookie(cname);
    if (cname != "") {
      return false
    } else {
      return true
      }
    }
  }


function store(ID){
    setCookie(VociID, ID, 365)
    return "store"
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

function choosewort(){
    Wort = getRandomInt(0,vociDe.length) //das Wort das Abgefragt wird
    Auswahl = [getRandomInt(0,vociDe.length), getRandomInt(0,vociDe.length), getRandomInt(0,vociDe.length)] //Die drei falschen zur auswahl stehenden Antwort
    ordre = getRandomInt(1,4)//position der richtigen Antwort.
}

