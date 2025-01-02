import { BASE_URL } from "@env";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { io } from "socket.io-client";
import { getInitialLocation } from "src/networking";
import { ILocation } from "src/types";

const socket = io(BASE_URL);

export const useVehicleLocation = () => {
  const [location, setLocation] = useState<ILocation | null>(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const res = await getInitialLocation();
        setLocation(res);

        // Once initial location is fetched, establish the socket connection to get regular updates of location of vehicle
        socket.on("locationUpdate", (newLocation: ILocation) => {
          if (!newLocation.latitude || !newLocation.longitude) {
            return Alert.alert("Failed to fetch location");
          }
          setLocation(newLocation);
        });
      } catch (error) {
        if (typeof error === "string") {
          Alert.alert(error);
        } else {
          console.log(error);
        }
      }
    };

    getLocation();

    return () => {
      socket.disconnect();
    };
  }, []);

  return { location };
};
