import React, { useState,useEffect } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useHistory } from "react-router-dom";

export default function Searchbox() {
  const[model,selModel] = useState([])
  let history = useHistory();

  useEffect(() => {
    const items = [
      {name: 'Test-Ujjwal', key: 'dfb8fa56db',variant:["4GB/64GB","8GB/120GB"],color:"#8bc34a"},
      {name: 'Redme', key: 'dfb8fa56db2',variant:["4GB/64GB","8GB/120GB"],color:"#8bc34a"},
      
    ]
    //const items = ["Iphone"]
    async function allBrands(){
        let response = await fetch('http://18.117.91.127/api/method/pastech_app.api.get_all_mobiles', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }})
        //let response = await fetch('someurltoAJsonFile.json');
        let data = await response.json();
        console.log("Data is:  ")
        console.log(data);
       //selModel(data.message)
        selModel(items)
    }
allBrands()
},[])
console.log("model: ",model)
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log("selected:  ",item)
    history.push(`/phone_info/${item.name}`)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return item;
   // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  }

  return (
    <div style={{ width: 300 }}>
      <ReactSearchAutocomplete
            items={model}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            styling={{
              borderRadius: "8px"
            }}
          />
    </div>
  )
}
