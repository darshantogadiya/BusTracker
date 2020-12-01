// Main.js
import React from 'react'
import {
    StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity, PermissionsAndroid,
    ImageBackground, StatusBar, Dimensions
} from 'react-native'
import firebase from 'react-native-firebase'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { ScrollView } from 'react-native-gesture-handler';

export default class Main extends React.Component {

    state = { currentUser: null, uid: "", displayName: "" }

    async  requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Example App',
                    'message': 'Example App access to your location '
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location")
                alert("You can use the location");
            } else {
                console.log("location permission denied")
                alert("Location permission denied");
            }
        } catch (err) {
            console.warn(err)
        }
    }

    componentDidMount() {
        this.requestLocationPermission()
        const { currentUser } = firebase.auth()
        //this.setState({  })
        this.setState({
            currentUser,
            displayName: firebase.auth().currentUser.displayName,
            uid: firebase.auth().currentUser.uid
        })
    }

    signOut = () => {
        this.hideMenu()
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('Login')
        })
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    render() {
        return (
            <ImageBackground source={require("./images/login_bg.png")} style={{ width: '100%', height: '100%' }}>
                <StatusBar translucent backgroundColor="transparent" />

                <View style={{
                    flex: 1,
                }}>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingTop: 40,
                    }}>
                        <View>
                        </View>

                        <View>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 18
                            }}>BusTracker</Text>
                        </View>



                        <View style={{ paddingRight: 10 }}>
                            <TouchableOpacity onPress={this.showMenu}>
                                <Menu animationDuration={100}
                                    ref={this.setMenuRef}
                                    button={<Image
                                        source={require('./images/icons8-menu-vertical-96.png')}
                                        style={{ width: 28, height: 28, tintColor: "black" }}
                                    />}
                                >
                                    <MenuItem onPress={() => this.signOut()}>Logout</MenuItem>
                                </Menu>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{
                        }}>
                            <View style={{ flexDirection: "row", marginHorizontal: 15, elevation: 5, marginVertical: 20, backgroundColor: "#F3EFEF", padding: 10, borderRadius: 20 }}>
                                <View style={{ width: "50%", height: 130, paddingTop: 20 }}>
                                    <Image
                                        resizeMode={"stretch"}
                                        source={require('./images/BUS_WHITE_LOGO.png')}
                                        style={{ width: 150, height: 80, alignSelf: "center" }}
                                    />
                                </View>
                                <View style={{ width: "50%", height: 130, paddingTop: 40 }}>
                                    <Text style={{
                                        fontSize: 18,
                                        alignSelf: "center",
                                        fontWeight: "bold"
                                    }}>Travelling</Text>
                                    <Text style={{ alignSelf: "center", }}>Start a new Journey</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{ marginTop: 20 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Bus")}
                                    style={{ height: 130, width: "40%", backgroundColor: "#F3EFEF", elevation: 5, borderRadius: 10, justifyContent: "center" }}>
                                    <Text style={{
                                        fontSize: 15,
                                        alignSelf: "center",
                                        fontWeight: "bold"
                                    }}>Bus</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}
                                    style={{ height: 130, width: "40%", backgroundColor: "#F3EFEF", elevation: 5, borderRadius: 10, justifyContent: "center" }}>
                                    <Text style={{
                                        fontSize: 15,
                                        alignSelf: "center",
                                        fontWeight: "bold"
                                    }}>Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Compain_Box")}
                                    style={{ height: 130, width: "40%", backgroundColor: "#F3EFEF", elevation: 5, borderRadius: 10, justifyContent: "center" }}>
                                    <Text style={{
                                        fontSize: 15,
                                        alignSelf: "center",
                                        fontWeight: "bold"
                                    }}>Complain</Text>
                                    <Text style={{
                                        fontSize: 15,
                                        alignSelf: "center",
                                        fontWeight: "bold"
                                    }}>Box</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Help")}
                                    style={{ height: 130, width: "40%", backgroundColor: "#F3EFEF", elevation: 5, borderRadius: 10, justifyContent: "center" }}>
                                    <Text style={{
                                        fontSize: 15,
                                        alignSelf: "center",
                                        fontWeight: "bold"
                                    }}>About Us</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("ContactUs")}
                                    style={{ height: 130, width: "40%", alignSelf: "center", backgroundColor: "#F3EFEF", elevation: 5, borderRadius: 10, justifyContent: "center" }}>
                                    <Text style={{
                                        fontSize: 15,
                                        alignSelf: "center",
                                        fontWeight: "bold"
                                    }}>Contact Us</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        

                        <View style={{ marginTop: 20, alignItems: "center" }}>
                            <Text style={{ fontSize: 15 }}>  Copyright @ 2020  </Text>
                            <Text style={{ fontSize: 12, color: "grey" }}>Build version 1.1.1/1.0</Text>
                        </View>

                    </ScrollView>

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
    }
})


{/* <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                <Text>{this.state.displayName}</Text>
                <Button
                    color="#3740FE"
                    title="Logout"
                    onPress={() => this.signOut()}
                />
            </View> */}