import { CountriesData } from "@/models/Countries";
import { NativeSelect, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, OutlinedInput } from "@mui/material";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect } from "react";



const FilterBar = ({ countries, countriesDisplayArray, setCountriesDisplayArray}:any) => {
      

  const router = useRouter();
  const regionParam = router.query.region;
  
  const handleChange = async (e: SelectChangeEvent<string>) => {
    const regionParam = e.target.value.trim();
    
    // update the region query param in the URL
    router.push({
      pathname: "/",
      query: { ...router.query, region: regionParam.toLowerCase() },
    });


  };
      
    
    return ( 
        <>


    <FormControl 
    sx={{width:"200px",
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
        value= {regionParam?.toString().toLowerCase() || 'all'}
        onChange={handleChange}
        
      >
    
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem value={"africa"}>Africa</MenuItem>
        <MenuItem value={"americas"}>Americas</MenuItem>
        <MenuItem value={"asia"}>Asia</MenuItem>
          <MenuItem value={"europe"}>Europe</MenuItem>
        <MenuItem value={"oceania"}>Oceania</MenuItem>
      </Select>
    </FormControl>
       

        </>
     );
}
 
export default FilterBar;