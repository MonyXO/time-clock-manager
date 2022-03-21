import React, { useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/material-outlined/24/f56423/home--v2.png',
        inactive: 'https://img.icons8.com/material-outlined/24/b0b7b1/home--v2.png',
    },
    {
        name: 'Team',
        active: 'https://img.icons8.com/ios-glyphs/30/f56423/user-group-man-woman.png',
        inactive: 'https://img.icons8.com/ios-glyphs/30/b0b7b1/user-group-man-woman.png',
    },
]

export default function BottomTabs({icons}) {
    const [activeTab, setActiveTab] = useState('Home')
    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{uri: activeTab === icon.name ? icon.active : icon.inactive}} style={styles.icon}/>
        </TouchableOpacity>
    )
    return(
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {icons.map((icon, index) => (
                <TouchableOpacity onPress={() => navigation.push('Home')}>
                    <Icon key={index} icon={icon} />
                </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        zIndex: 100,
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        marginTop: 25,
        height: 90,
        padding: 15,
        shadowOpacity: .30,
        shadowRadius: 2,
        shadowOffset: {height: -1, width: 1},
    },

    icon: {
        width: 30,
        height: 30,
    },

    vertLine: {
        height: "100%",
        width: 1,
        backgroundColor: 'black'
    }
})

