import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/servicos" component={Servicos} />
            <Route path="/projetos" component={Projetos} />
            <Route path="/contato" component={Contato} />
        </Switch>
    </BrowserRouter>
);

export default Routes;