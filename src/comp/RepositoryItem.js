import { View, StyleSheet, Text, Image } from "react-native";

const styles = StyleSheet.create({
  boxText: {
    borderRadius: 99999,
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

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
    <View className="flex flex-col gap-2 text-xl bg-white border-black border-2 p-2">
      <View className="flex flex-row gap-2">
        <Image src={ownerAvatarUrl} style={styles.logo} className="rounded" />
        <View className="flex flex-col px-2">
          <Text className="text-lg font-medium">{fullName} </Text>
          <Text className="text-xs text-slate-700 ">{description}</Text>
          <View className="rounded-md bg-sky-700 p-[7] my-2 self-start">
            <Text className="text-white">{language}</Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row justify-evenly items-center gap-4">
        <Numbers data={stargazersCount} label="Stars" />
        <Numbers data={forksCount} label={"Fork"} />
        <Numbers data={reviewCount} label={"Reviews"} />
        <Numbers data={ratingAverage} label={"Rating"} />
      </View>
    </View>
  );
}

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num.toString();
}

const Numbers = ({ data, label }) => {
  const num = formatNumber(+data);
  return (
    <View className="p-2 flex flex-col justify-center items-center">
      <Text className="font-bold">{num}</Text>
      <Text className="text-slate-700">{label}</Text>
    </View>
  );
};

export default RepositoryItem;
