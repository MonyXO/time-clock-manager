import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, StatusBar, Image, Touchable, TouchableOpacity } from 'react-native'
import HomeHeader from '../components/homeScreen/HomeHeader'
import TimeClock from '../components/homeScreen/TimeClock'
import ScheduleViewer from '../components/homeScreen/ScheduleViewer'
import DateHeader from '../components/homeScreen/DateHeader'
import TimeClockVersion2 from '../components/homeScreen/TimeClockVersion2'
import BottomTabs, { bottomTabIcons } from '../components/homeScreen/BottomTabs'

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar barStyle='dark-content' />
            <HomeHeader />
            <DateHeader />
            {/*<TimeClock />*/}
            <TimeClockVersion2 />
            <ScheduleViewer />
            <BottomTabs icons={bottomTabIcons} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        backgroundColor: '#e4e7e4',
        flex: 1,
    },
})
