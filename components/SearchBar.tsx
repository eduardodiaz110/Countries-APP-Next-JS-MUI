import { CountriesData } from "@/models/Countries";
import { useTheme } from '@mui/material/styles';
import { Box, SelectChangeEvent, TextField } from "@mui/material";
import { FormEvent } from "react";


const SearchBar = ({ countries, setCountriesDisplayArray,countriesDisplayArray }:any) => {

  const theme = useTheme();



    // async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     const formData = new FormData(e.target as HTMLFormElement);
    //     const searchQuery = formData.get("searchQuery")?.toString().trim();
    //     console.log(searchQuery)

    //     if (!searchQuery) { // Verificar si searchQuery está vacío
    //         alert("The search term is empty");
    //         const response = await fetch(`https://restcountries.com/v3.1/all/`);
    //         const countries: CountriesData[] = await response.json();
    //         onCountriesChange(countries); // Actualizar el estado en el componente padre

    //       }
        
        
        

    //     if (searchQuery){
    //         try{
    //             const response = await fetch(`https://restcountries.com/v3.1/name/` + searchQuery);
    //             if (!response.ok) { // Comprobar si la respuesta del servidor no está OK (200-299)
    //                 if (response.status === 404) { // Comprobar si el código de estado es 404
    //                     alert("No countries were found with those keywords");
    //                     const response = await fetch(`https://restcountries.com/v3.1/all/`);
    //                     const countries: CountriesData[] = await response.json();
    //                     onCountriesChange(countries); // Actualizar el estado en el componente padre
    //                 }
    //                 throw new Error(`The request fail: ${response.status}`);
    //               }
    
    //             const countries: CountriesData[] = await response.json();
    //             onCountriesChange(countries); // Actualizar el estado en el componente padre

    //         }
    //     catch(error){
    //         console.error("Error");
    //     } 
        
    // }
    // }

    // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target as HTMLFormElement);
    //     const searchQuery = formData.get("searchQuery")?.toString().trim() ?? 'mex';
    //     console.log(searchQuery);

    //     const filteredCountries = await new Promise((resolve) => {
    //       const filtered = countriesDisplayArray.filter((country:any) => country.name.common.toLowerCase().includes(searchQuery.toLowerCase()));
    //       resolve(filtered);
    //     });
    //     setCountriesDisplayArray(filteredCountries);



    //   };


      const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const searchQuery = formData.get("searchQuery")?.toString().trim() ?? 'mex';
        console.log(searchQuery);
      
        const filteredCountries = countriesDisplayArray.filter((country:any) => country.name.common.toLowerCase().includes(searchQuery.toLowerCase()));
        setCountriesDisplayArray(filteredCountries);
      
        if (!filteredCountries.length) {
          alert('No se encontraron resultados para tu búsqueda.');
          setCountriesDisplayArray(countries)
        }

        if (searchQuery =="") {
          alert('Write something in the serach Bar.');
        }
      };
      

    //   async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    //         let url = `https://restcountries.com/v3.1/all/`;
    //         const response = await fetch(url);      
    //         const countries: CountriesData[] = await response.json();
    //         setCountries(countries); // Actualizar el estado en el componente padr
    // }

      
    

    return ( 
        <>
        <Box
            onSubmit={handleSubmit}

            component="form"
            noValidate
            autoComplete="off"
            >
        <TextField  name="searchQuery" placeholder="Search for a country..." sx={{
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
                
                
            
        }}/>
        </Box>
        </>
     );
}
 
export default SearchBar;