import React, { Component } from 'react';
import {
    Image, StyleSheet, View,
    ImageBackground, Text, StatusBar, Dimensions
} from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default class Splash extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // Start counting when the page is loaded
        setTimeout(() => {
            this.props.navigation.navigate('Loading'); //this.props.navigation.navigate('Login')
        }, 3000);  //3000 milliseconds
   }

   componentWillUnmount(){
    clearTimeout(this.timeoutHandle); 
}

   
    render() {
        return (
            <ImageBackground source={require("./images/bg.png")} style={{ width: '100%', height: '100%' }}>
                <StatusBar
                    backgroundColor="#F9BA53"
                />
                <View style={{
                    justifyContent: 'center',
                    flex: 1,
                }}>
                    <Image
                        source={require('./images/BUS_ORANGE_LOGO.png')}
                        resizeMode={'contain'}
                        style={[{
                        },
                        {
                            width: deviceWidth / 1.5,
                            height: deviceHeight / 5.4,
                            alignSelf: "center"
                        }
                        ]} />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    indexContainer: {
        flex: 1,
    }
});
