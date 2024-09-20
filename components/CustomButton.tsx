import { CustomButtonProps } from "@/types/customButton";
import { styled } from "nativewind";
import { Text, TouchableOpacity } from "react-native";

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

export default function CustomButton({
  title,
  onPress,
  isLoading,
  containerStyles,
}: CustomButtonProps) {
  return (
    <StyledTouchableOpacity
      className={`bg-secondary min-h-[62px] rounded-xl justify-center items-center ${
        isLoading ? "opacity-50" : ""
      } ${containerStyles}`}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isLoading}
    >
      <StyledText className={`font-psemibold text-primary text-lg`}>
        {title}
      </StyledText>
    </StyledTouchableOpacity>
  );
}
