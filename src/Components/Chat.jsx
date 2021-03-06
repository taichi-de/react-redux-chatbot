import React from 'react';
import { ListItem, ListItemAvatar } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import TaiProfile from "../assets/img/TaiProfile.png";
import NoProfile from "../assets/img/no-profile.png";

const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="icon" src={TaiProfile} />
                ) : (
                    <Avatar alt="icon" src={NoProfile} />
                )}
            </ListItemAvatar>
            <div className="p-chat__bubble">{props.text}</div>
        </ListItem>
    );
};

export default Chat;