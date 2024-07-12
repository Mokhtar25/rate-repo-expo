import Constants from "expo-constants";
import { Text, StyleSheet, View } from "react-native";
import RepositoryList from "./comp/RepositoryList";
import AppBar from "./comp/AppBar";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <>
      <AppBar />
      <View style={styles.container} className="bg-blue-400">
        <RepositoryList />
      </View>
    </>
  );
};

export default Main;
