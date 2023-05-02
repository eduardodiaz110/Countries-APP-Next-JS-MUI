import { CountriesData } from "@/models/Countries";
import { Container, Grid } from "@mui/material";
import CountryEntry from "../components/CountryEntry"

interface CountriesGridProps{
    countries: CountriesData[],
}

const CountriesDataGrid = ({countries}:CountriesGridProps) =>{
    return (
      <>
        <Grid container spacing={4} sx={{}}>
          {countries.map((country) => (
            <Grid item xs={12} md={3} lg={3} xl={3} key={country.name.common} sx={{}}>
              <CountryEntry country={country}/>
            </Grid>
          ))}
        </Grid>
      </>
      );

    }
    
export default CountriesDataGrid;
