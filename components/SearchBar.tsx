import { CountriesData } from "@/models/Countries";
import { useTheme } from '@mui/material/styles';
import { IconButton, Box, SelectChangeEvent, TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { Clear } from "@mui/icons-material";
import { useRouter } from "next/router";


const SearchBar = ({ countries, setCountriesDisplayArray,countriesDisplayArray }:any) => {

  const theme = useTheme();
  const router = useRouter();
  const [value, setValue] = useState("");




  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim() ?? '';

    router.push({
      pathname: "/",
      query: { ...router.query, q: searchQuery.toLowerCase() },
      });
       
    };

      
    

      
    const handleClearClick = () => {
      setValue("");
      router.push({
        pathname: "/",
        query: { ...router.query, q: "" },
        });
  
      };

    return ( 
        <>
        <Box
            onSubmit={handleSubmit}

            component="form"
            noValidate
            autoComplete="off"
            >
        <TextField  
        name="searchQuery" 
        placeholder="Search for a country..."
        onChange={(newValue) => {
          setValue(newValue.target.value);
        }}
      
        value={value}
        InputProps={{
          endAdornment: (
      <IconButton
        sx={{ visibility: value ? "visible" : "hidden" }}
        onClick={handleClearClick}
      >
        <Clear />
      </IconButton>
          ),
        }}
      

         

        sx={{
                width:"450px",
                "& .MuiInputBase-root": {
                    "& input": {
                        textAlign: "left",
                        
                    }},
                '& .MuiOutlinedInput-root': {    
                        backgroundColor:"white",
                        boxShadow:"0px 5px 5px 1px rgba(0,0,0,0.02),0px 5px 5px 1px rgba(0,0,0,0.02),0px 5px 5px 1px rgba(0,0,0,0.02)"
                    },
                    [theme.breakpoints.down('lg')]: {
                      width:"100%",
                      pb:"45px"
                    },
                
                
                    
        }}

        
        
        />




        </Box>
        </>
     );
} 
 
export default SearchBar;