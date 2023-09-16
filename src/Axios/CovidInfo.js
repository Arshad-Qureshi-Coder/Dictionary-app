import React ,{useState, useEffect}from "react";
import axios from "axios";

const CovidInfo = () => {
    const [countryData, setContryData] = useState([]);
    const [searchCountry, setSearchCountry] = useState('india');

    useEffect(()=>{
         fetchData(searchCountry);
    },[searchCountry]);

    const fetchData = async (country) =>{
        try{
            const response = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);
            setContryData([response.data]);
        }catch(error){
            console.error(error);
        }
    }

    const handleSearch= async ()=>{
        if(searchCountry.trim !== ''){
            try{
                const response = await axios.get(`https://disease.sh/v3/covid-19/countries/${searchCountry}`);
                setContryData([response.data]);
            }catch(error){
                console.error(error);
            }
        }
    };

    return (
        <div style={{margin:'20px'}}>
            <h1>Covid Info Tracker</h1>
            <div>
                <input
                type="text"
                placeholder="Enter the Country Name"
                value={searchCountry}
                onChange={e=> setSearchCountry(e.target.value)}
                />
                <button onClick={handleSearch}>Search </button>
            </div>
            <div>
            
                {
                    countryData.map((country)=>(
                        <div key={country.country}>
                            <h2>{country.country}</h2>
                                <p>Cases: {country.cases}</p>
                                <p>Deaths: {country.deaths}</p>
                                <p>Recovered: {country.recovered}</p>
                                <p>Cases Today: {country.todayCases}</p>
                                <p>Deaths Today: {country.todayDeaths}</p>
                                <p>Recovered Today: {country.todayRecovered}</p>
                        </div>

                    ))
                }
            </div>
        </div>
    )
} 

export default CovidInfo;