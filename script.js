let tid;
let tfname;
let tsurname;
let tpassword;
let tmail;

let rowswillbedeleted = [];
//let todos = [];

add.onclick = function () {
  if (checkInputs()) {
    /*
      todos.push(
        {id:id.value,name:fname.value,surname:surname.value,password:password.value,mail:mail.value}
      )
      todos.sort(x=>x.id)

      //Liste elemanı olarak eklenecek, 
      //daha sonra sıralanıp (sort by id) 
      //table child olarak eklenecek.
      //Not: Her defada sıralanacak ve her eklemede döngü ile basılıp bundan önce tablo temizlenecek 
    */

    tid = document.createElement("td");
    tfname = document.createElement("td");
    tsurname = document.createElement("td");
    tpassword = document.createElement("td");
    tmail = document.createElement("td");

    tid.textContent = id.value;
    tfname.textContent = fname.value;
    tsurname.textContent = surname.value;
    tpassword.textContent = password.value;
    tmail.textContent = mail.value;

    let tr = document.createElement("tr");
    tr.id = id.value;

    tr.appendChild(tid);
    tr.appendChild(tfname);
    tr.appendChild(tsurname);
    tr.appendChild(tpassword);
    tr.appendChild(tmail);
    tr.appendChild(mycheckBoxItem(id.value));

    list.appendChild(tr);

    id.value = "";
    fname.value = "";
    surname.value = "";
    password.value = "";
    mail.value = "";
  }
};

fdelete.onclick = function () {
  if (rowswillbedeleted.length == 0) {
    alert("Any row selected");
  } else {
    deleteAllSelectedRows();
  }
};

function deleteAllSelectedRows() {
  for (let i = 0; i < rowswillbedeleted.length; i++) {
    document.getElementById(rowswillbedeleted[i]).remove();
  }
  rowswillbedeleted = [];
}

function mycheckBoxItem(number) {
  let check = document.createElement("input");

  check.type = "checkbox";

  check.onchange = function () {
    if (check.checked) {
      rowswillbedeleted.push(number);
    } else {
      for (var i = 0; i < rowswillbedeleted.length; i++) {
        if (rowswillbedeleted[i] === number) {
          rowswillbedeleted.splice(i, 1);
        }
      }
    }
  };
  return check;
}

function checkInputs() {
  if (
    id.value != "" &&
    fname.value != "" &&
    surname.value != "" &&
    password.value != "" &&
    mail.value != ""
  ) {
    return true;
  } else {
    alert("Fill in all fields !");
    return false;
  }
}
