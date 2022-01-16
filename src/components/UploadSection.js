import React from 'react'
import { Input } from '@mui/material';
import axios from 'axios';

function UploadSection() {

    const [file, setFile] = React.useState('')

    React.useEffect(() => {
        if (!file) return;
        console.log(file)
    }, [file])

    return (
        <div>
            <Input type="file" value={file} onChange={(e) => setFile(e.target.value)}/>
        </div>
    )
}

export default UploadSection
