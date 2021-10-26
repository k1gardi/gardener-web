import {useState, createContext, useContext} from "react";
import type {ReactNode, FunctionComponent} from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import type {WeatherArray} from "client/src/common/types";
import {mockWeather} from "./mock-weather";

export type WeatherContext = WeatherArray;

const WeatherContext = createContext<WeatherContext | undefined>(undefined);
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
  const [context, setContext] = useState<WeatherContext>([]);

  useQuery("weather", mockWeather, {
    cacheTime: Infinity,
    enabled: context.length === 0,
    onSuccess: (data) => {
      setContext(data);
    },
  });

  const value = context;
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);

  if (context === undefined) {
    throw new Error("useCount must be used within a WeatherContext");
  }
  return context;
};
