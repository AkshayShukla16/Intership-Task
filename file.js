
function readFileAsync(filename, callback) {
  setTimeout(() => {
    if (filename === 'example.txt') {
      
      const fileContents = 'This is the content of the file.';
      callback(null, fileContents); 
    } else {
      // Simulated file not found
      const error = new Error('File not found');
      callback(error, null); // Call the callback with an error
    }
  }, 1000); // Simulating a 1-second delay
}


readFileAsync('example.txt', (error, content) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log(`File content: ${content}`);
  }
});

// Usage: Attempt to read a non-existent file and handle the result using a callback
readFileAsync('nonexistent.txt', (error, content) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log(`File content: ${content}`);
  }
});
