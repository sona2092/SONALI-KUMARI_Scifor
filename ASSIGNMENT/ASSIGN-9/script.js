function loadProductDataWithAJAX() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dummyjson.com/products/1", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            displayProductData(data);
        }
    };
    xhr.send();
}

function loadUserDataWithFetch() {
    fetch("https://dummyjson.com/users/1")
        .then(response => response.json())
        .then(data => displayUserData(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayProductData(data) {
    const dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = `<h2>Product: ${data.title}</h2>
                             <p>${data.description}</p>
                             <p><strong>Price:</strong> $${data.price}</p>`;
}

function displayUserData(data) {
    const dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = `<h2>User: ${data.firstName} ${data.lastName}</h2>
                             <p><strong>Email:</strong> ${data.email}</p>
                             <p><strong>Age:</strong> ${data.age}</p>`;
}

document.getElementById('ajaxButton').addEventListener('click', loadProductDataWithAJAX);
document.getElementById('fetchButton').addEventListener('click', loadUserDataWithFetch);
