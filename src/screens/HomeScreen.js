import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Loader from '../components/Loader'

const HomeScreen = () => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            colors={['#040306', '#131624']}>

            <Loader />

        </LinearGradient>

    )
}

export default HomeScreen

const styles = StyleSheet.create({

})