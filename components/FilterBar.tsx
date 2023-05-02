import { CountriesData } from "@/models/Countries";
import { NativeSelect, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, OutlinedInput } from "@mui/material";
import { ChangeEvent, FormEvent } from "react";



const FilterBar = ({countries, countriesDisplayArray, setCountriesDisplayArray}:any) => {



    //   async function handleChange(e: SelectChangeEvent<string>) {
    //     const searchQuery = e.target.value.trim();
    //     console.log(searchQuery);

    //     if (searchQuery){
    //       try{
    //         let url = `https://restcountries.com/v3.1/region/` + searchQuery;
    //         if (searchQuery === "All") {
    //           url = "https://restcountries.com/v3.1/all/";
    //         }
    //         const response = await fetch(url);      
    //         const countries: CountriesData[] = await response.json();
    //         onCountriesChange(countries); // Actualizar el estado en el componente padre
      
    //       } catch(error){
    //         console.error("Error");
    //       }         
    //     }

      



    // }
      

async function handleChange(e: SelectChangeEvent<string>) {
  const searchQuery = e.target.value.trim();
  console.log(searchQuery);
  console.log(countries)

  if (searchQuery==="All"){
    setCountriesDisplayArray(countries);
  } else{
  const filteredCountries = await new Promise((resolve) => {
    const filtered = countries.filter((country:any) => country.region.toLowerCase().includes(searchQuery.toLowerCase()));
    resolve(filtered);
  });
  setCountriesDisplayArray(filteredCountries);
}

}
    
      
    
    return ( 
        <>


    <FormControl sx={{width:"200px",
          '& .MuiOutlinedInput-root': {    
          backgroundColor:"white",
          boxShadow:"0px 5px 5px 1px rgba(0,0,0,0.02),0px 5px 5px 1px rgba(0,0,0,0.02),0px 5px 5px 1px rgba(0,0,0,0.02)"
      },
      '& .MuiFormLabel-root': {    
        top:"-12px"    
        },

        }}>
      <InputLabel id="custom-select-label">Filter by Region</InputLabel>
      <Select
        labelId="custom-select-label"
        id="custom-select-label"
        defaultValue= "All"
        onChange={handleChange}
        
      >
    
        <MenuItem value={"All"}>All</MenuItem>
        <MenuItem value={"Africa"}>Africa</MenuItem>
        <MenuItem value={"America"}>America</MenuItem>
        <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
        <MenuItem value={"oceania"}>Oceania</MenuItem>
      </Select>
    </FormControl>
       

        </>
     );
}
 
export default FilterBar;