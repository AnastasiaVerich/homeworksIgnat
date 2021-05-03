import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name:string)=>void
}


function GreetingContainer(props: GreetingContainerPropsType) {
    const [name, setName] = useState<string>('ff')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const addUser = () => {
        props.addUserCallback(name)
        name?
        alert(`Hello  `+ name)
        : setError("NO NAME")
    }


    const totalUsers = props.users.length


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
