// Login.js
import React from 'react'
import {
    StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity,
    ImageBackground, StatusBar, Dimensions
} from 'react-native'
import firebase from 'react-native-firebase'

export default class Login extends React.Component {

    state = { email: '', password: '', errorMessage: null, secure: true }

    handleLogin = () => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.email != "" && this.state.password != "") {
            if (re.test(this.state.email)) {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.state.email, this.state.password)
                    .then(() => this.props.navigation.navigate('Main'))
                    .catch(error => this.setState({ errorMessage: error.message }))
            }
            else {
                Toast.show("Please enter valid email");
            }
        }
        else {
            Toast.show("Please enter email and password!! the fiels can't be blank");
        }

    }

    secureTextEntrys() {
        if (this.state.secure == true) {
            this.setState({ secure: false })
        }
        else {
            this.setState({ secure: true })
        }
    }

    render() {
        return (
            <ImageBackground source={require("./images/login_bg.png")} style={{ width: '100%', height: '100%' }}>
                <StatusBar translucent backgroundColor="transparent" />

                <View style={{
                    flex: 1,
                }}>

                    <Image
                        source={require('./images/buslogo2.png')}
                        resizeMode={'stretch'}
                        style={[{
                        },
                        {
                            width: 130,
                            height: 50,
                            marginLeft: 20,
                            marginTop: 80
                        }
                        ]} />

                    <View style={{
                        backgroundColor: "#F7F7FB",
                        marginHorizontal: 10,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        borderBottomRightRadius: 30,
                        borderBottomLeftRadius: 30,
                        paddingHorizontal: 20,
                        elevation: 5

                    }}>
                        <Text style={{
                            fontSize: 35,
                            alignSelf: "center",
                            marginTop: 20,
                            fontWeight: "bold"

                        }}>Hello</Text>

                        <Text style={{
                            fontSize: 18,
                            alignSelf: "center",
                            marginVertical: 20,
                            fontWeight: "bold"

                        }}>Sign Into Your Account</Text>

                        <Text style={{
                            marginTop: 10,
                            fontWeight: "bold"
                        }}>Email
                        </Text>

                        <View style={{
                            borderBottomWidth: 1,
                            borderColor: "black"
                        }}>
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <View style={{
                                    width: "80%"
                                }}>
                                    <TextInput
                                        autoCapitalize="none"
                                        placeholder="Email"
                                        onChangeText={email => this.setState({ email })}
                                        value={this.state.email}
                                    />
                                </View>
                                <View style={{
                                    width: "20%",
                                    justifyContent: "center",
                                    alignItems: "flex-end"
                                }}>
                                    <Image
                                        source={require('./images/email.png')}
                                        resizeMode={'contain'}
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }} />
                                </View>

                            </View>
                        </View>

                        <Text style={{
                            marginTop: 10,
                            fontWeight: "bold"
                        }}>Password
                        </Text>

                        <View style={{
                            borderBottomWidth: 1,
                            borderColor: "black"
                        }}>
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <View style={{
                                    width: "80%"
                                }}>
                                    <TextInput
                                        secureTextEntry={this.state.secure}
                                        autoCapitalize="none"
                                        placeholder="Password"
                                        onChangeText={password => this.setState({ password })}
                                        value={this.state.password}
                                    />
                                </View>
                                <View style={{
                                    width: "20%",
                                    justifyContent: "center",
                                    alignItems: "flex-end"
                                }}>
                                    <TouchableOpacity onPress={this.secureTextEntrys.bind(this)}>
                                        <Image
                                            source={require('./images/hide.png')}
                                            resizeMode={'contain'}
                                            style={{
                                                width: 20,
                                                height: 20,
                                            }} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>

                        <View style={{
                            marginTop: 30
                        }}>
                            <TouchableOpacity style={{
                                alignSelf: "center",
                                backgroundColor: "#F8883C",
                                paddingHorizontal: 50,
                                paddingVertical: 10,
                                borderRadius: 50
                            }}
                                onPress={this.handleLogin}>
                                <Text style={{
                                    color: "white",
                                    fontSize: 18,
                                    fontWeight: "bold"
                                }}>Log In</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            marginVertical: 30,
                            alignItems: "center"
                        }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                                <Text style={{ fontWeight: "bold" }}>Don't have an account? Register Now</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
})



{/* <View style={styles.container}>
                <Text>Login</Text>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <Button title="Login" onPress={this.handleLogin} />
                <Button
                    title="Don't have an account? Sign Up"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />
            </View> */}