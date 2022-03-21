import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import BottomTabs, { bottomTabIcons } from '../components/homeScreen/BottomTabs'
import TeamHeader from '../components/teamScreen/TeamHeader'

export default function TeamScreen() {
    return (
        <SafeAreaView style={styles.safe}>
            <TeamHeader />
            <Text>Team Screen</Text>
            <BottomTabs icons={bottomTabIcons}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        backgroundColor: '#e4e7e4',
        flex: 1,
    },
})