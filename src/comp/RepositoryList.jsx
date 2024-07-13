import { FlatList, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    display: "flex",
    gap: "4px",
    flexDirection: "column",
  },
});
// http://100.127.3.78:5001/api/repositories

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [repositories, setRepositories] = useState();

  const fetchRepositories = async () => {
    // Replace the IP address part with your own IP address!
    const response = await fetch("http://100.127.3.78:5001/api/repositories");
    const json = await response.json();

    console.log(json);

    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      className="bg-slate-200"
      style={styles.separator}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={(data) => <RepositoryItem {...data.item} />}
      // other props
    />
  );
};

export default RepositoryList;
