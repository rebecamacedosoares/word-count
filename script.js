// ## Função Inicial

// function calcular(){
//     var text = document.getElementById("textarea").value;


//     document.getElementById("resultado").innerHTML = "Você tem: " + result + " palavras";
// }

// ## Função Eficiente

// function countWords(text) {

//     text = text.replace(/[^a-zA-Z0-9á-úà-ùâ-ûä-üçÇãõéíóú]/g, ' '); // remove todos os caracteres que não são letras ou números
  
//     text = text.trim(); // remove espaços em branco do início e do fim do texto
  
//     return text.split(/\s+/).length; // divide o texto em palavras e retorna o número de palavras
  
// }

// const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

//                      Sed fringilla enim id nunc molestie mollis. Donec ultrices 

//                      ipsum id sapien pulvinar, eget dapibus nibh placerat. 

//                      Sed blandit semper sapien, vel consequat metus maximus vel.`;



// const wordCount = countWords(loremIpsum);

// console.log(`O texto contém ${wordCount} palavras.`);


// Função Final que eu fiz

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