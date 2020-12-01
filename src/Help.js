import React from 'react';
import {
   StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity, ScrollView,
   ImageBackground, StatusBar, Dimensions
} from 'react-native'
import Modal from "react-native-modal";

export default class Help extends React.Component {
   state = {
      isModalVisible: false,
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
                     }}>About Us</Text>
                  </View>

                  <View style = {{width:"30%"}}>
                  </View>
               </View>

               <View style={{
                  backgroundColor: "#F7F7FB",
                  marginTop: 20,
                  marginBottom: 100,
                  marginHorizontal: 10,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  paddingHorizontal: 20,
                  elevation: 5

               }}>
                  <TouchableOpacity onPress={() => this.setState({ isModalVisible: true })}
                     style={{
                        position: "absolute",
                        bottom: 5, right: 5, zIndex: 1,
                        alignSelf: "flex-end",
                        backgroundColor: "#F9B450",
                        elevation: 5,
                        padding: 10,
                        width: 60, height: 60,
                        borderRadius: 80 / 2
                     }}>
                     <Image
                        source={require('./images/feedback.png')}
                        style={{ width: 40, height: 40, }}
                     />
                  </TouchableOpacity>
                  <ScrollView showsVerticalScrollIndicator={false}>
                     <Text style={{
                        marginTop: 10,
                        fontSize: 13,
                        alignSelf: "center",
                        fontWeight: "bold"
                     }}>Is BusTracker GPS Tracking Software integrated with the map?</Text>
                     <Text style={{
                        marginTop: 5,
                        fontSize: 13,
                        alignSelf: "center",
                        color: "grey"
                     }}>Yes, BusTracker tracking software is integrated with Google Maps. It helps parents track the location of the BusTracker in real-time via the app so that they can pick up their children at right time.</Text>

                     <Text style={{
                        marginTop: 10,
                        fontSize: 13,
                        alignSelf: "center",
                        fontWeight: "bold"
                     }}>What are the key benefits of BusTracker GPS Tracking System?</Text>
                     <Text style={{
                        marginTop: 10,
                        fontSize: 13,
                        fontWeight: "bold",
                        color: "grey"
                     }}>a. Live Tracking of Vehicle</Text>
                     <Text style={{
                        fontSize: 13,
                        alignSelf: "center",
                        color: "grey"
                     }}>BusTracker tracking software is a GPS-enabled system with RFID ID cards.

This monitoring system provides complete security to students and details of the location of their routes.</Text>
                     <Text style={{
                        marginTop: 10,
                        fontSize: 13,
                        fontWeight: "bold",
                        color: "grey"
                     }}>a. Live Tracking of Vehicle</Text>
                     <Text style={{
                        fontSize: 13,
                        alignSelf: "center",
                        color: "grey"
                     }}>Yes, BusTracker tracking software is integrated with Google Maps. It helps parents track the location of the BusTracker in real-time via the app so that they can pick up their children at right time.</Text>

                     <Text style={{
                        marginTop: 10,
                        fontSize: 13,
                        alignSelf: "center",
                        fontWeight: "bold"
                     }}>Is the Internet connection necessary to receive notifications?</Text>
                     <Text style={{
                        marginTop: 5,
                        fontSize: 13,
                        alignSelf: "center",
                        color: "grey"
                     }}>No, internet connection is not necessary.

You will receive notifications via SMS too.</Text>

                     <Text style={{
                        marginTop: 10,
                        fontSize: 13,
                        alignSelf: "center",
                        fontWeight: "bold"
                     }}>Is it possible to communicate with the driver during a trip?</Text>
                     <Text style={{
                        marginTop: 5,
                        fontSize: 13,
                        alignSelf: "center",
                        color: "grey"
                     }}>Yes, it’s possible to communicate with the drivers through BusTracker GPS tracking app as the software is integrated for both the drivers and the parents.</Text>

                     <Text style={{
                        marginTop: 10,
                        fontSize: 13,
                        alignSelf: "center",
                        fontWeight: "bold"
                     }}>Does the BusTracker Tracking Software ensure complete student safety on the BusTracker?</Text>
                     <Text style={{
                        marginTop: 5,
                        fontSize: 13,
                        alignSelf: "center",
                        color: "grey"
                     }}>Of course. The tracking software sends real-time updates of the BusTracker to each user about students boarding the bus and getting off safely.

                        Parents and school admins are able to track the location of the bus whenever they want.

