import { Select, MenuItem } from '@mui/material';

const Dropdown = (props) => {
    return(
        <Select
            className="dropdown-container"
            value={props.value}
            onChange={e => props.setValue(e.target.value)}
        >
            {props.data.map((item) => {
                return(
                    <MenuItem key={Math.random()} value={"10"}>Ten</MenuItem>
                )
            })}
        </Select>
    )
}

export default Dropdown;