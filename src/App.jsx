import { useEffect, useState } from "react";
import Country from "./country/country";

function App() {
  const [country, setCountry] = useState([]);
  const [visitCountry, setVisitCountry] = useState([]);
 
  useEffect(() => {}, []);
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => setCountry(data));

  const handlevisit = (countryName) => {
    setVisitCountry([...visitCountry ,countryName]);
   
  };

  return (
    <>
      <div className="">
       
      <h1 className="text-center">My Visited Country</h1>
       
      <ul className="grid grid-cols-9 container mx-auto">
      
          {visitCountry.map((country, index) => {
            return <div key={index} className="flex flex-col">
               <li >{country.name.common} </li>
               <li ><img src={country.flags.png} alt="" className="img1" /> </li>
            
            </div>
          })}
        </ul>
      </div>

      <div className=" container mx-auto grid grid-cols-4 gap-6">
        {country.map((country, index) => (
          <Country
            key={index}
            countries={country}
            handlevisit={handlevisit}
          ></Country>
        ))}
      </div>
    </>
  );
}

export default App;
