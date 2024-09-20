import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledText = styled(Text);
const StyledSafeAreaView = styled(SafeAreaView);

export default function Page() {
  return (
    <StyledSafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <StyledView className="w-full min-h-full items-center justify-center px-4">
          <StyledImage
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <StyledImage
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] h-[300px] w-full"
          />
          <StyledText className="text-white text-2xl font-bold text-center">
            Discover Endless Possibilities With{" "}
            <StyledText className="text-secondary-200">Aora</StyledText>
          </StyledText>

          <CustomButton
            title={"Continue With Email"}
            containerStyles={"w-full mt-7"}
            onPress={() => router.push("/sign-in")}
          />
        </StyledView>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622" />
    </StyledSafeAreaView>
  );
}
