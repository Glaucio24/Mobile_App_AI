import React from "react";
import { View, Text } from "react-native";

type ProgressItemProps = {
  label: string;
  value: string | number;
};

const ProgressItem: React.FC<ProgressItemProps> = ({ label, value }) => (
  <View className="flex-row justify-between mb-3">
    <Text className="text-gray-400">{label}</Text>
    <Text className="text-white font-bold">{value}</Text>
  </View>
);

export default ProgressItem;
