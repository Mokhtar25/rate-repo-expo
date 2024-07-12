import { FlatList, View, StyleSheet } from "react-native";

import RepositoryItem from "./RepositoryItem";
import repositories from "../repos";

const styles = StyleSheet.create({
  separator: {
    display: "flex",
    gap: "4px",
    flexDirection: "column",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      className="bg-slate-200"
      style={styles.separator}
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={(data) => <RepositoryItem {...data.item} />}
      // other props
    />
  );
};

export default RepositoryList;
