function createTable() {
  const rows = prompt("Input number of rows");
  const cols = prompt("Input number of columns");

  const table = document.getElementById("myTable");
  table.innerHTML = ""; // Clear previous content

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i + 1} Column-${j + 1}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}

