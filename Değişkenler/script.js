var ad=prompt("Adınızı Giriniz: ")
var ogrno =prompt("Öğrenci numaranızı giriniz.")
var cinsiyet= prompt("Cinsiyetinizi giriniz: "); //erkek : true kadın:false
var ders=prompt("Dersi Giriniz:")
var not1= prompt("ilk notunuzu giriniz: ")
var not2=prompt("ikinci notunuzu giriniz: ")
var ortalama = (Number(not1) +Number(not2))/2;

console.log(ogrno + " Numaralı " + ad + "("+cinsiyet+")" + " İsimli Öğrencinin " + ders + " " + " dersinden aldığı not ortalaması " + ortalama);