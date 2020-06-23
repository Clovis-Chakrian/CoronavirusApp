import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import styles from '../../styles/style';

const Hospitals = () => {
  const mapStyle = [
    {
      "featureType": "poi.attraction",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.government",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.place_of_worship",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.school",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.sports_complex",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ];

  const [initialPosition, setInitialPosition] = useState([0, 0]);

  useEffect(() => {
    async function userPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Localização', 'Para melhor informação dos postos de saúde, precisamos da sua permissão.');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([
        latitude,
        longitude
      ])
    }

    userPosition();
  }, [])

  return (
    <View style={styles.mapContainer}>
      {initialPosition[0] !== 0 && (
        <MapView
          customMapStyle={mapStyle}
          style={styles.map}
          maxZoomLevel={16}
          loadingEnabled={initialPosition[0] === 0}
          initialRegion={{
            latitude: initialPosition[0],
            longitude: initialPosition[1],
            latitudeDelta: 0.021,
            longitudeDelta: 0.021
          }}
          rotateEnabled={false}
        >
          <Marker coordinate={{
            latitude: initialPosition[0],
            longitude: initialPosition[1],
          }}>
          </Marker>
        </MapView>
      )}
    </View>
  );
};

export default Hospitals;