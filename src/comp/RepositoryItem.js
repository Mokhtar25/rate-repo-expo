import { View, StyleSheet, Text, Image } from "react-native";

const styles = StyleSheet.create({
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
    <View className="flex flex-col gap-2 text-xl border-black border-2 p-2">
      <View className="flex flex-row gap-2">
        <Image src={ownerAvatarUrl} style={styles.logo} className="rounded" />
        <View className="flex flex-col px-2">
          <Text className="text-lg font-medium">{fullName} </Text>
          <Text className="text-xs text-slate-700">{description}</Text>
          <Text
            className="bg-sky-700 self-start p-2 rounded-lg text-white py-2 flex justify-center items-center
      "
          >
            {language}
          </Text>
        </View>
      </View>
      <Numbers data={forksCount} />
      <Text>{stargazersCount} </Text>
      <Text>{ratingAverage} </Text>
      <Text>{reviewCount} </Text>
    </View>
  );
}

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num.toString();
}

const Numbers = ({ data }) => {
  const num = formatNumber(+data);
  return (
    <View className="p-2">
      <Text>{num}</Text>
    </View>
  );
};

export default RepositoryItem;
