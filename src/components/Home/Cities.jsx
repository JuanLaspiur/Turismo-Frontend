import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import Swiper from "react-native-swiper";
import { FontAwesome } from '@expo/vector-icons';

function Cities() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
      });

    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth < 400 ? screenWidth * 0.2 : 75;

    return (
        <>
        <Text style={styles.citiesH1}>Cities</Text>
        <Swiper
            showsButtons={true}
            style={styles.wrapper}
               dotColor="rgba(128, 128, 128, 0.0)"
      activeDotColor="rgba(128, 128, 128, 0.0)"
            prevButton={
                <FontAwesome name="chevron-left" size={12} color='rgba(128, 128, 128, 0.5)' style={styles.arrow} />
            }
            nextButton={
                <FontAwesome name="chevron-right" size={12} color='rgba(128, 128, 128, 0.5)' style={styles.arrow} />
            }
        >
            <View style={styles.cities}>
                <View style={styles.citiesContainer}>
                    <View style={[styles.citiesItem, { width: itemWidth }]}>
                        <Image source={require('../../../assets/images (1).jpeg')} style={styles.citiesItemImg} />
                        <Text style={styles.citiesItemText}>Buenos Aires</Text>
                    </View>
                    <View style={[styles.citiesItem, { width: itemWidth }]}>
                        <Image source={require('../../../assets/images (1).jpeg')} style={styles.citiesItemImg} />
                        <Text style={styles.citiesItemText}>Catamarca</Text>
                    </View>
                    <View style={[styles.citiesItem, { width: itemWidth }]}>
                        <Image source={require('../../../assets/images (1).jpeg')} style={styles.citiesItemImg} />
                        <Text style={styles.citiesItemText}>Bahía Blanca</Text>
                    </View>
                    <View style={[styles.citiesItem, { width: itemWidth }]}>
                        <Image source={require('../../../assets/images (1).jpeg')} style={styles.citiesItemImg} />
                        <Text style={styles.citiesItemText}>Santiago del Estero</Text>
                    </View>
                </View>
            </View>
            <View style={styles.cities}>
                <View style={styles.citiesContainer}>
                    <View style={[styles.citiesItem, { width: itemWidth }]}>
                        <Image source={require('../../../assets/images (1).jpeg')} style={styles.citiesItemImg} />
                        <Text style={styles.citiesItemText}>Buenos Aires</Text>
                    </View>
                    <View style={[styles.citiesItem, { width: itemWidth }]}>
                        <Image source={require('../../../assets/images (1).jpeg')} style={styles.citiesItemImg} />
                        <Text style={styles.citiesItemText}>Catamarca</Text>
                    </View>
                    <View style={[styles.citiesItem, { width: itemWidth }]}>
                        <Image source={require('../../../assets/images (1).jpeg')} style={styles.citiesItemImg} />
                        <Text style={styles.citiesItemText}>Bahía Blanca</Text>
                    </View>
                    <View style={[styles.citiesItem, { width: itemWidth }]}>
                        <Image source={require('../../../assets/images (1).jpeg')} style={styles.citiesItemImg} />
                        <Text style={styles.citiesItemText}>Santiago del Estero</Text>
                    </View>
                </View>
            </View>
        </Swiper>
        </>
    );
}

export default Cities;

const styles = StyleSheet.create({
    wrapper: {
        height: 120,
      },
    cities: {
        paddingVertical: 20,
        alignItems: 'center',
    },
    citiesH1: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 23,
        color: 'gray',
        letterSpacing: 2,
        marginHorizontal:17,
        marginTop:15
    },
    citiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        maxWidth: '100%',
    },
    citiesItem: {
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
        height: 75,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    citiesItemImg: {
        width: 25,
        height: 25,
        borderRadius: 50,
    },
    citiesItemText: {
        color: 'white',
        fontFamily: 'Roboto_400Regular',
        fontWeight: '500',
        textAlign: 'center',
    },
    arrow: {
      //  paddingHorizontal: 10,
    },
});
