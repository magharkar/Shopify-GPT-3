import styled from 'styled-components';

const CardWrapper = styled.div`
    background-color: #ebf5ff;
    padding: 24px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin-bottom: 16px;
`;

const Title = styled.div`
    font-weight: 700;
    padding-right: 16px;
    &.prompt {
        padding-right: 34px;
    }
`;

const Value = styled.div`
    text-align: left;
`;

const Row = styled.div`
    display: flex;
    &.first-row{
        margin-bottom: 16px;
    }
`;

export {CardWrapper, Title, Value, Row};