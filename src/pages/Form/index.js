import { useState, useEffect } from 'react';
import { Grid, TextField, Select, MenuItem  } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { validateEmail } from '../../helpers/validations';
import { getCountryData, getStateData } from '../../services/api';
import TextFieldBox from '../../components/TextFieldBox';
import "../../App.css";

const Form = () => {

    const [name, setName] = useState("");
    const [dob, setDob] = useState("0");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState({id: -1, country: ""});
    const [state, setState] = useState({id: -1, countryId: -1, state: ""});
    const [countries, setCountries] = useState([]);
    const [stateList, setStateList] = useState([]);
  
    const handleSubmitClick = () => {
      const err = {};
      if (name.length<4 || name.length>10) {
        err["Name"] = {"error": "Length should be between 4-10 characters"};
      }
      if (email.length>0 && !validateEmail(email)) {
        err["Email"] = {"error": "Invalid Email format"};
      }
      if (country.length === 0) {
        err["Country"] = {"error": "Country is required field"};
      }
      if (state.length === 0) {
        err["State"] = {"error": "State is required field"};
      }
      if (contact.length < 10) {
        err["Contact"] = {"error": "Length should be 10"};
      }
      else if (!/^\d+$/.test(contact)) {
        err["Contact"] = {"error": "Contact should contains only digits"};
      }

      if(Object.keys(err).length === 0){
        err["Success"] = "All fields are valid";
      }
      window.parent.postMessage({ message: "getAppData", value: err }, "*");
    }
  
    const loadData = async () => {
      const countryRes = await getCountryData();
      const stateRes = await getStateData();
      setCountries(countryRes.data);
      setStateList(stateRes.data);
    };
  
    useEffect(() => {
      loadData();
    }, []); 
  
    return (
      <div className="Apps">
        <div className="send">
          Can you please provide your personal details? 
        </div>
        <br/>
        <div>
          <Grid container>
            <Grid
              container
              xs={12}
            >
              <Grid
                xs={12}
                className="form-field"
              >
                <div className="textholder">Name</div>
                <TextFieldBox value={name} setValue={setName} />
              </Grid>
              <Grid
                xs={12}
                className="form-field"
              >
                <div className="textholder">Date of Birth</div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    value={dob}
                    onChange={(newValue) => {
                    setDob(newValue);
                    }}
                    renderInput={(params) => <TextField id="outlined-basic" variant="outlined" fullWidth style={{ backgroundColor: 'white' }} {...params} />}
                />
                </LocalizationProvider>
              </Grid>
              <Grid
                xs={12}
                className="form-field"
              >
                <div className="textholder">Contact Number</div>
                <TextFieldBox value={contact} setValue={setContact} />
              </Grid>
              <Grid
                xs={12}
                className="form-field"
              >
                <div className="textholder">Country</div>
                <Select
                    className="dropdown-container"
                    value={country.country}
                    onChange={e => setCountry(countries.find((item) => item.country === e.target.value))}
                >
                    {countries.map((item) => {
                        return(
                          <MenuItem key={item.id} value={item.country}>{item.country}</MenuItem>  
                        )
                    })}
                </Select>
              </Grid>
              <Grid
                xs={12}
                className="form-field"
              >
                <div className="textholder">State</div>
                <Select
                    className="dropdown-container"
                    value={state.state}
                    onChange={e => setState(stateList.find((item) => item.state === e.target.value))}
                >
                    {stateList.filter((item) => item.countryId === country.id).map((item) => {
                        return(
                          <MenuItem key={item.id} value={item.state}>{item.state}</MenuItem>  
                        )
                    })}
                </Select>
              </Grid>
              <Grid
                xs={12}
                className="form-field"
              >
                <div className="textholder">Your email</div>
                <TextFieldBox value={email} setValue={setEmail} />
              </Grid>
              <Grid
                container
                xs={12}
                style={{ marginRight: '20px' }}
              >
                <Grid
                  xs={4}
                  md={2}
                  container
                  justifyContent="center"
                  alignItems="center"
                  className="button"
                  onClick={handleSubmitClick}
                >
                  Submit
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
}

export default Form