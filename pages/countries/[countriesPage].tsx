import CountryPage from "@/components/CountriesGrid";
import { CountriesData } from "@/models/Countries";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { Link, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from '@mui/material/styles';



interface CountryName {
  [key: string]: string;
}

interface HomePageProps{
    countriesData: CountriesData[],
  }

  export const countryName: CountryName = {
      "":"None exisiting",
      'AFG': 'Afghanistan',
      'ALA': 'Aland Islands',
      'ALB': 'Albania',
      'DZA': 'Algeria',
      'ASM': 'American Samoa',
      'AND': 'Andorra',
      'AGO': 'Angola',
      'AIA': 'Anguilla',
      'ATA': 'Antarctica',
      'ATG': 'Antigua and Barbuda',
      'ARG': 'Argentina',
      'ARM': 'Armenia',
      'ABW': 'Aruba',
      'AUS': 'Australia',
      'AUT': 'Austria',
      'AZE': 'Azerbaijan',
      'BHS': 'Bahamas',
      'BHR': 'Bahrain',
      'BGD': 'Bangladesh',
      'BRB': 'Barbados',
      "USA" : "United States of America",
      'BLR': 'Belarus',
      'BEL': 'Belgium',
      'BLZ': 'Belize',
      'BEN': 'Benin',
      'BMU': 'Bermuda',
      'BTN': 'Bhutan',
      'BOL': 'Bolivia (Plurinational State of)',
      'BES': 'Bonaire, Sint Eustatius and Saba',
      'BIH': 'Bosnia and Herzegovina',
      'BWA': 'Botswana',
      'BVT': 'Bouvet Island',
      'BRA': 'Brazil',
      'IOT': 'British Indian Ocean Territory',
      'VGB': 'British Virgin Islands',
      'BRN': 'Brunei Darussalam',
      'BGR': 'Bulgaria',
      'BFA': 'Burkina Faso',
      'BDI': 'Burundi',
      'CPV': 'Cabo Verde',
      'KHM': 'Cambodia',
      'CMR': 'Cameroon',
      'CAN': 'Canada',
      'CYM': 'Cayman Islands',
      'CAF': 'Central African Republic',
      'TCD': 'Chad',
      'CHL': 'Chile',
      'CHN': 'China',
      'CXR': 'Christmas Island',
      'CCK': 'Cocos (Keeling) Islands',
      'COL': 'Colombia',
      'COM': 'Comoros',
      'COG': 'Congo',
      'COD': 'Congo (Democratic Republic of the)',
      'COK': 'Cook Islands',
      'CRI': 'Costa Rica',
      'HRV': 'Croatia',
      'CUB': 'Cuba',
      'CUW': 'Curaçao',
      'CYP': 'Cyprus',
      'CZE': 'Czech Republic',
      'DNK': 'Denmark',
      'DJI': 'Djibouti',
      'DMA': 'Dominica',
      'DOM': 'Dominican Republic',
      'ECU': 'Ecuador',
      'EGY': 'Egypt',
      'SLV': 'El Salvador',
      'GNQ': 'Equatorial Guinea',
      'ERI': 'Eritrea',
      'EST': 'Estonia',
      'ETH': 'Ethiopia',
      'FLK': 'Falkland Islands (Malvinas)',
      'FRO': 'Faroe Islands',
      'FJI': 'Fiji',
      'FIN': 'Finland',
      'FRA': 'France',
      'GUF': 'French Guiana',
      'PYF': 'French Polynesia',
      'ATF': 'French Southern Territories',
      'GAB': 'Gabon',
      'GMB': 'Gambia',
      'GEO': 'Georgia',
      'DEU': 'Germany',
      'GHA': 'Ghana',
      'GIB': 'Gibraltar',
      'GRC': 'Greece',
      'GRL': 'Greenland',
      'GRD': 'Grenada',
      'GLP': 'Guadeloupe',
      'GUM': 'Guam',
      'GTM': 'Guatemala',
      'GGY': 'Guernsey',
      'GIN': 'Guinea',
      'GNB': 'Guinea-Bissau',
      'GUY': 'Guyana',
      'HTI': 'Haiti',
      'HMD': 'Heard Island and McDonald Islands',
      'VAT': 'Holy See',
      'HND': 'Honduras',
      'HKG': 'Hong Kong',
      'HUN': 'Hungary',
      'ISL': 'Iceland',
      'IND': 'India',
      'IDN': 'Indonesia',
      'IRN': 'Iran (Islamic Republic of)',
      'IRQ': 'Iraq',
      'IRL': 'Ireland',
      'IMN': 'Isle of Man',
      'ISR': 'Israel',
      'ITA': 'Italy',
      'CIV': "Côte d'Ivoire",
      'JAM': 'Jamaica',
      'JPN': 'Japan',
      'JEY': 'Jersey',
      'JOR': 'Jordan',
      'KAZ': 'Kazakhstan',
      'KEN': 'Kenya',
      'KIR': 'Kiribati',
      'KWT': 'Kuwait',
      'KGZ': 'Kyrgyzstan',
      'LAO': "Lao People's Democratic Republic",
      'LVA': 'Latvia',
      'LBN': 'Lebanon',
      'LSO': 'Lesotho',
      'LBR': 'Liberia',
      'LBY': 'Libya',
      'LIE': 'Liechtenstein',
      'LTU': 'Lithuania',
      'LUX': 'Luxembourg',
      'MAC': 'Macao',
      'MKD': 'North Macedonia',
      'MDG': 'Madagascar',
      'MWI': 'Malawi',
      'MYS': 'Malaysia',
      'MDV': 'Maldives',
      'MLI': 'Mali',
      'MLT': 'Malta',
      'MHL': 'Marshall Islands',
      'MTQ': 'Martinique',
      'MRT': 'Mauritania',
      'MUS': 'Mauritius',
      'MYT': 'Mayotte',
      'MEX': 'Mexico',
      'FSM': 'Micronesia (Federated States of)',
      'MDA': 'Moldova (Republic of)',
      'MCO': 'Monaco',
      'MNG': 'Mongolia',
      'MNE': 'Montenegro',
      'MSR': 'Montserrat',
      'MAR': 'Morocco',
      'MOZ': 'Mozambique',
      'MMR': 'Myanmar',
      'NAM': 'Namibia',
      'NRU': 'Nauru',
      'NPL': 'Nepal',
"NLD": 'Netherlands',
"NCL": 'New Caledonia',
"NZL": 'New Zealand',
"NIC": 'Nicaragua',
"NER": 'Niger',
NGA: 'Nigeria',
NIU: 'Niue',
NFK: 'Norfolk Island',
PRK: 'Korea (Democratic People’s Republic of)',
MNP: 'Northern Mariana Islands',
NOR: 'Norway',
OMN: 'Oman',
PAK: 'Pakistan',
PLW: 'Palau',
PSE: 'Palestine, State of',
PAN: 'Panama',
PNG: 'Papua New Guinea',
PRY: 'Paraguay',
PER: 'Peru',
PHL: 'Philippines',
PCN: 'Pitcairn',
POL: 'Poland',
PRT: 'Portugal',
PRI: 'Puerto Rico',
QAT: 'Qatar',
ROU: 'Romania',
RUS: 'Russian Federation',
RWA: 'Rwanda',
REU: 'Réunion',
BLM: 'Saint Barthélemy',
SHN: 'Saint Helena, Ascension and Tristan da Cunha',
KNA: 'Saint Kitts and Nevis',
LCA: 'Saint Lucia',
MAF: 'Saint Martin (French part)',
SPM: 'Saint Pierre and Miquelon',
VCT: 'Saint Vincent and the Grenadines',
WSM: 'Samoa',
SMR: 'San Marino',
STP: 'Sao Tome and Principe',
SAU: 'Saudi Arabia',
SEN: 'Senegal',
SRB: 'Serbia',
SYC: 'Seychelles',
SLE: 'Sierra Leone',
SGP: 'Singapore',
SXM: 'Sint Maarten (Dutch part)',
SVK: 'Slovakia',
SVN: 'Slovenia',
SLB: 'Solomon Islands',
SOM: 'Somalia',
ZAF: 'South Africa',
SGS: 'South Georgia and the South Sandwich Islands',
KOR: 'Korea (Republic of)',
SSD: 'South Sudan',
ESP: 'Spain',
LKA: 'Sri Lanka',
SDN: 'Sudan',
SUR: 'Suriname',
SJM: "Svalbard and Jan Mayen",

  }



  export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all"); // reemplaza la URL con la de tu API
    const countries = await response.json(); // asume que la respuesta está en formato JSON
    const countriesSlugs = countries.map((country: any) => country.name.common.toLowerCase());

    const paths = countriesSlugs.map((slug: any) => ({ params: { countriesPage: slug } }));

    return {
        paths,
        fallback: false,
    }
}
  
  export const getStaticProps: GetStaticProps<HomePageProps>=async({params})=>{
    const countrySelect = params?.countriesPage?.toString();
    const response = await fetch (`https://restcountries.com/v3.1/name/${countrySelect}`);
    const allCountriesResponse: CountriesData[] = await response.json();

    return{
      props:{countriesData : allCountriesResponse}
      
    }
  }



  

