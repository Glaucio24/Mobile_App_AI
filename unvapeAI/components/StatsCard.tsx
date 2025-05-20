import React from "react";
import { View, Text } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

type StatsCardProps = {
  icon?: string;
  iconComponent?: React.ReactNode;
  label: string;
  value: string | number;
  iconLib?: "feather" | "material";
};

const StatsCard: React.FC<StatsCardProps> = ({ icon, iconComponent, label, value, iconLib = "feather" }) => (
  <View className="bg-black rounded-lg flex-1 mx-1 overflow-hidden">
    <View className="bg-yellow-400 h-8 items-center justify-center">
      {iconComponent || (iconLib === "feather"
        ? <Feather name={icon} size={20} color="#000" />
        : <MaterialCommunityIcons name={icon} size={20} color="#000" />
      )}
    </View>
    <View className="bg-gray-900 items-center py-4">
      <Text className="text-gray-400 text-sm">{label}</Text>
      <Text className="text-white text-4xl font-bold">{value}</Text>
    </View>
  </View>
);

export default StatsCard;
