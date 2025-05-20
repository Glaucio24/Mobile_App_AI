import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/images"; // Adjust path as needed

type WelcomeHeaderProps = {
  name: string;
  onRelapse: () => void;
};

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ name, onRelapse }) => (
  <View className="pb-3 flex-row justify-between items-start ">
    <View>
      <>
</>  
    </View>
    <TouchableOpacity
      className="border border-red-500 rounded-full py-1 px-3 flex-row items-center"
      onPress={onRelapse}
    >
      <Ionicons name="refresh" size={14} color="#EF4444" />
      <Text className="text-red-500 text-xs ml-1">Relapse</Text>
    </TouchableOpacity>
  </View>
);

export default WelcomeHeader;
