import React from "react";
import { Button } from "@mui/material";

const AppButton = (props) => {
    return (
        <Button
            variant="outlined"
            color={props.color} 
            onClick={props.onClick} 
            {...props}>
            {props.children}
        </Button>
    )
}

export default AppButton;