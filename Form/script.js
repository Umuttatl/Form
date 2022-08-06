ekle.onclick=function()
{
    if (isim.value != "" && soyisim.value != "" && sifre.value != "" && mail.value != "") 
    {
        let tisim=document.createElement("td");
        let tsoyisim=document.createElement("td");
        let tsifre=document.createElement("td");
        let tmail=document.createElement("td");

        tisim.textContent=isim.value;
        tsoyisim.textContent=soyisim.value;
        tsifre.textContent=sifre.value;
        tmail.textContent=mail.value;

        let tr=document.createElement("tr");

        tr.appendChild(tisim);
        tr.appendChild(tsoyisim);
        tr.appendChild(tsifre);
        tr.appendChild(tmail);

        liste.appendChild(tr);

        isim.value="";
        soyisim.value="";
        sifre.value="";
        mail.value="";
    } 
    else
    {
        alert("Tüm alanları doldurun !");
        return false;
    }
    
}