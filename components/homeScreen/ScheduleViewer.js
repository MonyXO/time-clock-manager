import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function ScheduleViewer() {
    return(
        <View style={styles.container}>
            <Text style={styles.schedule}>Schedule:</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 300,
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: .30,
        shadowRadius: 2,
        shadowOffset: {height: 0, width: 1},
    },

    schedule: {
        textAlign: 'center',
        paddingTop: 25,
        fontSize: 28,
        fontWeight: '700',
        color: '#b0b7b1',
    }
}) 