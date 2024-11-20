import { useRoute, useNavigation } from '@react-navigation/native';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Emtypo from 'react-native-vector-icons/Entypo'

const SongInfoScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { album } = route.params || {};
    const { coverArt, name, artist, year } = album;

    return (
        <LinearGradient colors={['#040306', '#131624']} style={{ flex: 1 }}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.paddingView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>

                    <View style={styles.imageView}>
                        <Image source={{ uri: coverArt }} style={styles.coverImage} />
                    </View>
                </View>

                <Text style={styles.albumNameText}>{name}</Text>

                <View style={styles.artistView}>
                    <Text style={styles.artistText}>{artist}</Text>
                </View>

                <Pressable style={styles.controlView}>
                    <Pressable style={styles.downloadButton}>
                        <AntDesign name="arrowdown" size={24} color="white" />
                    </Pressable>

                    <View style={styles.playButtonView}>
                        <MaterialCommunityIcons
                            name="cross-bolnisi"
                            size={24}
                            color="#1db954"
                        />

                        <Pressable style={styles.playButton}>
                            <Emtypo
                                name='controller-play'
                                size={24}
                                color="white" />
                        </Pressable>
                    </View>
                </Pressable>


                <View>
                    <View style={styles.infoView}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>{name}</Text>
                            <Text style={styles.infoText}>{artist}</Text>
                            <Text style={styles.infoText}>{year}</Text>
                        </View>
                        <Emtypo
                            name='dots-three-vertical'
                            size={24}
                            color="white" />
                    </View>
                </View>


            </ScrollView>
        </LinearGradient>
    );
};

export default SongInfoScreen;

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 10,
    },
    paddingView: {
        padding: 10,
    },
    coverImage: {
        width: 200,
        height: 200,
    },
    imageView: { flex: 1, alignItems: 'center' },
    albumNameText: {
        color: 'white',
        marginHorizontal: 12,
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
    artistView: {
        marginHorizontal: 12,
        marginTop: 10,
    },
    artistText: {
        color: '#909090',
        fontSize: 13,
        fontWeight: 'bold'
    },
    controlView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    downloadButton: {
        backgroundColor: '#1db954',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    playButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    playButton: {
        backgroundColor: '#1db954',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    infoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 12,
        marginTop: 10
    },
    infoContainer: {
        gap: 5,
    },
    infoText: {
        color: 'white',
        fontWeight: '500',
    },
});