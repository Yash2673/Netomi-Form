import { TextField } from '@mui/material';

const TextFieldBox = (props) => {
    return(
        <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            style={{ backgroundColor: 'white' }}
            value={props.value}
            onChange={e => props.setValue(e.target.value)}
        />
    )
}

export default TextFieldBox;