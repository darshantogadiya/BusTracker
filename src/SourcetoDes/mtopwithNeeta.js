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

export default class mtopwithNeeta extends React.Component {
    constructor() {
        super();
        this.state = {
            
            
            initialRegionPune: {
                latitude: 18.530823,
                longitude: 73.847466,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },

            initialRegionLonavala: {
                latitude: 18.748060,
                longitude: 73.407219,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            initialRegionMumbai: {
                latitude: 28.6666,
                longitude: 77.2269,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            
            coords: [],

            delayedTime: 0,

            curTime: "",
            date: '',

            pune: false,
            lonavala: false,
            mumbai: true

            
        };
    }

    componentDidMount() {

        setInterval(() => {
            this.setState({
                date: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
            })
            if (new Date().getHours() >= 22 && new Date().getMinutes() >= 0) {
                this.setState({
                    pune: true, lonavala : false, mumbai: false, delayedTime: 0
                })
            }
            else if (new Date().getHours() >= 19 && new Date().getMinutes() >= 0) {
                this.setState({
                    pune: false, lonavala : true, mumbai: false, delayedTime: 13
                })
            }
            else if (new Date().getHours() >= 17 && new Date().getMinutes() >= 0) {
                this.setState({
                    pune: false, lonavala : false, mumbai: true, delayedTime: 20
                })
            }
            
            else {
                this.setState({mumbai: true})
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
                        }}>Journey starts from Mumbai to Pune</Text>

                        <Text style={{
                            marginTop: 8,
                            fontSize: 13,
                            fontWeight: "bold",
                            color: "grey"
                        }}>Road-Map:</Text>

                        <View style={{ width: "82%", borderWidth: 0.5, marginTop: 10, borderRadius: 5 }}>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%" }}>
                            <View style={{ width: "30%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "green", fontWeight: "bold", fontSize: 10 }}>05 PM</Text>
                                <Text style={{ color: "green", fontWeight: "bold", fontSize: 10 }}>Mumbai</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            <View style={{ width: "30%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "grey", fontWeight: "bold", fontSize: 10 }}>07 PM</Text>
                                <Text style={{ color: "grey", fontWeight: "bold", fontSize: 10 }}>Lonavala</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            <View style={{ width: "30%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "red", fontWeight: "bold", fontSize: 10 }}>10 PM</Text>
                                <Text style={{ color: "red", fontWeight: "bold", fontSize: 10 }}>Pune</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>

                            
                        </View>

                    </View>


                    {this.state.mumbai &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionMumbai}
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
                                    latitude: this.state.initialRegionMumbai.latitude,
                                    longitude: this.state.initialRegionMumbai.longitude,
                                }}>
                            </Marker>

                        </MapView>}

                    {this.state.lonavala &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionLonavala}
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
                                    latitude: this.state.initialRegionLonavala.latitude,
                                    longitude: this.state.initialRegionLonavala.longitude,
                                }}>
                            </Marker>

                        </MapView>}

                        {this.state.pune &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionPune}
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
                                    latitude: this.state.initialRegionPune.latitude,
                                    longitude: this.state.initialRegionPune.longitude,
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


