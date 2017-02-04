/**
 * Created by huibei on 17/2/4.
 */
import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'

import { actionCreators } from './todoListRedux'
import List from './List'
import Input from './Input'
import Title from './Title'

export default class App extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {}
    // }
    state = {}
    componentWillMount() {
        const {store} = this.props

        const {todos} = store.getState()
        this.setState({todos})

        this.unsubscribe = store.subscribe(() => {
            const {todos} = store.getState()
            this.setState({todos})
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    onAddTodo = (text) => {
        const {store} = this.props
        store.dispatch(actionCreators.add(text))
    }

    onRemoveTodo = (index) => {
        const {store} = this.props
        store.dispatch(actionCreators.remove(index))
    }

    render() {
        const {todos} = this.state

        return (
            <View>
                <Title>
                    To-Do List
                </Title>
                <Input
                    placeholder={'Type a todo, then hit enter!'}
                    onSubmitEditing={this.onAddTodo}
                />
                <List
                    list={todos}
                    onPressItem={this.onRemoveTodo}
                />
            </View>
        )
    }
}

