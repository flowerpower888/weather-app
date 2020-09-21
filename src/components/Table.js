import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';
import { THEME } from '../theme';
import { WeatherCard } from './WeatherCard';

export const Table = ({ data }) => {
    const [detailsIsOpen, setDetailsIsOpen] = useState(false)
    const [selectedQuery, setSelectedQuery] = useState(null)

    return detailsIsOpen ? (
        <View style={styles.container}>
            <Text>{new Date(selectedQuery.date).toLocaleString()}</Text>
            <WeatherCard coords={selectedQuery.coords} location={selectedQuery.location} temp={selectedQuery.weather.temp} iconCode={selectedQuery.weather.iconCode} />
            <Button
                onPress={() => setDetailsIsOpen(false)}
                title="Back"
                color={THEME.MAIN_COLOR}
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
        : (
            <View style={styles.container}>

                <View style={styles.row}>
                    <View style={styles.headCell}><Text style={styles.text}>Date</Text></View>
                    <View style={styles.headCell}><Text style={styles.text}>Location</Text></View>
                </View>

                <View style={styles.col}>
                    {
                        data.map((query, i) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setSelectedQuery(query)
                                    setDetailsIsOpen(true)
                                }}
                                style={styles.row}
                                key={i}>
                                <View style={styles.colCell}>
                                    <Text style={styles.text}>{new Date(query.date).toLocaleString()}</Text>
                                </View>
                                <View style={styles.colCell}>
                                    <Text style={styles.text}>{` ${query.location}, ${query.coords.latitude}, ${query.coords.longitude}`}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>

            </View>
        )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'stretch'
    },
    headCell: {
        backgroundColor: '#eaeaea',
        borderColor: '#fff',
        borderWidth: 2,
        padding: 10,
        minWidth: 180
    },
    col: {
        flexDirection: 'column'
    },
    colCell: {
        padding: 10,
        borderColor: '#fff',
        borderWidth: 2,
        minWidth: 180,
        backgroundColor: '#f9f9f9'
    }
});