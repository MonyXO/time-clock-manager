import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Header() {
    return(
        <View style={styles.container}>
            <Text style={{
                position: 'relative',
                textAlign: 'center',
                marginTop: 15,
                fontSize: 28,
                color: 'white',
                fontWeight: 'bold'
            }}>Welcome, User!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f56423',
        height: 65,
    }
}) 