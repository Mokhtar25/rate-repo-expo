import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    fontSize: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container} className="px-4">
      <Text className="text-2xl mx-auto  ">Repos</Text>
    </View>
  );
};

export default AppBar;
