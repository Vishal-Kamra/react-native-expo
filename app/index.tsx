import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-pblack">Index Page</Text>
      <Link href="/home" style={{ color: "blue" }}>
        Go To Home
      </Link>
      <Link href="/sign-in" style={{ color: "blue" }}>
        Go To Sign in
      </Link>
    </View>
  );
}
