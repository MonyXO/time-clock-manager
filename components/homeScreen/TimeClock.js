import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default function TimeClock() {
    return(
        <View style={styles.container} >
            <Text style={styles.timeText}>
                Time Clock Manager
            </Text>
            <Text style={styles.statusText}>Status:</Text>
            <Text style={styles.status}>Clocked In</Text>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        textDecorationLine: 'underline',
                    }}>View Punches</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 300,
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: .30,
        shadowRadius: 2,
        shadowOffset: {height: 0, width: 1},
    },

    timeText: {
        position: 'relative',
        textAlign: 'center',
        paddingTop: 25,
        fontSize: 28,
        fontWeight: '700',
        color: '#b0b7b1',
    },

    statusText: {
        position: 'relative',
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 28,
        fontWeight: '700',
        color: '#b0b7b1',
    },

    status: {
        position: 'relative',
        textAlign: 'center',
        marginTop: 30,
        fontSize: 28,
        fontWeight: '700',
        color: '#f56423',
    },

    button: {
        backgroundColor: '#f56423',
        height: 40,
        width: 300,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 45,
        borderRadius: 20,
    }
}) 