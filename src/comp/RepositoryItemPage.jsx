import { View, Text } from "react-native";
import React from "react";
import RepositoryItem from "./RepositoryItem";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_REPO } from "../graphql/queries";

const RepositoryItemPage = () => {
  const { id } = useParams();

  const { data, error, loading } = useQuery(GET_REPO, {
    variables: { id },
  });

  return (
    <View className=" ">
      <Text className="h-12"> hello</Text>
      {loading === false && <RepositoryItem {...data.repository} />}
    </View>
  );
};

// <RepositoryItem />
export default RepositoryItemPage;
