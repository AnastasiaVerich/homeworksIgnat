import React from 'react'
import {zapros} from './RequestsAPI'
import axios from "axios";

function Request() {
const col =()=>{
    axios
        .post('https://neko-cafe-back.herokuapp.com/auth/test',{success: true})
        .then ((response: any)=> response.data.yourBody)
        .catch(error => alert(error));
}

    return (
        <div>
            <input type="checkbox" checked={true}/>
            <button onClick={col}>click</button>
        </div>
    )
}

export default Request

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз