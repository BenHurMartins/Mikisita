import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Principal from './components/Principal';
import Game from './components/Game';
import Regras from './components/Regras';

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#544438' }} titleStyle={{ color: '#fff' }}>
        <Stack key="root">
            <Scene key='principal' component={ Principal } title='Principal'/>
            <Scene key='game' component={ Game } title='Game' hideNavBar='false'/>
            <Scene key='regras' component={ Regras } title='Regras'/>
        </Stack>
    </Router>
)
