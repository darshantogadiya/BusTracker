import React from 'react';
import {
    StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity,
    ImageBackground, StatusBar, Dimensions
} from 'react-native'

export default class PatelTravels extends React.Component {
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Bus")}>
                            <Image
                                source={require('./images/back.png')}
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

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("stoawithPatel")}
                        style={{ flexDirection: "row", marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", padding: 20, borderRadius: 10 }}>

                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: "70%" }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold"
                                    }}>Surat to Ahmedabad</Text>
                                </View>
                                <View style={{ width: "30%", alignItems: "flex-end" }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold"
                                    }}>10:00 PM</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "grey"
                                    }}>04:00 AM</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row",  }}>
                                <View style={{ width: "50%" }}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color:"grey"
                                    }}>A/C Sleeper (2+1)</Text>
                                </View> 
                            </View>

                            <View style={{ flexDirection: "row", marginTop:8 }}>
                                <View style={{ width: "50%" }}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color:"grey"
                                    }}>Journey Time: 6h 00m</Text>
                                </View> 
                            </View>

                            <View style={{ flexDirection: "row", justifyContent:"space-between" , marginTop:8}}>
                                <View style={{ borderColor: "green", borderWidth: 1, borderRadius:5 }}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color:"green",
                                        padding: 5
                                    }}>Rating: 4.4</Text>
                                </View>
                    
                                <View style={{  }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold",
                                        color:"red"
                                    }}>₹ 710</Text>
                                </View> 
                            </View>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("atonwithPatel")}
                        style={{ flexDirection: "row", marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", padding: 20, borderRadius: 10 }}>

                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: "70%" }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold"
                                    }}>Anand to Nadiad</Text>
                                </View>
                                <View style={{ width: "30%", alignItems: "flex-end" }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold"
                                    }}>01:30 PM</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "grey"
                                    }}>02:00 PM</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row",  }}>
                                <View style={{ width: "80%" }}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color:"grey"
                                    }}>NON A/C Seater / Sleeper (2+1)</Text>
                                </View> 
                            </View>

                            <View style={{ flexDirection: "row", marginTop:8 }}>
                                <View style={{ width: "50%" }}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color:"grey"
                                    }}>Journey Time: 0h 30m</Text>
                                </View> 
                            </View>

                            <View style={{ flexDirection: "row", justifyContent:"space-between" , marginTop:8}}>
                                <View style={{ borderColor: "green", borderWidth: 1, borderRadius:5 }}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color:"green",
                                        padding: 5
                                    }}>Rating: 3.9</Text>
                                </View>
                    
                                <View style={{  }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold",
                                        color:"red"
                                    }}>₹ 100</Text>
                                </View> 
                            </View>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("ntoawithPatel")}
                        style={{ flexDirection: "row", marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", padding: 20, borderRadius: 10 }}>

                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: "70%" }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold"
                                    }}>Nadiad to Ahmedabad</Text>
                                </View>
                                <View style={{ width: "30%", alignItems: "flex-end" }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold"
                                    }}>02:00 PM</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "grey"
                                    }}>02:40 PM</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row",  }}>
                                <View style={{ width: "80%" }}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color:"grey"
                                    }}>NON A/C Seater / Sleeper (2+1)</Text>
                                </View> 
                            </View>

                            <View style={{ flexDirection: "row", marginTop:8 }}>
                                <View style={{ width: "50%" }}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color:"grey"
                                    }}>Journey Time: 0h 40m</Text>
                                </View> 
                            </View>

                            <View style={{ flexDirection: "row", justifyContent:"space-between" , marginTop:8}}>
                                <View style={{ borderColor: "green", borderWidth: 1, borderRadius:5 }}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color:"green",
                                        padding: 5
                                    }}>Rating: 4.5</Text>
                                </View>
                    
                                <View style={{  }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold",
                                        color:"red"
                                    }}>₹ 350</Text>
                                </View> 
                            </View>

                        </View>

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