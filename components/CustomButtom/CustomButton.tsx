import { Text, TouchableOpacity } from "react-native";

export default function CustomButton({
  title,
  onPress,
  isLoading,
  containerStyles,
}: any) {
  return (
    <TouchableOpacity
      className={`bg-secondary min-h-[62px] rounded-xl justify-center items-center ${
        isLoading ? "opacity-50" : ""
      } ${containerStyles}`}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isLoading}
    >
      <Text className={`font-psemibold text-primary text-lg`}>{title}</Text>
    </TouchableOpacity>
  );
}
