document.getElementById("book-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields");
        return;
    }

    const tableBody = document.getElementById("dataTable")
        .getElementsByTagName("tbody")[0];

    const newRow = tableBody.insertRow();

    newRow.insertCell().textContent = title;
    newRow.insertCell().textContent = author;
    newRow.insertCell().textContent = isbn;

    const deleteCell = newRow.insertCell();
    const delete = document.createElement("button");
    delete.textContent = "X";
    delete.style.color = "red";

    deleteCell.appendChild(delete);

    delete.addEventListener("click", function () {
        newRow.remove();
    });

    document.getElementById("book-form").reset();
});
