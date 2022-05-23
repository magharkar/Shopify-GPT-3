import React from "react";
import { TextField } from "@mui/material";

const Textarea = (props) => {
    return (
        <TextField 
            multiline rows="15" 
            placeholder="Enter prompt" 
            //style={{width: "40%"}}
            {...props}
        >
            {props.children}
        </TextField>
    )
}

export default Textarea;