import { styled } from "nativewind";
import { Text, TextInput, View } from "react-native";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

export default function FormField({
  label,
  value,
  onChangeText,
  placeholder,
  otherStyles,
}: any) {
  return (
    <StyledView className={`space-y-2 ${otherStyles}`}>
      <StyledText className="text-[14px] text- text-white font-pmedium">
        {label}
      </StyledText>
      <StyledView
        className={`border-2 border-black-200 w-full h-14 px-4 bg-black-100 rounded-2xl focus:border-secondary`}
      >
        <StyledTextInput
          className="flex-1 text-white text-base font-pmedium"
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={label === "Password"}
        />
      </StyledView>
    </StyledView>
  );
}
