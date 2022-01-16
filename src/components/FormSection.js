import React from 'react'
import { useFormik } from 'formik'
import { Input, Button, Select, MenuItem } from '@mui/material';
import styles from './FormSection.module.css'
import axios from 'axios';

const config = {
    headers: { Authorization: `Bearer lJMrftFFv5XArjg91HCoxInRnRPGh16J`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' }
    // Headers: {
    //     'Prediction-Key': `lJMrftFFv5XArjg91HCoxInRnRPGh16J`,
    //     'Content-Type': 'application/json'
    // }
};

function FormSection() {

    const formik = useFormik({
        initialValues: {
            age: '',
            sex: '',
            chestPainType: '',
            restingBP: '',
            cholesterol: '',
            fastingBS: '',
            restingECG: '',
            maxHR: '',
            exerciseAngina: '',
            oldpeak: '',
            ST_Slope: '',
            heartDisease: ''
        },
        onSubmit: values => {
            console.log(values)
            axios.post( 
                'http://fc20a859-00cb-41f5-a5a2-445eccc53548.westeurope.azurecontainer.io/score',
                values,
                config
            ).then(res => console.log(res)).catch(console.log);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={styles.container}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor='age'>Age : </label>
                        </td>
                        <td>
                            <Input id="age" name="age" onChange={formik.handleChange} value={formik.values.age}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='sex'>Sex : </label>
                        </td>
                        <td>
                            <Select name="sex" onChange={formik.handleChange} value={formik.values.sex}>
                                <MenuItem selected value="F">F</MenuItem>
                                <MenuItem value="M">M</MenuItem>
                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='chestPainType'>ChestPainType : </label>
                        </td>
                        <td>
                            <Select name="chestPainType" onChange={formik.handleChange} value={formik.values.chestPainType}>
                                <MenuItem value="TA">TA</MenuItem>
                                <MenuItem value="ATA">ATA</MenuItem>
                                <MenuItem value="NAP">NAP</MenuItem>
                                <MenuItem value="ASY">ASY</MenuItem>
                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='restingBP'>RestingBP : </label>
                        </td>
                        <td>
                            <Input id="restingBP" name="restingBP" onChange={formik.handleChange} value={formik.values.restingBP}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='cholesterol'>Cholesterol : </label>
                        </td>
                        <td>
                            <Input id="cholesterol" name="cholesterol" onChange={formik.handleChange} value={formik.values.cholesterol}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='fastingBS'>FastingBS : </label>
                        </td>
                        <td>
                            <Select name="fastingBS" onChange={formik.handleChange} value={formik.values.fastingBS}>
                                <MenuItem value="1">{`1 (if FastingBS > 120 mg/dl)`}</MenuItem>
                                <MenuItem value="0">0 (otherwise)</MenuItem>
                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='restingECG'>RestingECG : </label>
                        </td>
                        <td>
                            <Select name="restingECG" onChange={formik.handleChange} value={formik.values.restingECG}>
                                <MenuItem value="Normal">Normal</MenuItem>
                                <MenuItem value="ST">ST</MenuItem>
                                <MenuItem value="LVH">LVH</MenuItem>
                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='maxHR'>MaxHR : </label>
                        </td>
                        <td>
                            <Input id="maxHR" name="maxHR" onChange={formik.handleChange} value={formik.values.maxHR}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='exerciseAngina'>ExerciseAngina : </label>
                        </td>
                        <td>
                            <Select name="exerciseAngina" onChange={formik.handleChange} value={formik.values.exerciseAngina}>
                                <MenuItem value="true">Yes</MenuItem>
                                <MenuItem value="false">No</MenuItem>
                            </Select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor='oldpeak'>Oldpeak : </label>
                        </td>
                        <td>
                            <Input id="oldpeak" name="oldpeak" onChange={formik.handleChange} value={formik.values.oldpeak}/>
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
                            <label htmlFor='heartDisease'>HeartDisease : </label>
                        </td>
                        <td>
                            <Select name="heartDisease" onChange={formik.handleChange} value={formik.values.heartDisease}>
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
        </form>
    )
}

export default FormSection
