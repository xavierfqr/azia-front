import React from 'react'
import { useFormik } from 'formik'
import { Input, Button, Select, MenuItem } from '@mui/material';
import styles from './FormSection.module.css'
import axios from 'axios';

const config = {
    headers: { 'Authorization': `Bearer lJMrftFFv5XArjg91HCoxInRnRPGh16J`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'}
    // Headers: {
    //     'Prediction-Key': `lJMrftFFv5XArjg91HCoxInRnRPGh16J`,
    //     'Content-Type': 'application/json'
    // }
};

function FormSection() {

    const [result, setResult] = React.useState(-1);
    const formik = useFormik({
        initialValues: {
            Age: '',
            Sex: '',
            ChestPainType: '',
            RestingBP: '',
            Cholesterol: '',
            FastingBS: '',
            RestingECG: '',
            MaxHR: '',
            ExerciseAngina: '',
            Oldpeak: '',
            ST_Slope: '',
            HeartDisease: ''
        },
        onSubmit: values => {
            const entries = Object.entries(values);
            const capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
            const capsValues = Object.fromEntries(capsEntries);
            const request = 
            {   "Inputs": {
                    "WebServiceInput0": [
                        capsValues
                    ]
                }
            }
            
            axios.post( 
                'http://fc20a859-00cb-41f5-a5a2-445eccc53548.westeurope.azurecontainer.io/score',
                request,
                config
            ).then(res => setResult(res.data.Results.WebServiceOutput0[0]['Scored Probabilities']))
            .catch(err => console.log('an error occurred : ', err));
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={styles.container}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor='Age'>Age : </label>
                        </td>
                        <td>
                            <Input id="Age" name="Age" onChange={formik.handleChange} value={formik.values.Age}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='Sex'>Sex : </label>
                        </td>
                        <td>
                            <Select name="Sex" onChange={formik.handleChange} value={formik.values.Sex}>
                                <MenuItem selected value="F">F</MenuItem>
                                <MenuItem value="M">M</MenuItem>
                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='ChestPainType'>ChestPainType : </label>
                        </td>
                        <td>
                            <Select name="ChestPainType" onChange={formik.handleChange} value={formik.values.ChestPainType}>
                                <MenuItem value="TA">TA</MenuItem>
                                <MenuItem value="ATA">ATA</MenuItem>
                                <MenuItem value="NAP">NAP</MenuItem>
                                <MenuItem value="ASY">ASY</MenuItem>
                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='RestingBP'>RestingBP : </label>
                        </td>
                        <td>
                            <Input id="RestingBP" name="RestingBP" onChange={formik.handleChange} value={formik.values.RestingBP}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='Cholesterol'>Cholesterol : </label>
                        </td>
                        <td>
                            <Input id="Cholesterol" name="Cholesterol" onChange={formik.handleChange} value={formik.values.Cholesterol}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='FastingBS'>FastingBS : </label>
                        </td>
                        <td>
                            <Select name="FastingBS" onChange={formik.handleChange} value={formik.values.FastingBS}>
                                <MenuItem value="1">{`1 (if FastingBS > 120 mg/dl)`}</MenuItem>
                                <MenuItem value="0">0 (otherwise)</MenuItem>
                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='RestingECG'>RestingECG : </label>
                        </td>
                        <td>
                            <Select name="RestingECG" onChange={formik.handleChange} value={formik.values.RestingECG}>
                                <MenuItem value="Normal">Normal</MenuItem>
                                <MenuItem value="ST">ST</MenuItem>
                                <MenuItem value="LVH">LVH</MenuItem>
                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='MaxHR'>MaxHR : </label>
                        </td>
                        <td>
                            <Input id="MaxHR" name="MaxHR" onChange={formik.handleChange} value={formik.values.MaxHR}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='ExerciseAngina'>ExerciseAngina : </label>
                        </td>
                        <td>
                            <Select name="ExerciseAngina" onChange={formik.handleChange} value={formik.values.ExerciseAngina}>
                                <MenuItem value="true">Yes</MenuItem>
                                <MenuItem value="false">No</MenuItem>
                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='Oldpeak'>Oldpeak : </label>
                        </td>
                        <td>
                            <Input id="Oldpeak" name="Oldpeak" onChange={formik.handleChange} value={formik.values.Oldpeak}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='ST_Slope'>ST_Slope : </label>
                        </td>
                        <td>
                            <Select name="ST_Slope" onChange={formik.handleChange} value={formik.values.ST_Slope}>
                                <MenuItem value="Up">upsloping</MenuItem>
                                <MenuItem value="Flat">flat</MenuItem>
                                <MenuItem value="Down">downsloping</MenuItem>
                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='HeartDisease'>HeartDisease : </label>
                        </td>
                        <td>
                            <Select name="HeartDisease" onChange={formik.handleChange} value={formik.values.HeartDisease}>
                                <MenuItem value="1">1 : Heart disease</MenuItem>
                                <MenuItem value="0">0 : Normal</MenuItem>
                            </Select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
            </div>
            <Button type="submit">Submit</Button>

            {result === -1 ? 
                <div>Waiting for results</div> :
                <div>{result > 0.75 ? `Ce patient a de fortes chances d'avoir une maladie cardiovasculaire (> 75%)` : `Ce patient n'est pas a risque`}</div>
            }
        </form>
    )
}

export default FormSection
