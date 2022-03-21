import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'

/* example data to use for scroll 
    - need to connect to database to retrieve users:
        not scheduled
        scheduled
            clocked in/out - 
            
    - connection to mySQL needed**
*/
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.listLines}></View>
    </View>
);

// Team Scroll Component
export default function UnscheduledTeam() {

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        // Scroll Container 
        <View style={styles.container}>
            <View style={styles.header}>
                {/* Header Title */}
                <Text style={styles.scheduledText}>UNSCHEDULED</Text>
                <View style={styles.line}></View>
            </View>
            <FlatList
                style={styles.list}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '90%',
        height: 295,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 10,
        shadowOpacity: .30,
        shadowRadius: 2,
        shadowOffset: {height: 0, width: 1},
    },
    scheduledText: {
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 28,
        fontWeight: '700',
        color: '#b0b7b1',
    },
    statusIndicator: {
        width: 15,
        height: 15,
        backgroundColor: '#2ac725',
        borderRadius: 50,
        borderColor: '#99a29b',
        borderWidth: 1,
        marginLeft: 30,
    },
/*
#2ac725 green color 
*/
    line: {
        borderBottomColor: '#b0b7b1',
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    list: {
        marginTop: 10,
        marginBottom: 10,
    },
    item: {
        marginLeft: 20,
    },
    listLines: {
        borderBottomColor: '#b0b7b1',
        borderBottomWidth: 1,
        marginVertical: 15,
        marginRight: 20,

    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        color: '#b0b7b1',
    },
})