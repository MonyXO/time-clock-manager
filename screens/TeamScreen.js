import React from 'react'
import { Text, SafeAreaView, StyleSheet, FlatList, View } from 'react-native'
import TeamHeader from '../components/teamScreen/TeamHeader'
import TimeClockVersion2 from '../components/homeScreen/TimeClockVersion2'
import ScheduledTeam from '../components/teamScreen/ScheduledTeam'
import UnscheduledTeam from '../components/teamScreen/UnscheduledTeam'

// Team Screen
export default function TeamScreen({navigation}) {

    return (
        <SafeAreaView style={styles.container}>
            {/* App Structure */}
            <TeamHeader />
            <ScheduledTeam />
            <UnscheduledTeam />
            {/*<BottomTabs icons={bottomTabIcons}/>*/}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e4e7e4',
        flex: 1,
    },
})