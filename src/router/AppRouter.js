import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AnimationPage from '../pages/AnimationPage';

class AppRouter extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <div className="main">
                        <Switch>
                            <Route
                                path="/"
                                component={AnimationPage}
                                exact={true}
                            />
                        </Switch>
                    </div>
                </BrowserRouter>
            </>
        );
    }
}

export default AppRouter;
