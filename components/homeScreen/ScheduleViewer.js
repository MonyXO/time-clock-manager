import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function ScheduleViewer() {
    return(
        <View style={styles.container}>
            <Text style={styles.schedule}>Schedule:</Text>
            <View style={styles.line}></View>
            <Text style={styles.days}>SUNDAY: </Text>
            <View style={styles.line}></View>
            <Text style={styles.days}>MONDAY: </Text>
            <View style={styles.line}></View>
            <Text style={styles.days}>TUESDAY: </Text>
            <View style={styles.line}></View>
            <Text style={styles.days}>WEDNESDAY: </Text>
            <View style={styles.line}></View>
            <Text style={styles.days}>THURSDAY: </Text>
            <View style={styles.line}></View>
            <Text style={styles.days}>FRIDAY: </Text>
            <View style={styles.line}></View>
            <Text style={styles.days}>SATURDAY: </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 405,
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
        paddingTop: 15,
        fontSize: 28,
        fontWeight: '700',
        color: '#b0b7b1',
    },

    line: {
        borderBottomColor: '#b0b7b1',
        borderBottomWidth: 1,
        paddingTop: 15,
        marginLeft: 20,
        marginRight: 20,
    },

    days: {
        paddingLeft: 25,
        paddingTop: 15,
        color: '#89938a',
        fontSize: 14,
        fontWeight: '600',
    }
}) 