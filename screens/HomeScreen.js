import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import Header from '../components/homeScreen/Header'
import TimeClock from '../components/homeScreen/TimeClock'
import ScheduleViewer from '../components/homeScreen/ScheduleViewer'

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.safe}>
            <Header />
            <TimeClock />
            <ScheduleViewer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        backgroundColor: '#e4e7e4',
        flex: 1,
    },
})