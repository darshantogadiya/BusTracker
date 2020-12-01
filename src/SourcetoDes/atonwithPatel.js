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

export default class atonwithPatel extends React.Component {
    constructor() {
        super();
        this.state = {
            
            initialRegionNadiad: {
                latitude: 22.6921,
                longitude: 72.8595,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            initialRegionAnand: {
                latitude: 22.5608,
                longitude: 72.9667,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            
            coords: [],

            delayedTime: 0,

            curTime: "",
            date: '',

            anand: true,
            nadiad: false,
            
        };
    }

    componentDidMount() {

        setInterval(() => {
            this.setState({
                date: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
            })
            if (new Date().getHours() >= 1 && new Date().getMinutes() >= 30) {
                this.setState({
                    anand: true, nadiad : false, delayedTime: 5
                })
            }
            else if (new Date().getHours() >= 2 && new Date().getMinutes() >= 0) {
                this.setState({
                    anand: false, nadiad : true, delayedTime: 0
                })
            }
            else {
                this.setState({anand: true})
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("PatelTravels")}>
                            <Image
                                source={require('../images/back.png')}
                                style={{ width: 25, height: 25, marginTop: 5, marginLeft: 10 }}
                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 18
                            }}>Patel Travels</Text>
                        </View>

                        <View>
                        </View>
                    </View>

                    <View style={{ alignItems: "center", marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", padding: 20, borderRadius: 10 }}>
                        <Text style={{
                            fontSize: 13,
                            fontWeight: "bold"
                        }}>Journey starts from Anand to Nadiad</Text>

                        <Text style={{
                            marginTop: 8,
                            fontSize: 13,
                            fontWeight: "bold",
                            color: "grey"
                        }}>Road-Map:</Text>

                        <View style={{ width: "82%", borderWidth: 0.5, marginTop: 10, borderRadius: 5 }}>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%" }}>
                            <View style={{ width: "50%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "green", fontWeight: "bold", fontSize: 10 }}>01:30 PM</Text>
                                <Text style={{ color: "green", fontWeight: "bold", fontSize: 10 }}>Anand</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            <View style={{ width: "50%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "red", fontWeight: "bold", fontSize: 10 }}>02 PM</Text>
                                <Text style={{ color: "red", fontWeight: "bold", fontSize: 10 }}>Nadiad</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            
                        </View>

                    </View>



                    {/* <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                        region={this.state.initialRegion}>
                        <Polyline
                            coordinates={this.state.coords}
                            strokeColor="red"
                            strokeWidth={1}
                        ></Polyline>

                    </MapView> */}

                    {this.state.anand &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionAnand}
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
                                    latitude: this.state.initialRegionAnand.latitude,
                                    longitude: this.state.initialRegionAnand.longitude,
                                }}>
                            </Marker>

                        </MapView>}

                    {this.state.nadiad &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionNadiad}
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
                                    latitude: this.state.initialRegionNadiad.latitude,
                                    longitude: this.state.initialRegionNadiad.longitude,
                                }}>
                            </Marker>

                        </MapView>}

                    
                        <View style={{ flexDirection: "row", justifyContent:"center", alignItems:"center" }}>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: "bold",
                            marginBottom: 20,
                        }}>The bus is delayed by </Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: "bold",
                            marginBottom: 20,
                        }}>{this.state.delayedTime} </Text>
                        <Text style={{
                            fontSize: 12,
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


{/* AIzaSyCQ9yrbgI_x_KloB58Nd6j3Q9HgUf-eIao */ }

{/* <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                        region={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
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
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                            }}>
                        </Marker>

                        <Polyline
                            coordinates={this.state.coordinates}
                            strokeColor="#bf8221"
                            strokeColors={[
                                '#bf8221',
                                '#ffe066',
                                '#ffe066',
                                '#ffe066',
                                '#ffe066',
                            ]}
                            strokeWidth={3}
                        />

                    </MapView> */}