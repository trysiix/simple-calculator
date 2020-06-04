var screen = "";

/**
 * Verify if the last item is a number to insert
 * @param {String} item 
 */
function btn(item){
    // Checking last item in the screen
    if ((/^\d+$/.test(screen.substr(screen.length - 1))) || (/^\d+$/.test(item))){
      screen += item;
      document.calculadora.screen.value = screen;
    } else {
      alert("Você não pode colocar mais operando sem digita um valor primeiro!");
    }
} 

function erase(){
    screen = screen.substring(0, screen.length-1);
    document.calculadora.screen.value = screen;
}

function clean(){
    document.calculadora.screen.value = "";
    screen = "";
}

function resolve(){
    var str = screen.replace(/[^-()\d/*+.]/g, '*');
    var res = eval(str);
    screen = res.toString();
    document.calculadora.screen.value = screen;
  }

