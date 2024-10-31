// const URL = 'http://localhost:5000/api/v1/';

// async function getNotes() {
    
//     const response = await fetch(`${URL}/notes/2`);
//     const result = await response.json();
//     console.log(result);
//   }

// getNotes();

fetch('http://vrn-1587:5000/api/v1/notes/3')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log('data', data)
  })


  