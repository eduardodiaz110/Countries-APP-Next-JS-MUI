
// import { CountriesData } from "@/models/Countries";
// import { Container, Grid } from "@mui/material";
// import CountryEntry from "../components/CountryEntry";
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { useEffect, useMemo, useState } from 'react';

// interface CountriesGridProps{
//   countriesDisplayArray: CountriesData[],
//   countries: CountriesData[],
// }

// const styleLoader ={
//   padding: "30px",
//   // textAlign: "center"
// }

// const CountriesDataGrid = ({countries, countriesDisplayArray}:CountriesGridProps) =>{

//   const [dataSource, setDataSource] = useState<CountriesData[]>(countriesDisplayArray.slice(0, 20));


//   const [hasMore, setHasMore] = useState(true);

//     // Se ejecuta cada vez que se actualiza countriesDisplayArray
//     useEffect(() => {
//       // Actualiza el estado de `dataSource` con la nueva información
//       setDataSource(countriesDisplayArray.slice(0, 20));
//     }, [countriesDisplayArray]);
  
  

//   const fetchMoreData = () => {
//     if (dataSource.length >= countriesDisplayArray.length) {
//       console.log(countriesDisplayArray.length  )

//       console.log(dataSource.length)

//       setHasMore(false);
//       return;
//     }

//     setTimeout(()=>{
//       // Añade 20 objetos adicionales al estado de `dataSource`
//       const newDataSource = countriesDisplayArray.slice(0, dataSource.length + 20);
//       setDataSource(newDataSource);
//     }, 2000)
//   };

//   return (
//     <InfiniteScroll
//       dataLength={dataSource.length}
//       next={fetchMoreData}
//       hasMore={hasMore}
//       loader={<div style={styleLoader}><h4>Loading...</h4></div>}
//       endMessage={
//         <div style={styleLoader}>
//           <b>Yay! You have seen it all</b>
//         </div>
//       }
//     >
//       <Grid container spacing={4}>
//         {dataSource.map((country) => (
//           <Grid item xs={12} md={3} lg={3} xl={3} key={country.name.common}>
//             <CountryEntry country={country}/>
//           </Grid>
//         ))}
//       </Grid>
//     </InfiniteScroll>
//   );
// };

// export default CountriesDataGrid;

import { CountriesData } from "@/models/Countries";
import { Container, Grid } from "@mui/material";
import CountryEntry from "../components/CountryEntry";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';

interface CountriesGridProps{
  countriesDisplayArray: CountriesData[],
  countries: CountriesData[],
}

const styleLoader ={
  padding: "30px",
  // textAlign: "center"
}

const CountriesDataGrid = ({countries, countriesDisplayArray}:CountriesGridProps) =>{
  // console.log(countriesDisplayArray)

  const [dataSource, setDataSource] = useState<CountriesData[]>(countriesDisplayArray.slice(0, 20));
  const [hasMore, setHasMore] = useState(true);

  // console.log(dataSource)

  useEffect(() => {
    setDataSource(countriesDisplayArray.slice(0, 20));
    setHasMore(true);
  }, [countriesDisplayArray]);


  const fetchMoreData = () => {
    const newLength = dataSource.length + 20;
    if (newLength >= countriesDisplayArray.length) {
      setHasMore(false);
    }

    setTimeout(()=>{
      const newDataSource = countriesDisplayArray.slice(0, newLength);
      setDataSource(newDataSource);
    }, 2000)
  };


  return (
    <InfiniteScroll
      dataLength={dataSource.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<div style={styleLoader}><h4>Loading...</h4></div>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Grid container spacing={4}>
        {dataSource.map((country) => (
          <Grid item xs={12} md={3} lg={3} xl={3} key={country.name.common}>
            <CountryEntry country={country}/>
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default CountriesDataGrid;
