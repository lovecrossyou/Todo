/**
 * Created by CrossZhu@huipay on 2017/2/11.
 */
import React, {Component} from 'react';
import {View, Text, AppRegistry, Image, TextInput, TouchableOpacity, PixelRatio,Dimensions} from 'react-native'


// var {width,height} = Dimensions.get('window').size
class InputCell extends Component{
    render(){
        var {name,placeholder} = this.props.data
        return <View style={{marginTop: 20,flexDirection:'row',alignItems:'center',backgroundColor:'white'}}>
            <Text style={{marginLeft:10,width:54}}>{name}</Text>
            <View style={{alignItems:'stretch',flex:1}}>
                <TextInput
                    placeholder={placeholder}
                    textAlign='left'
                    style={styles.input}
                />
            </View>
        </View>
    }
}


export default class Login extends Component {
    render() {
        return <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1502327020,2968128604&fm=116&gp=0.jpg'}}/>
                <InputCell style={{marginTop: 20}} data={{name:'用户名',placeholder:'请输入用户名'}}/>
                <InputCell style={{marginTop: 20}} data={{name:'密码',placeholder:'请输入密码'}}/>
                <TouchableOpacity
                    style={{
                    alignItems: 'center',
                    borderRadius: 4,
                    marginTop: 20,
                    marginHorizontal: 10,
                    backgroundColor: '#63B8FF',
                    height: 40,
                    justifyContent: 'center'
                }}
                onPress={()=>{

                }}
                >
                    <Text>登陆</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.botContainer}>
                <View></View>
                <Text>或</Text>
                <View>
                    <Image />
                    <Text>微信快捷登陆</Text>
                </View>
            </View>
        </View>
    }
}


const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#f4f4f4'
    },
    input: {
        height: 40
    },
    botContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 20
    },
    image: {
        width: 60,
        height: 60,
        marginTop: 20 + 64,
        alignSelf: 'center',
        borderRadius: 30
    }
}

