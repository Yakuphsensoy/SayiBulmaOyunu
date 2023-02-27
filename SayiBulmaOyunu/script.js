let tutulanSayı = Math.floor(Math.random()*10)
let yanlısCevap = 0;

console.log(tutulanSayı);
function basma(sayi) {
    document.getElementById("txttahmin").value =sayi;
}
function tahmin()
{
    if(document.getElementById("txttahmin").value == ""){
        document.getElementById("true/false").innerHTML = "ÖNCE BİR SAYI GİRMELİSİN"
    } else {
        if(tutulanSayı == document.getElementById("txttahmin").value) {
            document.getElementById("true/false").innerHTML = "TEBRİKLER :)"
            document.getElementById("txtsonuc").value = `${yanlısCevap} kere yanlış cevap verdin!`
            tutulanSayı = Math.floor(Math.random()*10);
            yanlısCevap = 0;
        } else if(tutulanSayı > document.getElementById("txttahmin").value) {
            document.getElementById("true/false").innerHTML = "DAHA BÜYÜK SAYI DENE";
            document.getElementById("txtsonuc").value = " ";
            yanlısCevap++;
        } else {
            document.getElementById("true/false").innerHTML = "DAHA KÜÇÜK SAYI DENE";
            document.getElementById("txtsonuc").value = "";
            yanlısCevap++;
        }
        
        console.log(yanlısCevap);
        document.getElementById("txttahmin").value = "";
    }

}
