import { Text, Pressable, Alert } from "react-native";

export default PressableText = (props) => {
  return (
    <Pressable onPress={() => Alert.alert("You pressed the text!")}>
      <Text>You can press me</Text>
    </Pressable>
  );
};
