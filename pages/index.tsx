import { CountriesData } from "@/models/Countries"
import { GetServerSideProps } from "next"
import CountriesGrid from "../components/CountriesGrid"
import { Container, Grid, useTheme } from "@mui/material";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Search } from "@mui/icons-material";



interface HomePageProps{
  countriesData: CountriesData[],
  
}

export const getServerSideProps: GetServerSideProps<HomePageProps>=async()=>{
  const response = await fetch ("https://restcountries.com/v3.1/all");
  const allCountriesResponse: CountriesData[] = await response.json();
  return{
    props:{countriesData : allCountriesResponse}
    
  }
}




export default function Home({countriesData}:HomePageProps,{handleClearClick}:any) {

  const theme= useTheme();
  const router = useRouter();
  const regionParam = router.query.region;
  const searchParam = router.query.q;


  const [countries, setCountries] = useState<CountriesData[]>(countriesData);
  const [countriesDisplayArray, setCountriesDisplayArray] = useState<CountriesData[]>(countriesData);

  useEffect(() => {
    if (regionParam && searchParam) {
      const region = regionParam.toString().toLowerCase();
      const search = searchParam.toString().toLowerCase();
  
      // console.log("Region: "+region+ " "+"Search: "+ search)
  
      if(region==="all"){
        const filteredCountriesName = countries.filter((country:any) => country.name.common.toLowerCase().includes(search.toLowerCase()));
        setCountriesDisplayArray(filteredCountriesName);
          if(!filteredCountriesName.length){
            alert('No results found.');
            setCountriesDisplayArray(countries)
            }
      }else{
        const filteredCountriesRegion = countries.filter((country:any) => country.region.toLowerCase().includes(region.toLowerCase()));
        const filteredCountriesName = filteredCountriesRegion.filter((country:any) => country.name.common.toLowerCase().includes(search.toLowerCase()));
        if(!filteredCountriesName.length){
                    alert('No results found.');
          setCountriesDisplayArray(countries)  
        }else{
          setCountriesDisplayArray(filteredCountriesName);
        } 
    
  
      }
    } 

    if (!regionParam && !searchParam) {
  
        setCountriesDisplayArray(countries);      
    } 
    
    if ((!regionParam && searchParam) || (searchParam && (regionParam==="")) ) {
      const search = searchParam.toString().toLowerCase();
  
      // console.log("Search "+search)
  
      const filteredCountriesName = countries.filter((country:any) => country.name.common.toLowerCase().includes(search.toLowerCase()));
      setCountriesDisplayArray(filteredCountriesName);
       if (!filteredCountriesName.length) {
          alert('No results found.');
          setCountriesDisplayArray(countries)
        }
  
        if (search =="") {
          alert('Write something in the search Bar.');
        }
  
  
      
    } 
  
    if ((regionParam && !searchParam) || (regionParam && (searchParam==="")) ) {
      const region = regionParam.toString().toLowerCase();
  
      // console.log("Region "+region)
      if(region==="all"){
        setCountriesDisplayArray(countries);
      }else{
      const filteredCountriesRegion = countries.filter((country:any) => country.region.toLowerCase().includes(region.toLowerCase()));
      // console.log(filteredCountriesRegion)
      setCountriesDisplayArray(filteredCountriesRegion);
      }
    } 

    if (((regionParam==="") && (searchParam==="")) ) {
 
      setCountriesDisplayArray(countries);
      
    } 
  }, [regionParam, searchParam, countries, setCountriesDisplayArray]);


  
  
  


  return (
    

    <>
      <main className={"main1"} style={{}}>
        <Grid container sx={{
          mb:"65px",
          mt:"60px",
          [theme.breakpoints.down('lg')]: {
            mb:"55px !important",
            mt:"0px !important",
            },

      }}>
          <Grid item sx={{ flexGrow: 1,}}>
          <SearchBar countries={countries} setCountriesDisplayArray={setCountriesDisplayArray} countriesDisplayArray={countriesDisplayArray}   />
          </Grid>
          <Grid item>
            <FilterBar  handleClearClick={handleClearClick} countries={countries} countriesDisplayArray={countriesDisplayArray} setCountriesDisplayArray={setCountriesDisplayArray}/>
          </Grid>


        </Grid>
        <CountriesGrid countries={countries} countriesDisplayArray={countriesDisplayArray} />
      </main>
    </>
  )
}
