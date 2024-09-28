/**
const apiKey = 'Mnqa4T7mGhrUGUCgeXArFAyaGSmHTHng
'
const url = `<api-link>`
*/

const fetchData = async (filePath) => {
    try {
      const response = await fetch(filePath);
      const data = await response.json();
  
      if (data.status === 'OK') {
        const books = data.results.books;
        books.forEach((book) => {
          const bookTitle = book.title;
          const bookAuthor = book.author;
          const bookDescription = book.description;
          const bookAmazonUrl = book.amazon_product_url;
  
          console.log(`Title: ${bookTitle}`);
          console.log(`Author: ${bookAuthor}`);
          console.log(`Description: ${bookDescription}`);
          console.log(`Amazon URL: ${bookAmazonUrl}`);
          console.log('----------------------------');
        });
      } else {
        console.log('Response status is not OK');
      }
    } catch (error) {
      console.log(
        `Failed to fetch, check your apiKey or file path. Error: ${error}`
      );
    }
  };
  
  const filePath = 'mostsbooks.json';
  fetchData(filePath);
  