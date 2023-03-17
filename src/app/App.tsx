import React, { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { Sidebar } from 'widgets/Sidebar';
import { Header } from 'widgets/Header/ui/Header';

const App = () => (
    <div className="app">
        <Suspense fallback="">
            <Header />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
