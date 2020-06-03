import React, { Component } from 'react'
import Header from './kaiUiComponents/Header/Header'
import ListItems from './ListItems'
import SoftKeys from './SoftKeys'
import SoftKey from '../../kai-ui/src/components/SoftKey/SoftKey'
import { withSoftKeyManager } from '../../kai-ui/src/components/SoftKey/withSoftKeyManager'
import '../styles/HomePage.css'


export default class HomePage extends Component {
     
    render() {
        return (
            <div className='mainDiv'> 
               {/* remove the below div, its notification bar of jio phone */}
               {/* <div style={NotificationBarStyle}/> */}
               <Header text='Outlook' backgroundColor='lightgrey' bottomMargin='1px'/>
               <ListItems></ListItems>
               <SoftKey leftText='Exit' centerText='Open' rightText='Options'></SoftKey>
             </div>
        )
    }
}
