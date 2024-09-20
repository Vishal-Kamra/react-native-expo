import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { images } from "@/constants";
import { SignInForm } from "@/types/signInForm";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledText = styled(Text);

export default function SignIn() {
  const [formData, setFormData] = useState<SignInForm>({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitForm = () => {
    if (!formData.email || !formData.password) {
      Alert.alert("All the fields are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      Alert.alert("An error occurred. Please try again.");
    }
  };

  return (
    <StyledSafeAreaView className="bg-primary h-full">
      <ScrollView>
        <StyledView className="w-full justify-center px-4 my-6">
          <StyledImage
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <StyledText className="text-2xl text-white font-semibold mt-10 mb-10">
            Sign In to Aora
          </StyledText>

          <FormField
            label="Email"
            onChangeText={(e: string) => {
              setFormData({ ...formData, email: e });
            }}
            keyboardType="email-address"
            value={formData.email}
            placeholder="Enter your email"
            otherStyles={"mb-6"}
          />

          <FormField
            label="Password"
            onChangeText={(e: string) => {
              setFormData({ ...formData, password: e });
            }}
            keyboardType="password"
            value={formData.password}
            placeholder="Enter your password"
          />

          <CustomButton
            title="Sign In"
            containerStyles={"mt-8"}
            onPress={handleSubmitForm}
            isLoading={isSubmitting}
          />

          <StyledView className="justify-center items-center mt-6">
            <StyledText className="text-white">
              Don't have account?{" "}
              <Link href="/sign-up" className="text-secondary font-semibold">
                Sign Up
              </Link>
            </StyledText>
          </StyledView>
        </StyledView>
      </ScrollView>
    </StyledSafeAreaView>
  );
}
