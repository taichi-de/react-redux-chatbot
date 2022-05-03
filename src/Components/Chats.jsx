import React from 'react';
import {Chat} from './index'
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

const CustomizedList = styled(List)`
    height: 400px;
    padding: 0;
    overflow: auto;
`;

const Chats = (props) => {

    return (
        <CustomizedList id={"scroll-area"}>
            {props.chats.map((chat, index) => {
                return <Chat text={chat.text} type={chat.type} key={index} />
            })}
        </CustomizedList>
    );
};

export default Chats;