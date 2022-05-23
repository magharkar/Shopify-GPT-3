import React from "react";
import Prompt from "../Prompt/Prompt";
import Response from "../Response/Response";
import { useState } from "react";

const PromptResponseSection = () => {
    const previousData = localStorage.getItem("previousValues");
    const previousObj = JSON.parse(previousData);
    let responses = [];
    if(previousObj) {
        responses = previousObj;
    }
    const [response, setResponse] = useState(responses);
    const handleUpdate = (data) => {
        setResponse(data);
    }

    const clearResponse = () => {
        setResponse([]);
    }

    return(
        <>
            <Prompt updateResponse={handleUpdate} />
            <Response data={response} clearResponses={clearResponse}/>
        </>
    )
}

export default PromptResponseSection;
