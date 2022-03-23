import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native'
import { useState } from 'react';

export default function TimeClock() {
    const [modalVisible, setModalVisible] = useState(false);
    return(

        <View style={styles.container}>

            {/* CLOCK IN CONFIRMATION SREEN */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.slideText}>Confirm Clock In:</Text>

                        <View style={{height: '40%', width: '50%', justifyContent: 'center'}}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 48,
                                color: '#99a29b',
                                fontWeight: '800',
                            }}>{getCurrentTime()}</Text>
                        </View>

                        <View style={{flexDirection: 'row', }}>
                            <TouchableOpacity
                                style={[styles.confirmButton, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.confirmButton, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Clock In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


            {/* UPPER CONTAINER */}
            <View style={styles.upperContainer}>

                {/* USER CIRCLE */}
                <View style={styles.user}>

                    {/* STATUS INDICATOR */}
                    <View style={styles.statusIndicator}></View>
                
                    {/* USER TEXT */}
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: '500',
                        color: 'white',
                    }}>TG</Text>
                </View>

                {/* STATUS TEXT */}
                <Text style={styles.statusText}>
                    Status: 
                </Text>

                {/* STATUS TEXT */}
                <Text style={styles.status}>
                    Clocked Out 
                </Text>
            
            </View>

            {/* CLOCK IN BUTTON */}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={styles.button}>

                    {/* CLOCK IN TEXT */}
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white',
                    }}>Clock In</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const getCurrentTime=()=>{
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    if(minute == 0) {
        return hour + ':00' + 'am';
    } else if (minute > 0 && minute < 10) {
        return hour + ':0' + minute + 'am';
    } else {
        return hour + ':' + minute + 'am';
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 150,
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: .30,
        shadowRadius: 2,
        shadowOffset: {height: 0, width: 1},
    },

    upperContainer: {
        flexDirection: 'row',
    },

    statusIndicator: {
        width: 15,
        height: 15,
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: '#99a29b',
        borderWidth: 1,
    },
/*
#2ac725 green color 
*/
    user: {
        width: 50,
        height: 50,
        backgroundColor: '#f56423',
        marginLeft: 25,
        marginTop: 25,
        borderRadius: 50,
    },

    timeText: {
        paddingTop: 25,
        fontSize: 28,
        fontWeight: '700',
        color: '#b0b7b1',
    },

    statusText: {
        paddingTop: 35,
        paddingLeft: 15,
        fontSize: 24,
        fontWeight: '700',
        color: '#99a29b',
    },

    status: {
        marginTop: 35,
        marginLeft: 5,
        fontSize: 24,
        fontWeight: '700',
        color: '#f56423',
    },

    button: {
        backgroundColor: '#f56423',
        height: 40,
        flex: 0,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 15,
        marginRight: 25,
        borderRadius: 20,
    },

    confirmButton: {
        backgroundColor: '#f56423',
        borderRadius: 20,
        justifyContent: 'center',
        height: 40,
        width: '50%',
        elevation: 2,
        margin: 5,
      },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    modalView: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        height: 225,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -1
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 100
    },

    textStyle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },

    slideText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#f56423',
    }
}) 