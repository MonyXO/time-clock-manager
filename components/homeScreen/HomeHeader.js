import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

export default function HomeHeader() {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Image 
                    source={{uri : 'https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png'}}
                    style={styles.menu}
                />
            </TouchableOpacity>
            <Text style={{
                position: 'relative',
                textAlign: 'center',
                marginTop: 20,
                marginLeft: 25,
                fontSize: 20,
                color: 'white',
                fontWeight: '600'
            }}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#f56423',
        height: 60,
        shadowOpacity: .30,
        shadowRadius: 2,
        shadowOffset: {height: 1, width: 2},
    },

    menu: {
        height: 30,
        width: 30,
        marginLeft: 10,
        marginTop: 15,
    },
}) 