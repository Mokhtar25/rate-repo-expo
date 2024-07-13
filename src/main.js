import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./comp/RepositoryList";
import AppBar from "./comp/AppBar";
import { Route, Routes, Navigate } from "react-router-native";
import SignIn from "./comp/SignIn";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

// http://100.127.3.78:5001/api/repositories
const Main = () => {
  return (
    <View style={styles.container} className="bg-neutral-100 ">
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
