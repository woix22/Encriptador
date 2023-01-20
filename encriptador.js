let validar = (texto) => {
    let acentos = ["á","é","í","ó","ú"];
    for(let i=0; i < texto.length; i++){
        if(acentos.includes(texto[i])){
            return false;         
        }
    }
    return true;
}    
let convertirAMatriz = (texto) => {
    
    let listaCaracteres = [];
    for(let i = 0;i < texto.length; i++){
        listaCaracteres[i] = texto[i];
    }
    return listaCaracteres;
}

let encriptar = (letras) => {
    for(let i = 0; i < letras.length; i++){
            switch(letras[i]){
                case "a":   letras[i] = "ai";
                            break;
                case "e":   letras[i] = "enter";
                            break;
                case "i":   letras[i] = "imes";
                            break;
                case "o":   letras[i] = "ober";
                            break;
                case "u":   letras[i] = "ufat";
                            break;
                default:    break;                
            }        
    }
    return letras;
}

let convertirATexto = (matriz) => {
    let texto = "";
    for(let i = 0; i < matriz.length; i++){
        texto += matriz[i];
    }
    return texto;
}

let desencriptar = (texto) => {
    let claves = ["ai","enter","imes","ober","ufat"];
    let letras = ["a","e","i","o","u"];
    let nuevoTexto = texto;

    for(let i = 0; i < claves.length; i++){
        nuevoTexto = nuevoTexto.replaceAll(claves[i], letras[i])
    }

    return nuevoTexto;    
}

let accion_encriptar = () => {
    let no_encontrado = document.querySelector(".no_encontrado");
    let output = document.querySelector(".output");
    let resultado = document.querySelector(".resultado");
    let copiar = document.querySelector(".btn_copiar");
    let texto = document.querySelector("#ta_texto").value;
    texto = texto.toLowerCase();

    if(validar(texto)){
        let matriz = convertirAMatriz(texto);
        let matriz_enc = encriptar(matriz);
        let texto_enc = convertirATexto(matriz_enc); 
        no_encontrado.style.display = "none";       
        resultado.style.display = "block";
        copiar.style.display = "block";
        output.style.justifyContent = "space-between";
        resultado.innerHTML = texto_enc;

    }else{
        alert("Por favor no incluya acentos");
    }
}

let accion_desencriptar = () => {
    let no_encontrado = document.querySelector(".no_encontrado");
    let output = document.querySelector(".output");
    let resultado = document.querySelector(".resultado");
    let copiar = document.querySelector(".btn_copiar");
    let texto = document.querySelector("#ta_texto").value;

    if(validar(texto)){
        let texto_desenc = desencriptar(texto);
        no_encontrado.style.display = "none";       
        resultado.style.display = "block";
        copiar.style.display = "block";
        output.style.justifyContent = "space-between";
        resultado.innerHTML = texto_desenc;

    }else{
        alert("Por favor no incluya acentos");
    }
}

let copiar = () => {
    let resultado = document.querySelector(".resultado");
    let texto = resultado.innerHTML;  
    navigator.clipboard.writeText(texto);
  }

