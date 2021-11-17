import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Form = () => {
  //all states for the inputs
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [region, setRegion] = useState('');

  //get data from reducer
  const cities = useSelector((state) => state.cities);
  const provinces = useSelector((state) => state.provinces);
  const regions = useSelector((state) => state.regions);

  //initialte useDispatch and useHistory
  const dispatch = useDispatch();
  const history = useHistory();

  //all functions to set value of inputs and options
  const onNameInputChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onContactInputChangeHandler = (e) => {
    setContact(e.target.value);
  };

  const onCityInputChangeHalder = (e) => {
    setCity(e.target.value);
  };

  const onProvinceInputChangeHandler = (e) => {
    setProvince(e.target.value);
  };

  const onRegionInputChangeHandler = (e) => {
    setRegion(e.target.value);
  };

  //add hospital
  const onSubmitFormHandler = (e) => {
    e.preventDefault();

    let addedHospital = {
      name,
      contact,
      city,
      province,
      region,
    };

    if (name === '' || city === '' || province === '' || region === '') {
      alert('please do not leave any input field empty');
    } else {
      dispatch({
        type: 'ADD_HOSPITAL',
        payload: addedHospital,
      });
      history.push('/');
    }
  };

  return (
    <div className="container">
      <div className="container__head">
        <h2>Add Hospital</h2>
        <Link to="/">Go Back</Link>
      </div>
      {/* use onSubmit if there is a database */}
      <form>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => onNameInputChangeHandler(e)}
          />
        </div>
        <div className="input">
          <label htmlFor="contact">Contact Email</label>
          <input
            type="email"
            id="contact"
            value={contact}
            onChange={(e) => onContactInputChangeHandler(e)}
          />
        </div>
        <div className="input">
          <label htmlFor="city">City</label>
          <select
            defaultValue=""
            onChange={(e) => onCityInputChangeHalder(e)}
            id="city"
          >
            <option value="" disabled>
              Select City
            </option>
            {cities
              .filter((item) => item !== 'All')
              .map((city, index) => (
                <option value={city} key={index}>
                  {city}
                </option>
              ))}
          </select>
        </div>

        <div className="input">
          <label htmlFor="province">Province</label>
          <select
            defaultValue=""
            onChange={(e) => onProvinceInputChangeHandler(e)}
            id="province"
          >
            <option value="" disabled>
              Select Province
            </option>
            {provinces
              .filter((item) => item !== 'All')
              .map((province, index) => (
                <option value={province} key={index}>
                  {province}
                </option>
              ))}
          </select>
        </div>

        <div className="input">
          <label htmlFor="region">Region</label>
          <select
            defaultValue=""
            onChange={(e) => onRegionInputChangeHandler(e)}
            id="region"
          >
            <option value="" disabled>
              Select Region
            </option>
            {regions
              .filter((item) => item !== 'All')
              .map((region, index) => (
                <option value={region} key={index}>
                  {region}
                </option>
              ))}
          </select>
        </div>

        <button onClick={(e) => onSubmitFormHandler(e)}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
