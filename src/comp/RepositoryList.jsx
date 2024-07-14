import { FlatList, View, StyleSheet, Text } from "react-native";
import useRepos from "../hooks/UseRepos";
import { useRef } from "react";

import { useQuery } from "@apollo/client";
import TEST from "./Press";

import { GET_REPOSITORIES } from "../graphql/queries";

import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    display: "flex",
    gap: "4px",
    flexDirection: "column",
  },
});
// http://100.127.3.78:5001/api/repositories
//  exp://kof_utc-anonymous-8081.exp.direct

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  // const { repositories } = useRepos();

  console.log(data, error, loading);
  if (loading === true || error) return null;
  const repositoryNodes = data
    ? data.repositories.edges.map((edge) => edge.node)
    : [];

  repositoryNodes.sort((a, b) =>
    a.stargazersCount > b.stargazersCount ? -1 : +1,
  );
  return (
    <>
      <FlatList
        className="bg-slate-200"
        style={styles.separator}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
        renderItem={(data) => <RepositoryItem {...data.item} />}
        // other props
      />
      <TEST />
    </>
  );
};

export default RepositoryList;
