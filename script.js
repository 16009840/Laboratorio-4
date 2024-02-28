function Limites(){
    var limiteInferior = parseInt(document.getElementById("Limite_Inferior").value);
    var limiteSuperior = parseInt(document.getElementById("Limite_Superior").value);

    if (limiteInferior >= limiteSuperior){
        alert("El limite inferior debe ser menor que el limite superior");
    } else {
        alert("Los limites son validos")
    }
}
