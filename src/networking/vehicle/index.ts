import { ILocation } from "src/types";
import { appAxios, callAPI } from "../config";

export const getInitialLocation = () =>
  callAPI(appAxios.get<ILocation>("/vehicle/start"));
