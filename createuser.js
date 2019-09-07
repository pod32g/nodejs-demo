const axios = require('axios');

axios.post('http://localhost:3000/authentication/register/', {
    username: 'pod32g',
    password: '1234'
})

    .then(response => {
        console.log(response);
    })

    .catch(error => {
        console.log(error);
    });