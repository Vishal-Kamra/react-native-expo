import { styled } from "nativewind";
import { Text, View } from "react-native";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Bookmark() {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledText className="text-3xl font-pblack">Bookmark Page</StyledText>
    </StyledView>
  );
}
