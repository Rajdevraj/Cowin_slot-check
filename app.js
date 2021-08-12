const fetch = require('node-fetch');
const prompt = require('prompt-sy')({
    'fake_val': 'OPTIONAL CONFIG VALUES HERE'
});


const pincode = prompt("Enter the Pin code\r\n");
var date=prompt("enter the Date in DD-MM-YYY Formate\r\n");
if(!isNaN(pincode))
{

function checkResponseStatus(res) {
    if(res.ok){
        return res
    } else {
        throw new Error(`The HTTP status of the reponse: ${res.status} (${res.statusText})`);
    }
}

fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=' +pincode+ '&date=' +date)
    .then(checkResponseStatus)
    .then(res => res.json())
    .then(json =>console.log(json))
    .catch(err => console.log(err))
    }
