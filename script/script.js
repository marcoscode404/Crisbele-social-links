
const string = "❤ Crisbele Sena ❤"; /* type your text here */
const array = string.split("");
let timer;


function frameLooper () {
  if (array.length > 0) {
    document.getElementById("text").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
      }
  loopTimer = setTimeout('frameLooper()',150); /* change 70 for speed */

}







const stringr = "Autora “Desenhe com as palavras. Co-autora “Vozes Curativas. ❤ É sobre conectar-se ao coração dos filhos e ajudá-los no rendimento escolar. vozescurativas.com.br"; /* type your text here */
const arrayr = stringr.split("");
let timerr;


function frameLooperr () {
  if (arrayr.length > 0) {
    document.getElementById("description").innerHTML += arrayr.shift();
  } else {
    clearTimeout(timerr);
      }
  loopTimer = setTimeout('frameLooperr()',30); /* change 70 for speed */

}

frameLooper();
frameLooperr();





