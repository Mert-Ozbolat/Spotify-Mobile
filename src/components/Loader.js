import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loader = () => {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator style={'large'} color={'white'} />
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})