const api_url = "https://myflaskyogini2.herokuapp.com/"
function loadData(rec = []) {
        var table_data = "";
        for(let i=0; i<rec.length; i++) {
                table_data += `<tr>`;

                table_data += `<td>${rec[i][0]}</td>`;
                table_data += `<td>${rec[i][1]}</td>`;
                table_data += `<td>${rec[i][2]}</td>`;

                table_data += `<td>${rec[i][3]}</td>`;
                table_data += `</tr>`;
        }
        console.log(table_data);
        document.getElementById("tbody").innerHTML = table_data;
}

function getData() {
        //alert("Hello World");
        fetch(api_url)
        .then((response) => response.json())
        .then((data) => {

                console.table(data);
                loadData(data);
        });
}

