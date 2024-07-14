import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./comp/RepositoryList";
import AppBar from "./comp/AppBar";
import { Route, Routes, Navigate } from "react-router-native";
import SignIn from "./comp/SignIn";
import RepositoryItemPage from "./comp/RepositoryItemPage";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container} className="bg-neutral-100 ">
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path=":id" element={<RepositoryItemPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
