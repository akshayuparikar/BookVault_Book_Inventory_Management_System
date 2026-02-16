// RENDER
function renderProducts(data) {
    let table = "";
    let cards = "";

    data.forEach(p => {
        // Support both snake_case and camelCase
        const stock = p.stockQuantity || p.stock_quantity;
        const reorder = p.reorderLevel || p.reorder_level;

        let lowStock = stock <= reorder;

        table += `
        <tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>₹${p.price}</td>
            <td>${stock}</td>
            <td>${reorder}</td>
        </tr>`;

        cards += `
        <div class="card ${lowStock ? 'low' : ''}">
            <h4>${p.name}</h4>
            <p>Price: ₹${p.price}</p>
            <p>Stock: ${stock}</p>
            <p>Status: ${lowStock ? 'LOW STOCK ' : 'OK'}</p>
        </div>`;
    });

    document.getElementById("productsTable").innerHTML = table;
    document.getElementById("cards").innerHTML = cards;
}
