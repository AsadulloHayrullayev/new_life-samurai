document.querySelector('.add-new-inline').addEventListener('click', function(event) {
    event.preventDefault();
    
    const name = prompt("Enter product name:");
    const description = prompt("Enter product description:");
    const price = prompt("Enter product price:");

    if (name && description && price) {
        const tableBody = document.querySelector('table tbody');
        const newRow = document.createElement('tr');
        
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${description}</td>
            <td>${price}</td>
            <td class="actions">
                <a href="#" class="details">Details</a>
                <a href="#" class="edit">Edit</a>
                <a href="#" class="delete">Delete</a>
            </td>
        `;

        tableBody.appendChild(newRow);
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        event.preventDefault();
        const row = event.target.closest('tr');
        
        if (confirm('Are you sure you want to delete this item?')) {
            row.remove(); 
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit')) {
        event.preventDefault();
        const row = event.target.closest('tr');
        const nameCell = row.children[0];
        const descriptionCell = row.children[1];
        const priceCell = row.children[2];

        const newName = prompt("Edit name:", nameCell.innerText);
        const newDescription = prompt("Edit description:", descriptionCell.innerText);
        const newPrice = prompt("Edit price:", priceCell.innerText);

        if (newName && newDescription && newPrice) {
            nameCell.innerText = newName;
            descriptionCell.innerText = newDescription;
            priceCell.innerText = newPrice;
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('details')) {
        event.preventDefault();
        const row = event.target.closest('tr');
        const name = row.children[0].innerText;
        const description = row.children[1].innerText;
        const price = row.children[2].innerText;

        alert(`Name: ${name}\nDescription: ${description}\nPrice: ${price}`);
    }
});
