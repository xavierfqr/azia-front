const axios = require('axios')


const config = {
    headers: { Authorization: `Bearer lJMrftFFv5XArjg91HCoxInRnRPGh16J`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' }
    // Headers: {
    //     'Prediction-Key': `lJMrftFFv5XArjg91HCoxInRnRPGh16J`,
    //     'Content-Type': 'application/json'
    // }
};

const data = {
    "Inputs": {
        "WebServiceInput0": [
            {
                "Age": "60",
                "Sex": "M",
                "ChestPainType": "ASY",
                "RestingBP": "140",
                "Cholesterol": "289",
                "FastingBS": "0",
                "RestingECG": "Normal",
                "MaxHR": "172",
                "ExerciseAngina": "false",
                "Oldpeak": "0",
                "ST_Slope": "Up",
                "HeartDisease": "0"
            }
        ]
    }
}

// const options = {
//   hostname: 'fc20a859-00cb-41f5-a5a2-445eccc53548.westeurope.azurecontainer.io',
//   port: 443,
//   path: '/score',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer lJMrftFFv5XArjg91HCoxInRnRPGh16J',
//   }
// }

axios.post( 
    'http://fc20a859-00cb-41f5-a5a2-445eccc53548.westeurope.azurecontainer.io/score',
    data,
    config
).then(res => console.log(res.data.Results)).catch(console.log);
