import React from 'react';
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button>
            <div>
                <Link to={'/'}>Main</Link>&nbsp;
                <Link to={'/about'}>About</Link>
            </div>
            <AppRouter/>
        </div>
    );
};

export default App;