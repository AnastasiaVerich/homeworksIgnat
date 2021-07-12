import React, {useState} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some']
function HW12() {
    const dispatch = useDispatch()
    const theme= useSelector<AppStoreType, string>((state)=>state.theme.type)
   const onChangeCallback=(color: string)=>{
        dispatch(dispatch(changeThemeC(color)))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect
                options={themes}
            value={theme}
            onChangeOption={onChangeCallback}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
