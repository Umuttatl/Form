let tfname;
let tsurname;
let tpassword;
let tmail;
let tdelete;
let deletebtn;

add.onclick=function()
{
    if (fname.value != "" && surname.value != "" && password.value != "" && mail.value != "") 
    {
        tfname=document.createElement("td");
        tsurname=document.createElement("td");
        tpassword=document.createElement("td");
        tmail=document.createElement("td");
        tdelete = document.createElement("td"); 
        deletebtn =document.createElement("button");
        
        tfname.textContent=fname.value;
        tsurname.textContent=surname.value;
        tpassword.textContent=password.value;
        tmail.textContent=mail.value;
        deletebtn.textContent="delete";
        tdelete.appendChild(deletebtn);

        let tr=document.createElement("tr");

        tr.appendChild(tfname);
        tr.appendChild(tsurname);
        tr.appendChild(tpassword);
        tr.appendChild(tmail);
        tr.appendChild(tdelete);

        list.appendChild(tr);

        fname.value="";
        surname.value="";
        password.value="";
        mail.value="";
        
    deletebtn.onclick=function(e){
    list.removeChild(this.parentNode.parentNode);
    }
    } 
    else
    {
        alert("Fill in all fields !");
        return false;
    }
       
}

