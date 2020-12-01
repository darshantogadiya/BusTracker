import React from 'react';
import {
   StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity,
   ImageBackground, StatusBar, Dimensions
} from 'react-native'
import firebase from 'react-native-firebase'

export default class ContactUs extends React.Component {
   

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
                     }}>Contact Us</Text>
                  </View>

                  <View>
                  </View>
               </View>

               <View style={{
                  backgroundColor: "#F7F7FB",
                  marginTop: 50,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  paddingBottom: 20,
                  elevation: 5,
                  width: "90%", alignSelf:"center"

               }}>
                  <Text style={{
                     fontSize: 18,
                     alignSelf: "center",
                     marginVertical: 20,
                     fontWeight: "bold"

                  }}>Welcome to profile screen!!</Text>

                  <View style={{ flexDirection: "row", width: "90%", alignSelf:"center" }}>
                     <View style = {{paddingRight:10}}>
                        <Image
                           source={require('./images/user.png')}
                           resizeMode={'contain'}
                           style={{
                              width: 20,
                              height: 20, marginTop: 10
                           }} />
                     </View>
                     <View>
                        <Text style={{
                           marginTop: 12, fontSize:12,
                           fontWeight: "bold", alignSelf: "center"
                        }}>Name
                        </Text>
                     </View>
                  </View>

                  <Text style={{
                     marginTop: 10, fontSize:12,
                     fontWeight: "bold",
                     color: "grey", width: "90%", alignSelf:"center"
                  }}>  BusTracker
                  </Text>
                  <View style = {{borderBottomWidth:0.4, marginTop:5, width: "90%", alignSelf:"center"}}></View>


                  <View style={{ flexDirection: "row", width: "90%", alignSelf:"center" }}>
                     <View style = {{paddingRight:10}}>
                        <Image
                           source={require('./images/email.png')}
                           resizeMode={'contain'}
                           style={{
                              width: 20,
                              height: 20, marginTop: 10
                           }} />
                     </View>
                     <View>
                        <Text style={{
                           marginTop: 12, fontSize:12,
                           fontWeight: "bold", alignSelf: "center"
                        }}>Email
                        </Text>
                     </View>
                  </View>

                  <Text style={{
                     marginTop: 10,fontSize:12,
                     fontWeight: "bold",
                     color: "grey", width: "90%", alignSelf:"center"
                  }}>  support@example.com
                  </Text>
                  <View style = {{borderBottomWidth:0.4, marginTop:5, width: "90%", alignSelf:"center"}}></View>


                  

               </View>

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