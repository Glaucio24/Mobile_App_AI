import React from "react";
import { View, Text } from "react-native";
import SectionHeader from "./SectionHeader";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

type DailyInspirationProps = {
  motivation: string;
};

const DailyInspiration: React.FC<DailyInspirationProps> = ({ motivation }) => (
  <View className="bg-gray-900 rounded-lg p-4 my-2">
    {/* Sparkle icon in section header */}
   <SectionHeader icon="star" iconPack="Ionicons" title="Daily Inspiration" />

    {/* Motivation block */}
    <View className="bg-gray-800 rounded-md p-3 mt-2">
      <View className="flex-row items-center mb-2">
        <FontAwesome name="quote-left" size={20} color="#FFD700" />
        <Text className="text-white text-base ml-2">Today's Motivation</Text>
      </View>
      <Text className="text-gray-300 ml-7">“{motivation}”</Text>
    </View>
  </View>
);

export default DailyInspiration;
