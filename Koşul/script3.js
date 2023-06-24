var ay = prompt("hangi Aydayız?");

if(ay == "ocak" || "şubat" || "mart"){
    console.log("kış")
}
else if(ay == "nisan" || "mayıs" || "haziran"){
    console.log("ilkbahar")
}
else if(ay== "temmuz" || "ağustos" || "eylül"){
    console.log("yaz")
}
else if(ay == "ekim" || "kasım" || "aralık"){
    console.log("sonbahar")
}
else{
    console.log("yanlış")
}