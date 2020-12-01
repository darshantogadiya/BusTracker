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

export default class rtobwithGujarat extends React.Component {
    constructor() {
        super();
        this.state = {
            
            initialRegionRajkot: {
                latitude: 22.2915,
                longitude: 70.8019,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            initialRegionGondal: {
                latitude: 70.79,
                longitude: 21.96,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },

            initialRegionAmreli: {
                latitude: 21.6040,
                longitude: 71.2232,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            initialRegionBhavnagar: {
                latitude: 21.7702,
                longitude: 72.1369,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            
            coords: [],

            delayedTime: 0,

            curTime: "",
            date: '',

            rajkot: true,
            gondal: false,
            amreli: false,
            bhavnagar: false

            
        };
    }

    componentDidMount() {

        setInterval(() => {
            this.setState({
                date: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
            })
            if (new Date().getHours() >= 7 && new Date().getMinutes() >= 0) {
                this.setState({
                    rajkot: false, gondal : false, amreli: false, bhavnagar: true, delayedTime: 0
                })
            }
            else if (new Date().getHours() >= 6 && new Date().getMinutes() >= 0) {
                this.setState({
                    rajkot: false, gondal : false, amreli: true, bhavnagar: false, delayedTime: 15
                })
            }
            else if (new Date().getHours() >= 4 && new Date().getMinutes() >= 0) {
                this.setState({
                    rajkot: false, gondal : true, amreli: false, bhavnagar: false, delayedTime: 10
                })
            }
            else if (new Date().getHours() >= 3 && new Date().getMinutes() >= 0) {
                this.setState({
                    rajkot: true, gondal : false, amreli: false, bhavnagar: false, delayedTime: 5
                })
            }
            else {
                this.setState({rajkot: true})
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("GujaratTravels")}>
                            <Image
                                source={require('../images/back.png')}
                                style={{ width: 25, height: 25, marginTop: 5, marginLeft: 10 }}
                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 18
                            }}>Gujarat Travels</Text>
                        </View>

                        <View>
                        </View>
                    </View>

                    <View style={{ alignItems: "center", marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", padding: 20, borderRadius: 10 }}>
                        <Text style={{
                            fontSize: 13,
                            fontWeight: "bold"
                        }}>Journey starts from Rajkot to Bhavnagar</Text>

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
                                <Text style={{ color: "green", fontWeight: "bold", fontSize: 10 }}>03 PM</Text>
                                <Text style={{ color: "green", fontWeight: "bold", fontSize: 10 }}>Rajkot</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            <View style={{ width: "25%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "grey", fontWeight: "bold", fontSize: 10 }}>04 PM</Text>
                                <Text style={{ color: "grey", fontWeight: "bold", fontSize: 10 }}>Gondal</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            <View style={{ width: "25%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "red", fontWeight: "bold", fontSize: 10 }}>06 PM</Text>
                                <Text style={{ color: "red", fontWeight: "bold", fontSize: 10 }}>Amreli</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            <View style={{ width: "25%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "red", fontWeight: "bold", fontSize: 10 }}>07 PM</Text>
                                <Text style={{ color: "red", fontWeight: "bold", fontSize: 10 }}>Bhavnagar</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            
                        </View>

                    </View>


                    {this.state.rajkot &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionRajkot}
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
                                    latitude: this.state.initialRegionRajkot.latitude,
                                    longitude: this.state.initialRegionRajkot.longitude,
                                }}>
                            </Marker>

                        </MapView>}

                    {this.state.gondal &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionGondal}
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
                                    latitude: this.state.initialRegionGondal.latitude,
                                    longitude: this.state.initialRegionGondal.longitude,
                                }}>
                            </Marker>

                        </MapView>}

                        {this.state.amreli &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionAmreli}
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
                                    latitude: this.state.initialRegionAmreli.latitude,
                                    longitude: this.state.initialRegionAmreli.longitude,
                                }}>
                            </Marker>

                        </MapView>}

                        {this.state.bhavnagar &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionBhavnagar}
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
                                    latitude: this.state.initialRegionBhavnagar.latitude,
                                    longitude: this.state.initialRegionBhavnagar.longitude,
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


