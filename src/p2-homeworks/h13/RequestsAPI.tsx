import axios from 'axios'

export const zapros={
z1(value: boolean){
   axios
       .post('https://neko-cafe-back.herokuapp.com/auth/test',{success: value})

    }
}