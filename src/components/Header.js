import React from 'react';
import HighlightIcon from '@mui/icons-material/Highlight';
const Header = (props) => {
    return (
        <div>
            <header>
                <h1>
                <HighlightIcon />
                ToDoList
                </h1>
                <p>TASK <span>{props.task}</span></p>
            </header>
        </div>
    );
}

export default Header;
