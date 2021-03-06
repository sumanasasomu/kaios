import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Demo from './demo';
import KaiUI from './kai-ui/src/App';

const bootstrap = () => {
    // Render the app
    console.log(process.env.REACT_APP_DEMO);
    if(process.env.REACT_APP_KAI_UI){
        //https://kai-ui.onrender.com
        ReactDOM.render(<KaiUI/>, document.getElementById('root'));
    }else if(process.env.REACT_APP_DEMO){
        //https://kaios.onrender.com
        ReactDOM.render(<Demo/>, document.getElementById('root'));
    }else{
        //https://integrated-app.onrender.com
        ReactDOM.render(<App/>, document.getElementById('root'));
    }
};


bootstrap();

