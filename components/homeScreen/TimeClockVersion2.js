import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default function TimeClock() {
    return(

        <View style={styles.container}>

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
            <TouchableOpacity>
                <View style={styles.button}>

                    {/* CLOCK IN TEXT */}
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: '500',
                        color: 'white',
                    }}>Clock In</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
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
    }
}) 