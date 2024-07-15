import { View, Text, FlatList } from "react-native";
import React from "react";
import RepositoryItem from "./RepositoryItem";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_REPO } from "../graphql/queries";
import ReviewItem from "./ReviewItem";

const seprate = () => <View className="h-1 w-full bg-slate-300"></View>;
const RepositoryItemPage = () => {
  const { id } = useParams();

  const { data, error, loading } = useQuery(GET_REPO, {
    variables: { id },
  });

  if (!data || !data.repository) return null;
  const reviews = data
    ? data.repository.reviews.edges.map((edge) => edge.node)
    : [];
  console.log(reviews, "reviws");
  return (
    <View className=" ">
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem {...item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryItem {...data.repository} />}
        ItemSeparatorComponent={seprate}
      />
    </View>
  );
};

// <RepositoryItem />
export default RepositoryItemPage;
