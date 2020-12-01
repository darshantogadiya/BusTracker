import React from 'react';
import {
   StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity,
   ImageBackground, StatusBar, Dimensions
} from 'react-native'

export default class Bus extends React.Component {
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
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
                     <Image
                        source={require('./images/back.png')}
                        style={{ width: 25, height: 25, marginTop: 5, marginLeft: 10 }}
                     />
                  </TouchableOpacity>

                  <View>
                     <Text style={{
                        fontWeight: "bold",
                        fontSize: 18
                     }}>Bus</Text>
                  </View>

                  <View>
                  </View>
               </View>

               <TouchableOpacity onPress={() => this.props.navigation.navigate("PatelTravels")}
                  style={{ flexDirection: "row", width: "90%", alignSelf: "center", elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", paddingVertical: 30, paddingHorizontal: 20, borderRadius: 10 }}>
                  <Text style={{
                     fontSize: 15,
                     alignSelf: "center",
                     fontWeight: "bold"
                  }}>Patel Travels</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={() => this.props.navigation.navigate("GujaratTravels")}
                  style={{ flexDirection: "row", width: "90%", alignSelf: "center", elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", paddingVertical: 30, paddingHorizontal: 20, borderRadius: 10 }}>
                  <Text style={{
                     fontSize: 15,
                     alignSelf: "center",
                     fontWeight: "bold"
                  }}>Gujarat Travels</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={() => this.props.navigation.navigate("NeetaTravels")}
                  style={{ flexDirection: "row", width: "90%", alignSelf: "center", elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", paddingVertical: 30, paddingHorizontal: 20, borderRadius: 10 }}>
                  <Text style={{
                     fontSize: 15,
                     alignSelf: "center",
                     fontWeight: "bold"
                  }}>Neeta Travels</Text>
               </TouchableOpacity>

            </View>
         </ImageBackground>
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