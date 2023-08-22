fetch("measures.json")
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    const unities = data; // Now you have the parsed JSON data
    console.log(unities);
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });