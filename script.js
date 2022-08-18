let tid
let tfname;
let tsurname;
let tpassword;
let tmail;
let check;
let checkbox;
// let tdelete;
// let deletebtn;

add.onclick=function()
{
    if (id.value != "" && fname.value != "" && surname.value != "" && password.value != "" && mail.value != "") 
    {
        tid=document.createElement("td");
        tfname=document.createElement("td");
        tsurname=document.createElement("td");
        tpassword=document.createElement("td");
        tmail=document.createElement("td");
        check=document.createElement("td"); 
        checkbox=document.createElement("checkbox");
        // tdelete = document.createElement("td"); 
        // deletebtn =document.createElement("button");
        
        tid.textContent=id.value;
        tfname.textContent=fname.value;
        tsurname.textContent=surname.value;
        tpassword.textContent=password.value;
        tmail.textContent=mail.value;
        //checkbox.textContent=id;
        check.appendChild(checkbox);
        // deletebtn.textContent="delete";
        // tdelete.appendChild(deletebtn);

        let tr=document.createElement("tr");

        tr.appendChild(tid);
        tr.appendChild(tfname);
        tr.appendChild(tsurname);
        tr.appendChild(tpassword);
        tr.appendChild(tmail);
        tr.appendChild(check);
        // tr.appendChild(tdelete);

        list.appendChild(tr);

        id.value="";
        fname.value="";
        surname.value="";
        password.value="";
        mail.value="";
        
        // deletebtn.onclick=function(e){
        // list.removeChild(this.parentNode.parentNode);
        // }
    } 
    else
    {
        alert("Fill in all fields !");
        return false;
    }
}
fdelete.onclick=function()
{
    // var e = document.getElementById("list");
    // e.removeChild();
    // list.removeChild();
}
