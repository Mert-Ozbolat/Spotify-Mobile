import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'


const LoginScreen = () => {

    const navigation = useNavigation();

    return (
        <LinearGradient
            style={{ flex: 1 }}
            colors={['#040306', '#131624']}>

            <SafeAreaView>
                <View style={{ height: 80 }} />
                <Entypo
                    name='spotify'
                    colors='white'
                    size={80}
                    style={{ textAlign: 'center' }}
                />

                <Text style={styles.loginTitle}>Millions of Songs Free on Spotify!</Text>

                <View style={{ height: 80 }} />

                <Pressable
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Main')}>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: '500' }}>Sign In with Spotify!!</Text>
                </Pressable>

                <Pressable style={styles.button}>
                    <MaterialIcons name="phone-android" color="white" size={24} />
                    <Text style={styles.buttonText}>Continue with phone number</Text>
                </Pressable>

                <Pressable style={styles.button}>
                    <AntDesign name="google" size={24} color="white" />
                    <Text style={styles.buttonText}>Continue with Google</Text>
                </Pressable>

                <Pressable style={styles.button}>
                    <Entypo name="facebook" size={24} color="white" />
                    <Text style={styles.buttonText}>Continue with Facebook</Text>
                </Pressable>

            </SafeAreaView>


        </LinearGradient>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginTitle: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
        marginHorizontal: 20,
    },
    loginButton: {
        backgroundColor: '#1AD35E',
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 25,
    },
    button: {
        backgroundColor: '#131624',
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        borderColor: '#C0C0C0',
        width: 300,
        borderWidth: 0.8,
        marginVertical: 10,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        flex: 1,
    },
})