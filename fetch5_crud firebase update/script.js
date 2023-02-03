let namaV = document.getElementById("nama");
let nohpV = document.getElementById("nohp");
let tbody = document.getElementById("tbody");
let editnama = document.getElementById("editnama");
let editnohp = document.getElementById("editnohp");
let idV = document.getElementById("id");
let getid = document.getElementById("getid");

getData();
function getData(params) {
  fetch("https://restapi2-585be-default-rtdb.firebaseio.com/bukutelepon.json?auth=izIUyJ3icHSQfCIQhXjFxfdRTJmzVSuion9jhXdU")
    .then((res) => res.json())
    .then((data) => {
      let tabel = "";
      let no = 1;
      let output = Object.entries(data);
      console.log(output);
      output.forEach((row) => {
        tabel += `
        <tr>

            <td>${no}</td>
            <td>${row[1].nama}</td>
            <td>${row[1].nohp}</td>
            <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editRow('${row[0]}')">Edit</td>
            <td><button type="button" class="btn btn-danger"  onclick="deleteRow('${row[0]}')">Hapus</td>
        </tr>
        `;
        no++;
      });

      tbody.innerHTML = tabel;
    });
}

//Create Data

function createData() {
  let data = {
    nama: namaV.value,
    nohp: nohpV.value
  };
  console.log(data);
  //https://restapi2-585be-default-rtdb.firebaseio.com/bukutelepon.json?auth=izIUyJ3icHSQfCIQhXjFxfdRTJmzVSuion9jhXdU
  fetch("https://restapi2-585be-default-rtdb.firebaseio.com/bukutelepon.json?auth=izIUyJ3icHSQfCIQhXjFxfdRTJmzVSuion9jhXdU", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((data) => {
      getData();
    });

  namaV.value = "";
  nohpV.value = "";
}

//show data edit
function editRow(id) {
  fetch("https://restapi2-585be-default-rtdb.firebaseio.com/bukutelepon/" + id + ".json?auth=izIUyJ3icHSQfCIQhXjFxfdRTJmzVSuion9jhXdU")
    .then((res) => res.json())
    .then((data) => {
      editnama.value = data.nama;
      editnohp.value = data.nohp;
      getid.value = id;
    });
}

//update data
function updateData() {
  let updateData = document.getElementById("updateData");
  let putdata = {
    nama: editnama.value,
    nohp: editnohp.value
  };
  fetch("https://restapi2-585be-default-rtdb.firebaseio.com/bukutelepon/" + getid.value + ".json?auth=izIUyJ3icHSQfCIQhXjFxfdRTJmzVSuion9jhXdU", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(putdata)
  })
    .then((res) => res.json())
    .then((data) => {
      getData();
    });
  updateData.setAttribute("data-bs-dismiss", "modal");
}

//delete data
function deleteRow(id) {
  fetch("https://restapi2-585be-default-rtdb.firebaseio.com/bukutelepon/" + id + ".json?auth=izIUyJ3icHSQfCIQhXjFxfdRTJmzVSuion9jhXdU", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
    .then(() => {
      //alert("data berhasil dihapus");
      getData();
    });
}
