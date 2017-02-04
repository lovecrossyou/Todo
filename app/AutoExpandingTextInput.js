/**
 * Created by huibei on 17/1/22.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    Demitions
} from 'react-native';

export default class AutoExpandingTextInput extends  Component{
    constructor(props){
        super(props)
        var defHeight = this.props.height
        if(!defHeight){
            defHeight = 30
        }
        this.state = {
            text:'',
            height:defHeight
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(event){
        this.setState({
            text:event.nativeEvent.text,
            height:event.nativeEvent.contentSize.height
        })
    }

    render(){
        var {onSubmitEditing} = this.props
        return (
            <TextInput {...this.props}
                       multiline={true}
                       onChange={this.onChange}
                       onSubmitEditing={onSubmitEditing}
                       value={this.state.text}
                       style={[styles.textInputStyle,{height:Math.max(35,this.state.height)}]}
            />)
    }
}

const styles = StyleSheet.create({
    textInputStyle:{
        width:300,
        fontSize:20,
        paddingLeft:4,
        backgroundColor: "grey"
    }
})