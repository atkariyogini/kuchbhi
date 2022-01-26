const api_url = "https://myflaskyogini2.herokuapp.com/"

function loadData(records = []) {
        var table_data = "";
        for(let i=0; i<records.length; i++) {
                table_data += `<tr>`;

                table_data += `<td>${records[i][0]}</td>`;
                table_data += `<td>${records[i][1]}</td>`;
                table_data += `<td>${records[i][2]}</td>`;

                table_data += `<td>${records[i][3]}</td>`;
                table_data += `<td>`;
                table_data += `<a href="edit.html?id=${records[i][0]}"><button class="btn btn-primary">Edit</button></a>`;
                table_data += '&nbsp;&nbsp;';
                table_data += `<button class="btn btn-danger" onclick=deleteData('${records[i][0]}')>Delete</button>`;
                table_data += `</td>`;
                table_data += `</tr>`;
        }
        console.log(table_data);
        document.getElementById("tbody").innerHTML = table_data;
}

function getData() {
        alert("Hello World");
        fetch(api_url)
        .then((response) => response.json())
        .then((data) => {

                console.table(data);
                loadData(data);
        });
}


