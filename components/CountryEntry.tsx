import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CountriesData } from "../models/Countries";
import { useTheme } from '@mui/material/styles';
import { themePalette } from "../config/theme.config";
import Link from "next/link";




interface CountryEntryProps{
    country: CountriesData,
}


const CountryEntry = ({country}:CountryEntryProps) => {

    const theme = useTheme();

    return(
        <>
        <Link href={`/countries/${country.cca3.toLocaleLowerCase()}`}>
        <Card >
            <CardMedia
            sx={{ height: 170,
                [theme.breakpoints.down('lg')]: {
                    height: 250
                  },
            }}
            image={country.flags.png}
            title={country.name.common}
            />
            <CardContent sx={{
            textAlign:"left",
            }}>
                <Typography variant="h6" sx={{
                    pb:"15px"
                }}>
                  <strong>{country.name.common}</strong>
                </Typography>
                <Typography variant="body1">
                  <span style={{fontWeight:"600"}}>Population: </span>{country.population.toLocaleString()}
                </Typography>
                <Typography variant="body1">
                <span style={{fontWeight:"600"}}>Region: </span>{country.region}
                </Typography>
                <Typography variant="body1">
                <span style={{fontWeight:"600"}}>Capital: </span>{country.capital}
                </Typography>
            </CardContent>

        </Card>
        </Link>




        </>
        
    )

  };
  
  export default CountryEntry;
  