The app allows parents to analyze the historical movement of the buses to create safer bus trips.</Text>

                     <Text style={{
                        marginTop: 10,
                        fontSize: 13,
                        alignSelf: "center",
                        fontWeight: "bold"
                     }}>Does this BusTracker tracking software notify me instantly in case of route deviation or over speeding?</Text>
                     <Text style={{
                        marginTop: 5,
                        fontSize: 13,
                        alignSelf: "center",
                        color: "grey"
                     }}>Yeah, the parents will receive alert notification in case the bus deviates its daily route or driver increases the speed.</Text>

                     <Text style={{
                        marginTop: 10,
                        fontSize: 13,
                        alignSelf: "center",
                        fontWeight: "bold"
                     }}>Does the BusTracker Tracking System create the BusTracker route automatically?</Text>
                     <Text style={{
                        marginTop: 5,
                        fontSize: 13,
                        alignSelf: "center",
                        color: "grey"
                     }}>The BusTracker tracking system helps you optimize the bus routes in an efficient way.

You can select your criteria like the number of students and buses, road hazards, type of roads, and time taken in traveling. The auto-routes allocation processes save the time of both the drivers and the parents.</Text>

                  </ScrollView>
               </View>

               <Modal isVisible={this.state.isModalVisible} animationIn='zoomIn' animationOut='zoomOut' >
                  <View style={{ backgroundColor: "#fff", borderRadius: 30 }}>
                     <View style={{ marginVertical: 10, paddingBottom: 5, borderBottomWidth: 0.4 }}>
                        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 13 }}>Users Feedback</Text>
                     </View>
                     <ScrollView style = {{marginHorizontal:20}}>
                        <View style = {{paddingVertical:3, borderBottomWidth:0.4}}>
                           <Text style = {{fontWeight:"bold", fontSize:12}}>Tarannum parveen</Text>
                           <Text style = {{fontSize:12}}>4.5 rating, March 1, 2020</Text>
                           <Text style = {{color:"grey", fontSize:12, textAlign: "justify",}}>This is absolutely nice and accurate tracking application..I used to travel both AC and Non Ac buses and found perfect accuracy of bus arriving at bus stop..I appreciate NMMT to providing such a wonderful app which also provides online ticking facilities. Keep it up..</Text>
                        </View>
                        <View style = {{paddingVertical:3, borderBottomWidth:0.4}}>
                           <Text style = {{fontWeight:"bold", fontSize:12}}>Kul thakur</Text>
                           <Text style = {{fontSize:12}}>4 rating, January 10, 2020</Text>
                           <Text style = {{color:"grey", fontSize:12, textAlign: "justify",}}>Very poor accuracy and generally error comes in this update. Plz make it accurate and Rome error. After updating not able to open</Text>
                        </View>
                        <View style = {{paddingVertical:3}}>
                           <Text style = {{fontWeight:"bold", fontSize:12}}>Srinivasan PJ</Text>
                           <Text style = {{fontSize:12}}>4.8 rating, March 20, 2020</Text>
                           <Text style = {{color:"grey", fontSize:12, textAlign: "justify",}}>Thanks for developing a app for local buses. I used two times & waited for a bus in a stop, exactly bus cames. But some buses are not shown. Please implement for all govt buses including SETC mofussil buses.</Text>
                        </View>
                     </ScrollView>
                     <View style={{
                        marginVertical: 10
                     }}>
                        <TouchableOpacity style={{
                           alignSelf: "center",
                           backgroundColor: "#F8883C",
                           paddingHorizontal: 50,
                           paddingVertical: 10,
                           borderRadius: 50
                        }}
                           onPress={() => this.setState({ isModalVisible: false })}>
                           <Text style={{
                              color: "white",
                              fontSize: 13,
                              fontWeight: "bold"
                           }}>Close</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </Modal>

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