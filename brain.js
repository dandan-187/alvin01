function sortTable(n) {
    let table = document.getElementById("inventoryTable");
    let rows = Array.from(table.rows).slice(1);
    let isAscending = table.getAttribute(`data-sort-${n}`) === "asc";
    
    rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[n].innerText.trim();
        let cellB = rowB.cells[n].innerText.trim();

        if (!isNaN(cellA) && !isNaN(cellB)) {
            return isAscending ? cellA - cellB : cellB - cellA;
        }

        return isAscending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });

    table.setAttribute(`data-sort-${n}`, isAscending ? "desc" : "asc");

    rows.forEach(row => table.appendChild(row));
}
