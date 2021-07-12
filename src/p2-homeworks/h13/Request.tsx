import React, {useState} from 'react'
import {zapros} from './RequestsAPI'
import axios from "axios";

function Request() {
    const[value, setValue]=useState(true)
const col =()=>{
    axios
        .post('https://neko-cafe-back.herokuapp.com/auth/test',{success: value})
        .then ((response: any)=>response.data)
        .catch(error => alert(error)
        );
}


    return (
        <div>
            <input type="checkbox" checked={value} onClick={()=>setValue(!value)}/>
            <button onClick={col}>click</button>
        </div>
    )
}

export default Request

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз