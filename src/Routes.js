import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Principal from './components/Principal';
import Game from './components/Game';

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#115654' }} titleStyle={{ color: '#fff' }}>
        <Stack key="root">
            <Scene key='principal' component={ Principal } title='Principal' hideNavBar />
            <Scene key='game' component={ Game } title='Game' hideNavBar initial/>
        </Stack>
    </Router>
)
