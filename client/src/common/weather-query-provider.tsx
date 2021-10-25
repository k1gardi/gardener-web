import {useState, createContext, useContext} from "react";
import type {ReactNode, FunctionComponent, ReactElement} from "react";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import type {WeatherArray} from "client/src/common/types";

export type WeatherContext = WeatherArray | null;

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
  const [context, setContext] = useState<WeatherContext>(null);

  const value = context;

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(WeatherContext);

  if (context === undefined) {
    throw new Error("useCount must be used within a WeatherContext");
  }
  return context;
};
