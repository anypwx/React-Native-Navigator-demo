/**
 * Created by Administrator on 2016/12/1.
 */
import React, { Component, PropTypes} from 'react';
import { View, Text, TouchableHighlight,TouchableNativeFeedback,StyleSheet,Button} from 'react-native'

export default class MyScence extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <View>
                <Button title={"back"} style={mcs.mBut} onPress={this._goback.bind(this)}/>
            </View>
        )
    }

    _goback(){
        const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }
}

const mcs = StyleSheet.create({
    mBut:{width:120,height:40,backgroundColor:'mediumseagreen'},
})