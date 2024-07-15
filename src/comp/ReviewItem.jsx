import { View, Text } from "react-native";
import React from "react";

const ReviewItem = ({ user, id, text, rating, createdAt }) => {
  console.log(user, id, text, rating, createdAt);
  const data = new Date(createdAt);
  return (
    <View className="flex flex-row px-2 mb-4">
      <View className="h-12 w-12 rounded-full mt-6 border-2 border-blue-500 justify-center items-center">
        <Text className="text-blue-500">{rating}</Text>
      </View>

      <View className="flex flex-col p-4">
        <Text className="text-black text-xl">{user.username}</Text>
        <Text className="text-slate-500 ">{data.toDateString()}</Text>
        <Text className="text-black my-3 w-72">{text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
