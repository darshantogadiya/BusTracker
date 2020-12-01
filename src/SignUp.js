// SignUp.js
import React from 'react'
import {
    StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity,
    ImageBackground, StatusBar, Dimensions
} from 'react-native'
import firebase from 'react-native-firebase';
import Toast from 'react-native-simple-toast';
import { ScrollView } from 'react-native-gesture-handler';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default class SignUp extends React.Component {

    state = { email: '', password: '', displayName: '', displayPhone: "", errorMessage: null, secure: true }

    handleSignUp = () => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.email != "" && this.state.password != "" && this.state.displayPhone != "") {
            if (re.test(this.state.email)) {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then((res) => {
                        res.user.updateProfile({
                            displayName: this.state.displayName,
                        })
                        
                        this.props.navigation.navigate('Main')
                    })
                    .catch(error => this.setState({ errorMessage: error.message }))
            }
            else {
                Toast.show("Please enter valid email");
            }
        }
        else {
            Toast.show("Please enter email, password and phone number!! the fiels can't be blank");
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
                    <ScrollView>
                        <Text style={{
                            fontSize: 22,
                            alignSelf: "center",
                            marginVertical: 20,
                            fontWeight: "bold"

                        }}>Create Your Account</Text>

                        <Text style={{
                            marginTop: 10,
                            fontWeight: "bold"
                        }}>Full Name
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
                                        placeholder="Name"
                                        value={this.state.displayName}
                                        onChangeText={displayName => this.setState({ displayName })}
                                    />
                                </View>
                                <View style={{
                                    width: "20%",
                                    justifyContent: "center",
                                    alignItems: "flex-end"
                                }}>
                                    <Image
                                        source={require('./images/user.png')}
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
                                        placeholder="Email"
                                        autoCapitalize="none"
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
                                        placeholder="Password"
                                        autoCapitalize="none"
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

                        <Text style={{
                            marginTop: 10,
                            fontWeight: "bold"
                        }}>Phone Number
                        </Text>

                        <View style={{

                        }}>
                            <View style={{
                                flexDirection: "row"
                            }}>

                                <View style={{
                                    width: "20%",
                                    marginRight: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderBottomWidth: 1,
                                    borderColor: "black"
                                }}>
                                    <Text>+ 91</Text>
                                </View>

                                <View style={{
                                    width: "80%",
                                    borderBottomWidth: 1,
                                    borderColor: "black"
                                }}>
                                    <TextInput
                                        placeholder="Phone Number"
                                        autoCapitalize="none"
                                        textContentType='telephoneNumber'
                                        dataDetectorTypes='phoneNumber'
                                        keyboardType='phone-pad'
                                        maxLength={10}
                                        onChangeText={displayPhone => this.setState({ displayPhone })}
                                        value={this.state.displayPhone}
                                    />
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
                                onPress={this.handleSignUp}>
                                <Text style={{
                                    color: "white",
                                    fontSize: 18,
                                    fontWeight: "bold"
                                }}>Register Now</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            marginVertical: 30,
                            alignItems: "center"
                        }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={{ fontWeight: "bold" }}>Already have an account? Login</Text>
                            </TouchableOpacity>
                        </View>
                        </ScrollView>
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
                <Text>Sign Up</Text>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                <TextInput
                    style={styles.textInput}
                    placeholder="Name"
                    value={this.state.displayName}
                    onChangeText={displayName => this.setState({ displayName })}
                />
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <Button title="Sign Up" onPress={this.handleSignUp} />
                <Button
                    title="Already have an account? Login"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View> */}