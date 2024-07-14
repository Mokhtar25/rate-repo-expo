import Main from "./src/main";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/utils/context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import createApolloClient from "./src/utils/apolloClient";

const apolloClient = createApolloClient(AuthStorage);

const App = () => {
  return (
    <>
      <GestureHandlerRootView>
        <NativeRouter>
          <ApolloProvider client={apolloClient}>
            <AuthStorageContext.Provider value={AuthStorage}>
              <Main />
            </AuthStorageContext.Provider>
          </ApolloProvider>
        </NativeRouter>
      </GestureHandlerRootView>

      <StatusBar style="auto" />
    </>
  );
};

export default App;
