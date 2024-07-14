import { View, StyleSheet, Text, Touchable, Button } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import { ScrollView } from "react-native";
import { useQuery } from "@apollo/client";
import { SIGN_OUT } from "../graphql/auth";
import { useApolloClient } from "@apollo/client";
import useAuthStorage from "../utils/authHook";

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight,
  },
});

const AppBar = () => {
  const client = useApolloClient();
  const AuthStorage = useAuthStorage();
  const { data, loading, error } = useQuery(SIGN_OUT);

  const signOut = async () => {
    await AuthStorage.removeAccessToken();
    client.resetStore();
    console.log("cliked");
    const s = await AuthStorage.getAccessToken();

    console.log(s);
    console.log(data);
  };
  return (
    <View
      style={styles.container}
      className="bg-white flex-row justify-around border-b-2 border-b-slate-200 flex  items-center"
    >
      <Link to={"/"} className="">
        <Text className=" mx-auto  text-3xl  active:bg-red-400 ">Repos</Text>
      </Link>
      {!data.me && (
        <Link to={"/signin"}>
          <Text className=" mx-auto  text-3xl  active:bg-red-400 ">
            Sign In
          </Text>
        </Link>
      )}
      {data.me && <Button title="sing out" onPress={signOut} />}
    </View>
  );
};

export default AppBar;
