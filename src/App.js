import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import * as axios from "axios";

function App() {
    const getUsers = () => {
        axios.get ("http://localhost:7542/users").then (res => {
            setUsers (res.data);
        })
    }
    const addHandler = () => {
        axios.post ("http://localhost:7542/users").then (res => {
            getUsers ();
        })
    }
    const [users, setUsers] = useState ([]);
    useEffect (() => {
        getUsers ();
    }, [])
    return (
        <div>
            <button onClick={addHandler}>ADD</button>
            <div>{users.map (u => <div>{u.name}</div>)}</div>
        </div>
    );
}

export default App;
