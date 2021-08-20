import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export default function Searchbox() {
  const items = [
    {name:"Iphone",key:"iphone"},
    {name:"Redme", key:"readme"},
    {name:"Realme", key: "realme"},
    {name:"Samsung", key: "samsung"},
  ]

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
    console.log(item)
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
            items={items}
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
