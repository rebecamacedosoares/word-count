function contadorPalavras() {
    var text = document.getElementById("textarea").value;

    text = text.replace(/[^a-zA-Z0-9á-úà-ùâ-ûä-üçÇãõéíóú]/g, ' ');
  
    text = text.trim();
  
    return text.split(/\s+/).length;
}

function calcular(){
    var totalPalavras = contadorPalavras();

    document.getElementById("resultado").innerHTML = "Você tem: " + totalPalavras + " palavras";
}
