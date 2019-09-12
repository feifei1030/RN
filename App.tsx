import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, Toast } from '@ant-design/react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Button from '@ant-design/react-native/lib/button';

class HomeScreen extends React.Component {
    state = {
        theme: null,
        currentTheme: null,
        isReady: false,
    };
    changeTheme = (theme, currentTheme) => {
        this.setState({ theme, currentTheme });
    };
    async componentDidMount() {
        await Font.loadAsync(
            'antoutline',
            // eslint-disable-next-line
            require('@ant-design/icons-react-native/fonts/antoutline.ttf')
        );

        await Font.loadAsync(
            'antfill',
            // eslint-disable-next-line
            require('@ant-design/icons-react-native/fonts/antfill.ttf')
        );
        // eslint-disable-next-line
        this.setState({ isReady: true });
    }
    render() {
        const { theme, currentTheme, isReady } = this.state;
        if (!isReady) {
            return <AppLoading />;
        }
        return (
            <Provider theme={theme}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Home Screen</Text>
                    <Button type='primary' onPress={() => this.props.navigation.navigate('Details')}>
                        Go to Details
                    </Button>
                </View>
            </Provider>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        }
    },
    {
        initialRouteName: 'Home',
    });
const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

