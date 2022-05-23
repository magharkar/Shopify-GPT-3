import React from "react";
import { CardWrapper, Title, Value, Row } from "./ResponseCard.style";
import {RESPONSE, PROMPT} from "../../constants"; 

const ResponseCard = (props) => {
    const {item} = props;
    return(
        <CardWrapper>
            <Row className="first-row">
                <Title className="prompt">{PROMPT}</Title>
                <Value>{item.prompt}</Value>
            </Row>
            <Row>
                <Title>{RESPONSE}</Title>
                <Value>{item.response}</Value>
            </Row>
        </CardWrapper>
    )
} 

export default ResponseCard;