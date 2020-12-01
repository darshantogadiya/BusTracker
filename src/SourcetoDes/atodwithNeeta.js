import React from 'react';
import {
    StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity,
    ImageBackground, StatusBar, Dimensions, PermissionsAndroid, Platform, ToastAndroid, Alert
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import Geolocation from "react-native-geolocation-service";
import MapViewDirections from 'react-native-maps-directions';
import moment from 'moment';

const polyline = require("@mapbox/polyline");
const { width, height } = Dimensions.get("window");

const GOOGLE_MAPS_APIKEY = 'AIzaSyCQ9yrbgI_x_KloB58Nd6j3Q9HgUf-eIao';

export default class atodwithNeeta extends React.Component {
    constructor() {
        super();
        this.state = {
            
            initialRegionAhmedabad: {
                latitude: 23.0138,
                longitude: 72.5924,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            initialRegionAjmer: {
                latitude: 74.64,
                longitude: 26.47,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },

            initialRegionJaiput: {
                latitude: 28.2823,
                longitude: 74.9603,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            initialRegionDelhi: {
                latitude: 28.6666,
                longitude: 77.2269,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            
            coords: [],

            delayedTime: 0,

            curTime: "",
            date: '',

            ahmedabad: true,
            ajmer: false,
            jaiput: false,
            delhi: false

            
        };
    }

    componentDidMount() {

        setInterval(() => {
            this.setState({
                date: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
            })
            if (new Date().getHours() >= 17 && new Date().getMinutes() >= 0) {
                this.setState({
                    ahmedabad: true, ajmer : false, jaiput: false, delhi: false, delayedTime: 10
                })
            }
            else if (new Date().getHours() >= 10 && new Date().getMinutes() >= 0) {
                this.setState({
                    ahmedabad: false, ajmer : false, jaiput: false, delhi: true, delayedTime: 0
                })
            }
            else if (new Date().getHours() >= 8 && new Date().getMinutes() >= 0) {
                this.setState({
                    ahmedabad: false, ajmer : false, jaiput: true, delhi: false, delayedTime: 25
                })
            }
            else if (new Date().getHours() >= 4 && new Date().getMinutes() >= 0) {
                this.setState({
                    ahmedabad: false, ajmer : true, jaiput: false, delhi: false, delayedTime: 20
                })
            }
            else {
                this.setState({ahmedabad: true})
            }
        }, 1000)

    }

    

    render() {
        return (
            <ImageBackground source={require("../images/login_bg.png")} style={{ width: '100%', height: '100%' }}>
                <StatusBar translucent backgroundColor="transparent" />

                <View style={{
                    flex: 1,
                }}>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingTop: 40,
                    }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("NeetaTravels")}>
                            <Image
                                source={require('../images/back.png')}
                                style={{ width: 25, height: 25, marginTop: 5, marginLeft: 10 }}
                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 18
                            }}>Neeta Travels</Text>
                        </View>

                        <View>
                        </View>
                    </View>

                    <View style={{ alignItems: "center", marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", padding: 20, borderRadius: 10 }}>
                        <Text style={{
                            fontSize: 13,
                            fontWeight: "bold"
                        }}>Journey starts from Ahmedabad to Delhi</Text>

                        <Text style={{
                            marginTop: 8,
                            fontSize: 13,
                            fontWeight: "bold",
                            color: "grey"
                        }}>Road-Map:</Text>

                        <View style={{ width: "82%", borderWidth: 0.5, marginTop: 10, borderRadius: 5 }}>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%" }}>
                            <View style={{ width: "20%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "green", fontWeight: "bold", fontSize: 10 }}>05 PM</Text>
                                <Text style={{ color: "green", fontWeight: "bold", fontSize: 10 }}>Ahmedabad</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            <View style={{ width: "25%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "grey", fontWeight: "bold" , fontSize: 10}}>04 AM</Text>
                                <Text style={{ color: "grey", fontWeight: "bold", fontSize: 10 }}>Ajmer</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            <View style={{ width: "25%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "grey", fontWeight: "bold", fontSize: 10 }}>08 AM</Text>
                                <Text style={{ color: "grey", fontWeight: "bold", fontSize: 10 }}>Jaipur</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            <View style={{ width: "25%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "red", fontWeight: "bold", fontSize: 10 }}>10 AM</Text>
                                <Text style={{ color: "red", fontWeight: "bold", fontSize: 10 }}>Delhi</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            
                        </View>

                    </View>


                    {this.state.ahmedabad &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionAhmedabad}
                            zoomEnabled={true}
                            pitchEnabled={true}
                            showsCompass={true}
                            showsBuildings={true}
                            showsTraffic={true}
                            showsIndoors={true}
                            showsUserLocation={true}
                            followUserLocation={true}>

                            <Marker
                                coordinate={{
                                    latitude: this.state.initialRegionAhmedabad.latitude,
                                    longitude: this.state.initialRegionAhmedabad.longitude,
                                }}>
                            </Marker>

                        </MapView>}

                    {this.state.ajmer &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionAjmer}
                            zoomEnabled={true}
                            pitchEnabled={true}
                            showsCompass={true}
                            showsBuildings={true}
                            showsTraffic={true}
                            showsIndoors={true}
                            showsUserLocation={true}
                            followUserLocation={true}>

                            <Marker
                                coordinate={{
                                    latitude: this.state.initialRegionAjmer.latitude,
                                    longitude: this.state.initialRegionAjmer.longitude,
                                }}>
                            </Marker>

                        </MapView>}

                        {this.state.jaiput &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionJaiput}
                            zoomEnabled={true}
                            pitchEnabled={true}
                            showsCompass={true}
                            showsBuildings={true}
                            showsTraffic={true}
                            showsIndoors={true}
                            showsUserLocation={true}
                            followUserLocation={true}>

                            <Marker
                                coordinate={{
                                    latitude: this.state.initialRegionJaiput.latitude,
                                    longitude: this.state.initialRegionJaiput.longitude,
                                }}>
                            </Marker>

                        </MapView>}

                        {this.state.delhi &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionDelhi}
                            zoomEnabled={true}
                            pitchEnabled={true}
                            showsCompass={true}
                            showsBuildings={true}
                            showsTraffic={true}
                            showsIndoors={true}
                            showsUserLocation={true}
                            followUserLocation={true}>

                            <Marker
                                coordinate={{
                                    latitude: this.state.initialRegionDelhi.latitude,
                                    longitude: this.state.initialRegionDelhi.longitude,
                                }}>
                            </Marker>

                        </MapView>}

                    
                        <View style={{ flexDirection: "row", justifyContent:"center", alignItems:"center" }}>
                        <Text style={{
                            fontSize: 13,
                            fontWeight: "bold",
                            marginBottom: 20,
                        }}>The bus is delayed by </Text>
                        <Text style={{
                            fontSize: 13,
                            fontWeight: "bold",
                            marginBottom: 20,
                        }}>{this.state.delayedTime} </Text>
                        <Text style={{
                            fontSize: 13,
                            fontWeight: "bold",
                            marginBottom: 20,
                        }}>minutes</Text>
                    </View>


                </View>
            </ImageBackground >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


