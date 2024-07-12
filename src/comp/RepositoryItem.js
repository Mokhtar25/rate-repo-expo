import { View, StyleSheet, Text } from "react-native";

function RepositoryItem({
  id,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) {
  return (
    <View className="flex flex-col gap-2 text-xl p-4 ">
      <Text>{fullName} </Text>
      <Text> {description}</Text>
      <Text> {language}</Text>
      <Text> {forksCount}</Text>
      <Text>{stargazersCount} </Text>
      <Text>{ratingAverage} </Text>
      <Text>{reviewCount} </Text>
      <Text>{ownerAvatarUrl} </Text>
    </View>
  );
}

export default RepositoryItem;
