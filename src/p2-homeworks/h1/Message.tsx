import React from 'react'
import s from './Message.module.css'

export type MyProps = {
    avatar: string
    name: string
    message: string
    time: string

}


export function Message(props: MyProps) {
    return (

        <div className={s.sms}>
            <img src={props.avatar} className={s.avatar}/>
            <div className={s.block}></div>

            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.massage}>{props.message}</div>
                <div className={s.time}>  {props.time}</div>
            </div>

        </div>

    )
}

