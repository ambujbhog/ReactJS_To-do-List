import React from 'react';
import './Todo.css';
import {List, Avatar, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'; 

function Todo(props) {
    return ( 
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="deadline"/>
            </ListItem>
        </List>
    )
}

export default Todo
