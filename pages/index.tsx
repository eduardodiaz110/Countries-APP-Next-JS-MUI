import { CountriesData } from "@/models/Countries"
import { GetServerSideProps } from "next"
import CountriesGrid from "../components/CountriesGrid"
import { Container, Grid, useTheme } from "@mui/material";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import { useEffect, useState } from "react";



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

// function logCountriesData(countriesData: CountriesData[]) {
//   console.log(countriesData);
// }


// function logCountriesData(countriesData: CountriesData[]) {
//   console.log(countriesData);
// }


export default function Home({countriesData}:HomePageProps) {

const theme= useTheme();
  const [countries, setCountries] = useState<CountriesData[]>(countriesData);

  const [countriesDisplayArray, setCountriesDisplayArray] = useState<CountriesData[]>(countriesData);

  // logCountriesData(countries);


  // const [countriesDataChange, setCountriesDataChange] = useState<CountriesData[]>(countriesData);


  // const handleCountriesChange = async ({country}:any) => {
  //   await setCountries(country); // Esperar a que se actualice el estado
  //         }
  


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
            <FilterBar countries={countries} countriesDisplayArray={countriesDisplayArray} setCountriesDisplayArray={setCountriesDisplayArray}/>
          </Grid>


        </Grid>
        <CountriesGrid countries={countriesDisplayArray}/>
      </main>
    </>
  )
}
