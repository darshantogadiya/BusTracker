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

export default class stoawithPatel extends React.Component {
    constructor() {
        super();
        this.state = {
            initialRegionSurat: {
                latitude: 21.2050,
                longitude: 72.8408,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            coords: [],
            initialRegionVadodara: {
                latitude: 22.3135,
                longitude: 73.1810,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            coords: [],
            initialRegionAnkleshwar: {
                latitude: 21.6270,
                longitude: 73.0002,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            coords: [],
            initialRegionAnand: {
                latitude: 22.5608,
                longitude: 72.9667,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            coords: [],
            initialRegionAhmedabad: {
                latitude: 23.0273,
                longitude: 72.6008,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            coords: [],

            delayedTime: 0,
            // latitude: 21.2050,
            // longitude: 72.8408,
            // coordinates: [],

            curTime: "",
            date: '',

            surat: true,
            ankleshwar: false,
            vadodara: false,
            anand: false,
            ahmedabad: false
        };
    }

    componentDidMount() {
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        setInterval(() => {
            this.setState({
                date: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
            })
            if (new Date().getHours() >= 23) {
                this.setState({
                    surat: false, ankleshwar: true, vadodara: false, anand: false, ahmedabad: false, delayedTime: 5 
                })
            }
            else if (new Date().getHours() >= 22) {
                this.setState({
                    surat: true, ankleshwar: false, vadodara: false, anand: false, ahmedabad: false, delayedTime: 10
                })
            }
            else if (new Date().getHours() >= 4) {
                this.setState({
                    surat: false, ankleshwar: false, vadodara: false, anand: false, ahmedabad: true, delayedTime: 0
                })
            }
            else if (new Date().getHours() >= 2) {
                this.setState({
                    surat: false, ankleshwar: false, vadodara: false, anand: true, ahmedabad: false, delayedTime: 15
                })
            }
            else if (new Date().getHours() >= 1) {
                this.setState({
                    surat: false, ankleshwar: false, vadodara: true, anand: false, ahmedabad: false, delayedTime: 12
                })
            }
        }, 1000)

    }

    // componentDidMount() {
    //     this.fetchInitialRoutes();
    // }

    // async fetchInitialRoutes() {
    //     const startLoc = "40.1884979, 29.061018"
    //     const endLoc = "41.0082, 28.9184"
    //     try {
    //         const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${endLoc}&key=AIzaSyCQ9yrbgI_x_KloB58Nd6j3Q9HgUf-eIao`)
    //         const repJson = await resp.json();
    //         console.log(repJson);
    //         let points = polyline.decode(repJson.routes[0].overview_polyline.points);
    //         let coords = points.map((point, index) => ({
    //             latitude: point[0], longitude: point[1]
    //         }))
    //         this.setState({ coords: coords })
    //     }
    //     catch (error) {
    //         console.log("error", error)
    //     }
    // }

    // async  requestLocationPermission() {
    //     try {
    //         const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //             {
    //                 'title': 'Example App',
    //                 'message': 'Example App access to your location '
    //             }
    //         )
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             console.log("You can use the location")
    //             //alert("You can use the location");
    //         } else {
    //             console.log("location permission denied")
    //             //alert("Location permission denied");
    //         }
    //     } catch (err) {
    //         console.warn(err)
    //     }
    // }

    // async componentDidMount() {
    //     await this.requestLocationPermission()
    //     Geolocation.getCurrentPosition(
    //         position => {
    //             this.setState({
    //                 latitude: position.coords.latitude,
    //                 longitude: position.coords.longitude,
    //                 coordinates: this.state.coordinates.concat({
    //                     latitude: position.coords.latitude,
    //                     longitude: position.coords.longitude
    //                 })
    //             });
    //         },
    //         error => {
    //             Alert.alert(error.message.toString());
    //         },
    //         {
    //             showLocationDialog: true,
    //             enableHighAccuracy: true,
    //             timeout: 20000,
    //             maximumAge: 0
    //         }
    //     );
    //     Geolocation.watchPosition(
    //         position => {
    //             this.setState({
    //                 latitude: position.coords.latitude,
    //                 longitude: position.coords.longitude,
    //                 coordinates: this.state.coordinates.concat({
    //                     latitude: position.coords.latitude,
    //                     longitude: position.coords.longitude
    //                 })
    //             });
    //         },
    //         error => {
    //             console.log(error);
    //         },
    //         {
    //             showLocationDialog: true,
    //             enableHighAccuracy: true,
    //             timeout: 20000,
    //             maximumAge: 0,
    //             distanceFilter: 0
    //         }
    //     );
    // }

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
                        }}>Journey starts from Surat to Ahmedabad</Text>

                        <Text style={{
                            marginTop: 8,
                            fontSize: 13,
                            fontWeight: "bold",
                            color: "grey"
                        }}>Road-Map:</Text>

                        <View style={{ width: "82%", borderWidth: 0.5, marginTop: 10, borderRadius: 5 }}>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%" }}>
                            <View style={{ width: "18%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "green", fontWeight: "bold", fontSize: 10, }}>10 PM</Text>
                                <Text style={{ color: "green", fontWeight: "bold", fontSize: 10 }}>Surat</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            <View style={{ width: "18%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "grey", fontWeight: "bold", fontSize: 10 }}>11 PM</Text>
                                <Text style={{ color: "grey", fontWeight: "bold", fontSize: 10 }}>Ankleshwar</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            <View style={{ width: "18%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "grey", fontWeight: "bold", fontSize: 10 }}>01 AM</Text>
                                <Text style={{ color: "grey", fontWeight: "bold", fontSize: 10 }}>Vadodara</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            <View style={{ width: "18%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "grey", fontWeight: "bold", fontSize: 10 }}>02 AM</Text>
                                <Text style={{ color: "grey", fontWeight: "bold", fontSize: 10 }}>Anand</Text>
                            </View>
                            <View style={{ width: "2%" }}></View>
                            <View style={{ width: "18%", alignItems: "center" }}>
                                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>|</Text>
                                <Text style={{ color: "red", fontWeight: "bold", fontSize: 10 }}>04 AM</Text>
                                <Text style={{ color: "red", fontWeight: "bold", fontSize: 10 }}>Ahmedabad</Text>
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

                    {this.state.surat &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionSurat}
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
                                    latitude: this.state.initialRegionSurat.latitude,
                                    longitude: this.state.initialRegionSurat.longitude,
                                }}>
                            </Marker>

                        </MapView>}

                    {this.state.ankleshwar &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionAnkleshwar}
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
                                    latitude: this.state.initialRegionAnkleshwar.latitude,
                                    longitude: this.state.initialRegionAnkleshwar.longitude,
                                }}>
                            </Marker>

                        </MapView>}

                    {this.state.vadodara &&
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1, marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", borderRadius: 20, marginBottom: 20 }}
                            region={this.state.initialRegionVadodara}
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
                                    latitude: this.state.initialRegionVadodara.latitude,
                                    longitude: this.state.initialRegionVadodara.longitude,
                                }}>
                            </Marker>

                        </MapView>}

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