import React, {useState, useEffect} from 'react';
import { Form, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
// import axios from "axios";
const LoginScreen=()=>{
   
    // useEffect(()=>{
    //     let apiURL="https://swapi.dev/api/people";
    //     axios.get(apiURL).then(function(response) {
    //         submitHandler(response.data);
    //       });
    // },[])
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const history = useHistory();
    const submitHandler = async(e,users) => {
        e.preventDefault();
        if(password.length<=4 && password.length >=3 ){
            console.log("login sucessfull");
            history.push("/");
        } else{alert("login fail.... password should not be more tha 4 char or less tha 4")}
        // let apiURL="https://swapi.dev/api/people";
        // axios.get(apiURL).then(function(response) {
        //     console.log(">>>>>>>>>",response.data.results);
        //     let matchUserName = response.data.results.map(obj => obj.name).includes(userName);
        //     let matchPassword = response.data.results.map(obj => obj.birth_year).includes(password);
        //     if(matchUserName && matchPassword){
                
        //     console.log("login sucessfull");

        //     }else{alert("login fail.... check user name and password")}
        //   });
       
       
     }
   
    return(
        <div className="loginScreen">
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter User Name" 
                        value={userName}
                        required
                        onChange={(e) => setUserName(e.target.value)} />
                    
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                     placeholder="Password"
                     value={password}
                     required
                     onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default LoginScreen;