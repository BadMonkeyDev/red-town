import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter/>
            <ThemeSwitcher />
        </div>
    );
};

export default App;