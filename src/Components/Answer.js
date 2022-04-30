import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// import IconButton from '@mui/material/IconButton';
// import Fingerprint from '@mui/icons-material/Fingerprint';


const Answer = (props) => {
    return (
        <Stack direction="column" spacing={2}>
            <Button variant="contained">{props.content}</Button>
            {/* <IconButton aria-label="fingerprint" color="secondary">
                <Fingerprint />
            </IconButton> */}
        </Stack>
    )
}

export default Answer;