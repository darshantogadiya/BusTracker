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

export default class commonLive extends React.Component {
    constructor() {
        super();
        this.state = {
            latitude: 0,
            longitude: 0,
            coordinates: [],
            
        };
    }

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
    
      async componentDidMount() {
        await this.requestLocationPermission()
        Geolocation.getCurrentPosition(
          position => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              coordinates: this.state.coordinates.concat({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              })
            });
          },
          error => {
            Alert.alert(error.message.toString());
          },
          {
            showLocationDialog: true,
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
          }
        );
        Geolocation.watchPosition(
          position => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              coordinates: this.state.coordinates.concat({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              })
            });
          },
          error => {
            console.log(error);
          },
          {
            showLocationDialog: true,
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0,
            distanceFilter: 0
          }
        );
      }

      render() {
        return (
          <View style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{ flex: 1 }}
              region={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
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
            </MapView>
            {/* <MapView
            style = {{flex:1}}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            /> */}
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    });