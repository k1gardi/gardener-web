import {useState, createContext, useContext} from "react";
import type {ReactNode, FunctionComponent} from "react";
import axios from "axios";
import {useQuery, QueryClient, QueryClientProvider} from "react-query";
import type {WeatherArray} from "./types";
import {mockWeather} from "./mock-weather";

export type WeatherContextType = WeatherArray;

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);
const queryClient = new QueryClient();

export const WeatherProvider: FunctionComponent<{children?: ReactNode}> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherFetcher children={children} />
    </QueryClientProvider>
  );
};

const WeatherFetcher: FunctionComponent<{children?: ReactNode}> = ({
  children,
}) => {
  const [context, setContext] = useState<WeatherContextType>([]);

  useQuery(
    "weather",
    // mockWeather,
    () =>
      axios
        .get<WeatherArray>("http://flip2.engr.oregonstate.edu:1210", {
          params: {
            zip: "98330",
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          console.log("res: ", res);
          return res.data;
        })
        .catch((e) => {
          console.log(e);
          console.log("res code: ", e.response);
        }),
    {
      cacheTime: Infinity,
      enabled: context.length === 0,
      onSuccess: (data) => {
        if (data) {
          setContext(data);
        }
      },
    }
  );

  const value = context;
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);

  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherContext");
  }
  return context;
};
