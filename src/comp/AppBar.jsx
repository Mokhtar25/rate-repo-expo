import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import { ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight,
  },
});

const AppBar = () => {
  return (
    <View
      style={styles.container}
      className="bg-white flex-row justify-around border-b-2 border-b-slate-200 flex  items-center"
    >
      <Link to={"/"} className="">
        <Text className=" mx-auto  text-3xl  active:bg-red-400 ">Repos</Text>
      </Link>
      <Link to={"/signin"}>
        <Text className=" mx-auto  text-3xl  ">Sign In</Text>
      </Link>
    </View>
  );
};

export default AppBar;
