import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function DateHeader() {
    return(
        <View style={styles.container}>
            <Text style={{
                position: 'relative',
                textAlign: 'left',
                marginTop: 15,
                marginLeft: 20,
                fontSize: 18,
                color: '#99a29b',
                fontWeight: 'bold'
            }}>Today: {currentDate()}</Text>
        </View>
    )
}
const currentDate=()=>{
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();

    return month + '/' + date + '/' + year;
}
const styles = StyleSheet.create({
    container: {
    }
}) 