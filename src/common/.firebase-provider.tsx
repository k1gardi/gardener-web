import {useState, createContext, useContext, useMemo} from "react";
import type {ReactNode, FunctionComponent} from "react";
import type {FirebaseApp} from "firebase/app";
import {get, child} from "firebase/database";
import type {Database} from "firebase/database";
import type {SensorData} from "./types";
import {useQuery} from "react-query";
//import {useFirebaseConfig} from "../App";

export interface FirebaseContextType {
  sensorData: SensorData[];
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(
  undefined
);

export const FirebaseProvider: FunctionComponent<{children: ReactNode}> = ({
  children,
}) => {
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const {databaseRef} = useFirebaseConfig();

  useQuery(
    "sensorData",
    () =>
      get(child(databaseRef, "sensorData/"))
        .then((snapshot) => {
          const data = Object.values(
            snapshot.val() as Record<string, SensorData>
          );
          console.log(data);
          return data;
        })
        .catch((e) => {
          console.error(e);
        }),
    {
      cacheTime: Infinity,
      enabled: sensorData.length === 0,
      onSuccess: (data) => {
        if (data) {
          setSensorData(data);
        }
      },
    }
  );

  const context = {
    sensorData,
  };
  return (
    <FirebaseContext.Provider value={context}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const context = useContext(FirebaseContext);

  if (context === undefined) {
    throw new Error("useFirebase must be used within a FirebaseContext");
  }
  return context;
};
