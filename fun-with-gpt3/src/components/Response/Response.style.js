import styled from 'styled-components';

const  ResponseWrapper = styled.div`
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
    width: 80px;
    margin-top: 24px;
`;

const ResponseHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export {ResponseWrapper, ButtonWrapper, Text, ResponseHeader}