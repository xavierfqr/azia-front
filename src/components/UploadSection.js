import React from 'react'
import { Input } from '@mui/material';
import axios from 'axios';

const configForFile = {
    headers: {
        'Prediction-Key': '09b3429243b5486aadf5794f653d867c',
        'Content-Type': 'application/octet-stream',
        'Access-Control-Allow-Origin': '*',
    }
};

const configForUrl = {
    headers: {
        'Prediction-Key': '09b3429243b5486aadf5794f653d867c',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
}

function UploadSection() {

    const [file, setFile] = React.useState('');
    const [result, setResult] = React.useState('');
    const [URL, setURL] = React.useState('');

    const handleFile = () => {
        if (!file)
            return;

        const fileReader = new FileReader()
        fileReader.readAsArrayBuffer(file)

        fileReader.onload = (e) => {
            const file = fileReader.result
            console.log(file)

            axios.post(
                'https://remy94550-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/002ee240-3216-4f78-9203-fad70657e559/classify/iterations/Iteration2/image',
                file,
                configForFile
            ).then(res => {
                console.log(res.data.predictions)
                const predictions = res.data.predictions;

                var withMask;
                if (predictions[0].tagName === "with_mask")
                    withMask = 0;
                else
                    withMask = 1;

                if (res.data.predictions[withMask].probability > 0.5)
                    setResult("Cette personne a un masque.");
                else
                    setResult("Cette personne n'a pas de masque.")
            })
            .catch(err => console.log('an error occurred : ', err));
        }
    }

    const handleChange = (event) => {
        setURL(event.target.value)
    }

    const handleURL = () => {
        axios.post(
            'https://remy94550-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/002ee240-3216-4f78-9203-fad70657e559/classify/iterations/Iteration2/url',
            {"Url": URL},
            configForUrl
        ).then(res => {
            console.log(res.data.predictions)
            const predictions = res.data.predictions;

            var withMask;
            if (predictions[0].tagName === "with_mask")
                withMask = 0;
            else
                withMask = 1;

            if (res.data.predictions[withMask].probability > 0.5)
                setResult("Cette personne a un masque.");
            else
                setResult("Cette personne n'a pas de masque.")
        })
        .catch(err => console.log('an error occurred : ', err));
    }

    return (
        <div>
            <div>
                {result}
            </div>
            <div>
                <Input type="file" onChange={(e) => {console.log(e); setFile(e.target.files[0])}}/>
                <button onClick={handleFile}>Analyse file</button>
            </div>
            
            <input type="text" value={URL} onChange={handleChange}>
            </input>
            <button onClick={handleURL}>Envoyer le lien</button>
        </div>
    )
}

export default UploadSection
