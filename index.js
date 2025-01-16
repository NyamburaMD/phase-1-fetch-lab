function fetchBooks() {
  // Sending a fetch request to the API endpoint
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Parsing the response into JSON
    })
    .then(books => {
      renderBooks(books); // Passing the JSON data to renderBooks
    })
    .catch(error => {
      console.error('Error fetching books:', error); // Handling errors
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name; // Rendering each book title
    main.appendChild(h2);
  });
}

// Ensuring the fetchBooks function runs only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

