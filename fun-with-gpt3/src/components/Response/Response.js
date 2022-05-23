import React from "react";
import AppButton from '../Button/Button';
import { ResponseWrapper, Text, ResponseHeader } from "./Response.style";
import ResponseCard from "../ResponseCard/ResponseCard";
import {RESPONSES, CLEARALL} from "../../constants"; 

const Response = (props) => {
    let response = [];
    if(props.data[0] !== undefined) {
         response = props.data?.map(item => item).reverse();
    }

    const clearResponses = () => {
        localStorage.removeItem("previousValues");
        props.clearResponses();
    }
    
    console.log(response);
        return (
        <ResponseWrapper>
            {
                response.length > 0 && (
                    <>
                        <ResponseHeader>
                            <Text>{RESPONSES}</Text>
                            <AppButton 
                                style={{fontWeight: 700, borderWidth: 2, height: 40, marginTop: 16}}
                                onClick={clearResponses}
                            >
                                {CLEARALL}
                            </AppButton>
                        </ResponseHeader>
                        {
                            response?.map(item => (
                                <ResponseCard item={item} />
                            ))
                        }
                    </>
                )
            }
           
        </ResponseWrapper>
    )
}

export default Response;