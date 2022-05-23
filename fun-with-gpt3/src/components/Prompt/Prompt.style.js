import styled from 'styled-components';

const  PromptWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 24px auto;
`;

const ButtonWrapper = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;
`;

const Text = styled.div`
    font-weight: 700;
    margin-left: 0;
    width: 140px;
    margin-top: 20px;
`;

const PromptHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export {PromptWrapper, ButtonWrapper, Text, PromptHeader}