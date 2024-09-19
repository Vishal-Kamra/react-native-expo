import { Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function Bookmark() {
  return (
    <Tabs>
        <Tabs.Screen name="home" />
        {/* <Tabs.Screen name="bookmark" /> */}
        <Tabs.Screen name="create" />
        <Tabs.Screen name="profile" />
      </Tabs>
  );
}
