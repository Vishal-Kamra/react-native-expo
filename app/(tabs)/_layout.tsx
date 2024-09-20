import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import { icons } from "../../constants";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const TabIcon = ({ color, name, focused, icon }: any) => {
  return (
    <StyledView className="justify-center gap-2 items-center">
      <StyledImage
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        tintColor={color}
      />
      <StyledText
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </StyledText>
    </StyledView>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 82,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              name="Home"
              focused={focused}
              icon={icons.home}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              name="Bookmark"
              focused={focused}
              icon={icons.bookmark}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              name="Create"
              focused={focused}
              icon={icons.plus}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              name="Profile"
              focused={focused}
              icon={icons.profile}
            />
          ),
        }}
      />
    </Tabs>
  );
}
