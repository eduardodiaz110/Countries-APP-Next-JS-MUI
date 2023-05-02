import { CountriesData } from "@/models/Countries";
import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import CountryEntry from "../components/CountryEntry"
import Link from "next/link";

interface CountriesGridProps{
    countries: CountriesData[],
}

const CountryPage = ({countries}:CountriesGridProps) =>{
    return (
      <>
        <h1>Hola2</h1>
      </>
      );

    }
    
export default CountryPage;
