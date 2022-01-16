import React from 'react'
import { Input } from '@mui/material';
import axios from 'axios';

const config = {
    headers: {
        'Prediction-Key': '09b3429243b5486aadf5794f653d867c',
        'Content-Type': 'application/octet-stream',
        'Access-Control-Allow-Origin': '*',
    }
};

function UploadSection() {

    const [file, setFile] = React.useState('')

    const handleFile = () => {
        if (!file) return;
        const fileReader = new FileReader()
        fileReader.readAsArrayBuffer(file)

        fileReader.onload = (e) => {
            const file = fileReader.result
            console.log(file)

            axios.post(
                'https://remy94550-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/002ee240-3216-4f78-9203-fad70657e559/classify/iterations/Iteration2/image',
                file,
                config
            ).then(res => console.log(res.data))
            .catch(err => console.log('an error occurred : ', err));
        }
    }

    return (
        <div>
            <Input type="file" onChange={(e) => {console.log(e); setFile(e.target.files[0])}}/>
            <button onClick={handleFile}>Analyse file</button>
        </div>
    )
}

export default UploadSection
