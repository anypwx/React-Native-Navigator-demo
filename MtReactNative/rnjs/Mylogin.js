/**
 * Created by Administrator on 2016/12/1.
 */
import React, { Component, PropTypes} from 'react';
import { View, Text, TouchableHighlight,TouchableNativeFeedback,TextInput,Button,StyleSheet, } from 'react-native';

import MyScence from './MyScence';

export default class Mylogin extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <View style={mcss.mview}>
                <TextInput style={mcss.mtxtInput} placeholder={'用户名'}/>
                <TextInput style={mcss.mtxtInput} placeholder={'密码'}/>
                <Button title={"Login"} style={mcss.mBut} onPress={this._goto.bind(this)}/>
            </View>
        )
    }

    _goto(){
        const {navigator} = this.props;
        if(navigator){
            navigator.push({
                title:'MyScence',
                component:MyScence,
            })
        }
    }

}

const mcss = StyleSheet.create({
    mview:{flex:1,backgroundColor:'skyblue',alignItems:'center',justifyContent:'center'},
    mtxtInput:{width:300,height:40,backgroundColor:'transparent',margin:6},
    mBut:{width:120,height:40,backgroundColor:'mediumseagreen'},
});