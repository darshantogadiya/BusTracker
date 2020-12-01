import React from 'react';
import {
   StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity, Linking,
   ImageBackground, StatusBar, Dimensions
} from 'react-native'

export default class Compain_Box extends React.Component {
   state = {
      complainText: "",
      title: ""
   }

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
                  <TouchableOpacity style = {{width:"30%"}} onPress={() => this.props.navigation.navigate("Main")}>
                     <Image
                        source={require('./images/back.png')}
                        style={{ width: 25, height: 25, marginTop: 5, marginLeft: 10 }}
                     />
                  </TouchableOpacity>

                  <View style = {{width:"30%"}}>
                     <Text style={{
                        fontWeight: "bold",
                        fontSize: 18
                     }}>Complain Box</Text>
                  </View>

                  <View style = {{width:"30%"}}>
                  </View>
               </View>

               <View style={{ marginHorizontal: 20, borderRadius: 10, marginTop: 20, backgroundColor: "#F7F7FB", elevation: 5, paddingHorizontal: 10 }}>
                  <TextInput
                     placeholder="Enter a title of mail"
                     autoCapitalize="none"
                     onChangeText={title => this.setState({ title })}
                     value={this.state.title}
                  />
               </View>

               <View style={{ marginHorizontal: 20, marginTop: 10, paddingHorizontal: 10 }}>
                  <View style={{ flexDirection: "row" }}>
                     <Text
                        style={{
                           fontWeight: "bold",
                           fontSize: 13
                        }}>If you drop a complain then it's necessary to add Bus name with Bus number in complain box *</Text>
                  </View>
               </View>

               <View style={{ marginHorizontal: 20, borderRadius: 10, marginTop: 10, backgroundColor: "#F7F7FB", elevation: 5, paddingHorizontal: 10 }}>
                  <TextInput
                     placeholder="Enter a complain"
                     autoCapitalize="none"
                     multiline={true}
                     numberOfLines={10}
                     onChangeText={complainText => this.setState({ complainText })}
                     value={this.state.complainText}
                  />
               </View>

               <View style={{
                  marginTop: 30
               }}>
                  <TouchableOpacity onPress={() => Linking.openURL(`mailto:nupurthakkar030@gmail.com?subject=${this.state.title}&body=${this.state.complainText}`)}
                     style={{
                        alignSelf: "center",
                        backgroundColor: "#F8883C",
                        paddingHorizontal: 50,
                        paddingVertical: 10,
                        borderRadius: 50
                     }}
                  >
                     <Text style={{
                        color: "white",
                        fontSize: 13,
                        fontWeight: "bold"
                     }}>Drop a mail for complain</Text>
                  </TouchableOpacity>
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