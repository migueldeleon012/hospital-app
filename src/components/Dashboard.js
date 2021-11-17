import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  //all states for the inputs
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('All');
  const [province, setProvince] = useState('All');
  const [region, setRegion] = useState('All');
  //get data from reducer
  const hospitals = useSelector((state) => state.hospitals);
  const cities = useSelector((state) => state.cities);
  const provinces = useSelector((state) => state.provinces);
  const regions = useSelector((state) => state.regions);

  //all functions to set value of input and options
  const onSearchInputChangeHandler = (e) => {
    setSearch(e.target.value);
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

  return (
    <div className="container dashboard">
      <div className="container__head">
        <h2> Hospitals </h2>
        <Link to="/add">Add Hospital</Link>
      </div>
      <div className="container__content">
        <div className="inputs">
          <div className="input">
            <label htmlFor="search">Search</label>
            <input
              type="text"
              id="search"
              value={search}
              onChange={(e) => onSearchInputChangeHandler(e)}
            />
          </div>

          <div className="options">
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
                {cities.map((city, index) => (
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
                {provinces.map((province, index) => (
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
                {regions.map((region, index) => (
                  <option value={region} key={index}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="hospitals">
          <div className="row">
            <p className="row__head">Name</p>
            <p className="row__head">Contact</p>
            <p className="row__head">City</p>
            <p className="row__head">Province</p>
            <p className="row__head">Region</p>
          </div>

          <div className="line"></div>

          {hospitals
            //filter by city
            .filter((hospital) =>
              city === 'All' ? hospital : hospital.city === city
            )
            //filter by province
            .filter((hospital) =>
              province === 'All' ? hospital : hospital.province === province
            )
            //filter by region
            .filter((hospital) =>
              region === 'All' ? hospital : hospital.region === region
            )
            //filter by name toLowerCase for case sensitivity
            .filter((hospital) =>
              hospital.name.toLowerCase().includes(search.toLocaleLowerCase())
            )
            .map((hospital, index) => {
              return (
                <div className="row" key={index}>
                  <p>{hospital.name}</p>
                  <p>{hospital.contact}</p>
                  <p>{hospital.city}</p>
                  <p>{hospital.province}</p>
                  <p>{hospital.region}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
