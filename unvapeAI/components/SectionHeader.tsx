import React from "react";
import { View, Text } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

type IconPack = "MaterialCommunityIcons" | "FontAwesome" | "Ionicons";

type SectionHeaderProps = {
  icon: string;
  title: string;
  iconPack?: IconPack;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  title,
  iconPack = "MaterialCommunityIcons",
}) => {
  const IconComponent =
    iconPack === "FontAwesome"
      ? FontAwesome
      : iconPack === "Ionicons"
      ? Ionicons
      : MaterialCommunityIcons;

  return (
    <View className="flex-row items-center mb-3">
      {/* @ts-ignore to avoid type complaints about icon names */}
      <IconComponent name={icon as any} size={20} color="#FFD700" />
      <Text className="text-white font-bold text-lg ml-2">{title}</Text>
    </View>
  );
};

export default SectionHeader;
