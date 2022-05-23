import React from "react";
import { useState } from "react";
import AppButton from '../Button/Button';
import Textarea from '../TextArea/Textarea';
import {PromptWrapper, ButtonWrapper, Text, PromptHeader} from './Prompt.style';
import {WRITE, CLEAR, SUBMIT} from "../../constants";

const Prompt = (props) => {
    const [promptValue, setPromptValue] = useState("");
    const handleClick = () => {
        const endPoint = "https://api.openai.com/v1/engines/text-curie-001/completions";
        const token = process.env.OPEN_AI_SECRET;
        const params =  {
        prompt: promptValue,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        };
        return fetch(endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(params)
        })
        .then(function (res) {
            if (res.ok) {
                return Promise.resolve(res.json())
                .then((data) => {
                    updateLocalStorage(data);
                    return { data, status: res.status };
                });
            }
        return Promise.reject(res.status);
        })
    }

    const updateLocalStorage = (data) => {
        let promptList = [];
        const previousData = localStorage.getItem("previousValues");
        const previousObj = JSON.parse(previousData);
        console.log(previousObj);
        if(previousObj) {
            promptList = previousObj;
        }
        promptList.push({
            prompt: promptValue,
            response: data.choices[0].text,
        })
        localStorage.setItem("previousValues", JSON.stringify(promptList));
        props.updateResponse(promptList);
    }

    const clearText = () => {
        setPromptValue("");
    }

        return (
        <PromptWrapper>
            <PromptHeader>
                <Text>{WRITE}</Text>
                <AppButton 
                    style={{fontWeight: 700, borderWidth: 2, height: 40, marginTop: 8}}
                    onClick={clearText}
                >
                    {CLEAR}
                </AppButton>
            </PromptHeader>
            
                <Textarea 
                    onChange={(event) => setPromptValue(event.target.value) }
                    style={{backgroundColor: "#FFF", marginTop: 8}}
                    value={promptValue}
                />
                <ButtonWrapper>
                    <AppButton 
                        style={{width: "100px", backgroundColor: "#FFF", fontWeight: 700, borderWidth: 2}}
                        onClick={handleClick}
                    >
                        {SUBMIT}
                    </AppButton>
                </ButtonWrapper>
        </PromptWrapper>
    )
}

export default Prompt;