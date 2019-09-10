const axios = require('axios');

axios.post('http://ec2-54-202-194-78.us-west-2.compute.amazonaws.com:3000/authentication/register/', {
    username: 'pod32g',
    password: '1234'
})

    .then(response => {
        console.log(response);
    })

    .catch(error => {
        console.log(error);
    });