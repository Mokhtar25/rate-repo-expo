import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight,
  },
});

const AppBar = () => {
  return (
    <View
      style={styles.container}
      className="bg-white border-b-2 border-b-slate-200 flex justify-center items-center"
    >
      <Text className=" mx-auto  text-3xl  ">Repos</Text>
    </View>
  );
};

export default AppBar;
