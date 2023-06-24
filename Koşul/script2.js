
var dogumyılı=prompt("Doğum yılını giriniz. " );

var yasi= 2020-Number(dogumyılı);

var ehliyetyasi=18;

if(yasi >= ehliyetyasi){
    console.log("Ehliyet Alabilirsiniz.")
}
else{
    console.log("Ehliyet almana " +(ehliyetyasi-yasi) +" yıl var."  );

    
}