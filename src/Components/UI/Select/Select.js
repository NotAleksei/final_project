import React from 'react'
import classes from './Select.module.css'

const Select = props => {
    const htmlFor = `${props.label}-${Math.random()}`

    return(
       <React.Fragment>
            <select
                className={classes.Select}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            >
                {props.options.map((option, idx)=>{
                    return(
                        <option 
                        value={option.value}
                        key={option.value + idx}
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </React.Fragment>
    )
}

export default Select