import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value: number) {
    return `${value}°C`;
}

type Suype={
    value: number
    max: number
    setValue1: any
    setValue2: any
}

export  const  SuperDoubleRange=(props: Suype)=> {
    const classes = useStyles();
    const [value, setValue] = React.useState<number[]>([props.value, props.max]);


    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
        props.setValue1(value[0])
        props.setValue2(value[1])
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Temperature range
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}