const CountriesPages = ({countriesData}:HomePageProps) => {

  const theme = useTheme();

    return ( 
        <>
          {countriesData.map((country) => (
            <Grid container spacing={4} key={country.name.common} sx={{  mt:"30px", p: "0px !important",
            [theme.breakpoints.down('lg')]: {
              m:"0px !important",
              width:"100%"
            },
            }}>
              <Grid item xs={12} md={6} lg={6} xl={6}  sx={{ 
                p:"0px 30px 0px 0px !important",
                [theme.breakpoints.down('lg')]: {
                  paddingBottom:"30px !important",
                  paddingRight: "0px !important"
                  
                },

                }}>
                <img className="imagen1" style={{                
                  }}  width={"100%"}src={country.flags.svg} alt={country.flags.alt}/>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}  sx={{backgroundColor:"#fff",borderRadius:"30px !important", display:"flex", flexFlow:"column", p:"30px !important"}}>
                <h1 style={{padding:"5px 0px 30px 0px"}}>{country.name.common}</h1>     
                  <Grid container spacing={0} sx={{}}>
                    <Grid item xs={12} md={6} lg={6} xl={6} >
                    <Typography variant="body1" sx={{p: "4px"}}>
                      <span style={{fontWeight:"600"}}>Native Name: </span>{country.name.official}
                    </Typography>
                    <Typography variant="body1" sx={{p:"4px"}}>
                      <span style={{fontWeight:"600"}}>Population: </span>{country.population.toLocaleString()}
                    </Typography>
                    <Typography variant="body1" sx={{p:"4px"}}>
                    <span style={{fontWeight:"600"}}>Region: </span>{country.region}
                    </Typography>
                    <Typography variant="body1" sx={{p:"4px"}}>
                    <span style={{fontWeight:"600"}}>Sub Region: </span>{country.subregion}
                    </Typography>
                    <Typography variant="body1" sx={{p:"4px"}}>
                    <span style={{fontWeight:"600"}}>Capital: </span>{country.capital}
                    </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={6} >
                    <Typography variant="body1" sx={{p:"4px"}}>
                      <span style={{fontWeight:"600"}}>Top Level Domain: </span>{country.tld}
                    </Typography>
                    {/* <Typography variant="body1">
                      <span style={{fontWeight:"600"}}>Currencies: </span>{(Object.keys(country.currencies)[0]) }
                    </Typography> */}
                    <Typography variant="body1" sx={{p:"4px"}}>
                        <span style={{fontWeight:"600"}}>Currencies: </span>
                        {Object.values(country.currencies)
                          .map((currency) => currency.name)
                          .join(", ")}
                    </Typography>
                    <Typography variant="body1" sx={{p:"4px"}}>
                      <span style={{fontWeight:"600"}}>Languages: </span>
                      {Object.values(country.languages).join(", ")}
                    </Typography>        
                      
          
                    </Grid>
                  </Grid>  
                  <Grid item xs={12} md={12} lg={12} xl={12}  sx={{display:"flex", alignItems:"flex-end",width:"100%"}}>
                  <Typography variant="body1" sx={{p:"4px"}}>
                  <span style={{fontWeight:"600"}}>Border: </span>
                  {country.borders ? country.borders.map(border => countryName[border]).join(", ") : <span>No border countries</span>}
                </Typography>
              </Grid>     
              </Grid>
            </Grid>

            
            


         

          ))}
        </>
     );
}
 
export default CountriesPages;