import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "@/components/CustomButtom/CustomButton";
import { StatusBar } from "expo-status-bar";

export default function Page() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-full items-center justify-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] h-[300px] w-full"
          />
          <Text className="text-white text-2xl font-bold text-center">
            Discover Endless Possibilities With{" "}
            <Text className="text-secondary-200">Aora</Text>
          </Text>

          <CustomButton
            title={"Continue With Email"}
            containerStyles={"w-full mt-7"}
            onPress={() => router.push("/sign-up")}
          />
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
}
