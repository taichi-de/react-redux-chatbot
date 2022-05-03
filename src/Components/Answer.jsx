import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomizedButton = styled(Button)`
    border-color: #FFB549;
    color: #FFB549;
    font-weight: 600;
    margin-bottom: 8px;

    :hover {
        background-color: #FFB549;
        color: #fff;
    }
`;

const Answer = (props) => {

    return (
        <CustomizedButton
            variant="outlined"
            onClick={() => props.select(props.answer.content, props.answer.nextId)}
        >
            {props.answer.content}
        </CustomizedButton>
    );
};

export default Answer;