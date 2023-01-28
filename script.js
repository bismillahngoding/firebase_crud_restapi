let namaV = document.getElementById("nama");
let nohpV = document.getElementById("nohp");
let tbody = document.getElementById("tbody");
let editnama = document.getElementById("editnama");
let editnohp = document.getElementById("editnohp");
let idV = document.getElementById("id");

getData();
function getData(params) {
  fetch("https://restapi2-585be-default-rtdb.firebaseio.com/bukutelepon.json?auth=izIUyJ3icHSQfCIQhXjFxfdRTJmzVSuion9jhXdU")
    .then((res) => res.json())
    .then((data) => {
      let tabel = "";
      let no = 1;
      let output = Object.entries(data);
      //   console.log(output);
      output.forEach((row) => {
        tabel += `
        <tr>

            <td>${no}</td>
            <td>${row[1].nama}</td>
            <td>${row[1].nohp}</td>
            <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</td>
            <td><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Hapus</td>
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
function editRow(id) {}

//update data
function updateData() {}

//delete data
function deleteRow(id) {}
