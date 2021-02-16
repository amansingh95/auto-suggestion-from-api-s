import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button} from 'react-bootstrap';

const HomeScreen=()=>{
    const [planets, setPlanets] = useState([]);
    const [search, setSearch] = useState([]);
     
           const PlanetDetail= async()=>{
                let apiURL="https://swapi.dev/api/planets";
                
                var datas= await axios.get(apiURL);
            
                setPlanets(datas.data.results);
          
           
           }
        
          useEffect(() => {
            PlanetDetail();
            
            },[]);
            const submitHandler = async(e) => {
                e.preventDefault();
                let setSearch=e.target.value;
                let searchUrl=`https://swapi.dev/api/people/?search=${search}`;
                var searchList= await axios.get(searchUrl);
                console.log(searchList.data.results[0].name);
            }

         
    return(
        <div className="HomeScreen container">
           <div className="header">
           <div className="header-left"><h1>Planets Details</h1></div> 
           <div className="header-right">
           <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text"
                        placeholder="Search..." 
                        value={search}
                        onChange={submitHandler} />
                    
                </Form.Group>

                
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>

           </div>
            </div> 
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
