import React from 'react';
import {
    StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity,
    ImageBackground, StatusBar, Dimensions
} from 'react-native'

export default class NeetaTravels extends React.Component {
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
                            }}>Neeta Travels</Text>
                        </View>

                        <View>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("atodwithNeeta")}
                        style={{ flexDirection: "row", marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", padding: 20, borderRadius: 10 }}>

                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: "70%" }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold"
                                    }}>Ahmedabad to Delhi</Text>
                                </View>
                                <View style={{ width: "30%", alignItems: "flex-end" }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold"
                                    }}>05:00 PM</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "grey"
                                    }}>10:00 AM</Text>
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
                                    }}>Journey Time: 17h 00m</Text>
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
                                    }}>₹ 2,400</Text>
                                </View> 
                            </View>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("atomwithNeeta")}
                        style={{ flexDirection: "row", marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", padding: 20, borderRadius: 10 }}>

                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: "70%" }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold"
                                    }}>Ahmedabad to Mumbai</Text>
                                </View>
                                <View style={{ width: "30%", alignItems: "flex-end" }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold"
                                    }}>09:00 PM</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "grey"
                                    }}>06:00 AM</Text>
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
                                    }}>Journey Time: 9h 00m</Text>
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
                                    }}>₹ 1,500</Text>
                                </View> 
                            </View>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("mtopwithNeeta")}
                        style={{ flexDirection: "row", marginHorizontal: 15, elevation: 5, marginTop: 20, backgroundColor: "#F3EFEF", padding: 20, borderRadius: 10 }}>

                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: "70%" }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold"
                                    }}>Mumbai to Pune</Text>
                                </View>
                                <View style={{ width: "30%", alignItems: "flex-end" }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: "bold"
                                    }}>5:00 PM</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "grey"
                                    }}>10:00 PM</Text>
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
                                    }}>Journey Time: 5h 00m</Text>
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
                                    }}>₹ 500</Text>
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