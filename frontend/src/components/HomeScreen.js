import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button} from 'react-bootstrap';
import AutoSuggest from "react-autosuggest";

const HomeScreen=()=>{
    const [planets, setPlanets] = useState([]);
    const [search, setSearch] = useState([]);
    const [result, setResult] = useState([]);
    const [suggestKey, setSuggestKey] = useState([]);
    const [suggestKeyResult, setSuggestKeyResult] = useState([]);
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
     
           const PlanetDetail= async()=>{
                let apiURL="https://swapi.dev/api/planets/";
                
                var datas= await axios.get(apiURL);
            
                setPlanets(datas.data.results);
          
           
           }
        
          useEffect(() => {
            PlanetDetail();
            
            },[]);
            const submitHandler = async(e) => {
                e.preventDefault();
                let searchUrl=`https://swapi.dev/api/planets/?search=${search}`;
                var searchList= await axios.get(searchUrl);
                let searchResult=searchList.data.count;
                if(searchResult==0){
                    alert("No Planets avaliable");
                }else{
                    console.log(searchList.data.results[0].name);
                    setResult(searchList.data.results[0].name)
                }
               
            }
            // const suggestion=async(e)=>{
            //     setSuggestKey(e.target.value);
            //     let searchUrl=`https://swapi.dev/api/planets/?search=${suggestKey}`;
            //     var searchList= await axios.get(searchUrl);
            //     if(suggestKey==searchList.data.results){
            //         setSuggestKeyResult(searchList.data.results)
            //     }
            // }
            const lowerCasedCompanies = planets.map(planet => {
                return {
                  name: planet.name.toLowerCase()
                };
              });
              function getSuggestions(value) {
                return lowerCasedCompanies.filter(company =>
                    company.name.includes(value.trim().toLowerCase())
                );
              }
           
    return(
        <div className="HomeScreen container">
           <div className="header">
           <div className="header-left"><h1>Planets Details</h1></div> 
           <div className="header-right">
          
           <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          console.log(value);
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }
        getSuggestionValue={suggestion => suggestion.name}
        renderSuggestion={suggestion => <span>{suggestion.name}</span>}
        inputProps={{
          placeholder: "Enter planet Names",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          }
        }}
        highlightFirstSuggestion={true}
      />
           </div>
            </div> 
            
            <div className="results"><p>{result}</p></div>
            {planets.map((planet,i) => {
                    return [
                    <div className="item" key={i}>
                    <div>
                    <p> {planet.name}</p>
                    </div>
                </div>]
            })}

        </div>
    )
}
export default HomeScreen;
