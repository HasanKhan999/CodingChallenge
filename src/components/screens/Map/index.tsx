import React, { FC, useEffect, useRef, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import MapView, { AnimatedRegion, LatLng, Marker } from "react-native-maps";
import { Car } from "src/assets";
import { Button, Loading, Spacer } from "src/components/common";
import { useVehicleLocation } from "src/hooks";
import { BACKGROUND, BLACK, normalizeHeight, WHITE } from "src/theme";

const Map: FC = () => {
  const { location } = useVehicleLocation();
  const [coordinate, setCoordinate] = useState<AnimatedRegion | null>(null);
  const markerRef = useRef(null);
  const [isFollowing, setIsFollowing] = useState(true);
  const mapRef = useRef<MapView | null>(null);

  useEffect(() => {
    if (location && !coordinate) {
      const newCoordinate = new AnimatedRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      setCoordinate(newCoordinate);
    }
  }, [location, coordinate]);

  useEffect(() => {
    if (coordinate && location) {
      coordinate
        .timing({
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          duration: 500,
          useNativeDriver: false,
          toValue: {
            x: location.latitude,
            y: location.longitude,
          },
        })
        .start();
    }
  }, [location, coordinate]);

  const toggleFollow = () => {
    setIsFollowing(prev => !prev);
  };

  useEffect(() => {
    if (isFollowing && location && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        500,
      );
    }
  }, [isFollowing, location]);

  return !location ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          {coordinate && (
            <Marker.Animated
              ref={markerRef}
              coordinate={coordinate as unknown as LatLng}>
              <Image
                source={Car}
                style={{
                  width: normalizeHeight(50),
                  height: normalizeHeight(50),
                  resizeMode: "contain",
                }}
              />
            </Marker.Animated>
          )}
        </MapView>
      </View>
      <Spacer mv={10} />
      <Button
        title={isFollowing ? "Stop Following" : "Follow Marker"}
        onPress={toggleFollow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BACKGROUND,
  },
  mapContainer: {
    width: "90%",
    height: "70%",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: WHITE,
  },
  map: {
    flex: 1,
  },
  marker: {
    resizeMode: "contain",
  },
});

export default Map;
