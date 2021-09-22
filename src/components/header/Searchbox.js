// import React from 'react'
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'

// export default function Searchbox() {
//   const items = [
//     {name:"Iphone",key:"iphone"},
//     {name:"Redme", key:"readme"},
//     {name:"Realme", key: "realme"},
//     {name:"Samsung", key: "samsung"},
//   ]

//   const handleOnSearch = (string, results) => {
//     // onSearch will have as the first callback parameter
//     // the string searched and for the second the results.
//     console.log(string, results)
//   }

//   const handleOnHover = (result) => {
//     // the item hovered
//     console.log(result)
//   }

//   const handleOnSelect = (item) => {
//     // the item selected
//     console.log(item)
//   }

//   const handleOnFocus = () => {
//     console.log('Focused')
//   }

//   const formatResult = (item) => {
//     return item;
//    // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
//   }

//   return (
//     <div style={{ width: 300 }}>
//       <ReactSearchAutocomplete
//       freeSolo
//             items={items}
//             onSearch={handleOnSearch}
//             onHover={handleOnHover}
//             onSelect={handleOnSelect}
//             onFocus={handleOnFocus}
//             autoFocus
//             formatResult={formatResult}
//             styling={{
//               borderRadius: "8px"
//             }}
//           />
//     </div>
//   )
// }

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Autocomplete } from '@mui/material';

export default function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 300}}>
      <Autocomplete
          style={{
            backgroundColor:"white"
          }}
        //disablePortal ={true}
        id="free-solo-demo"
        freeSolo
        // InputLabelProps={{shrink: false}}
        // onOpen={e=> {window.scrollTo(0, 1000)}}
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Search Here...." />}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];