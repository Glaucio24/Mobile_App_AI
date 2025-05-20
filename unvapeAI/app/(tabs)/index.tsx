import React from "react";
import {
  ScrollView,
  StatusBar,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants/images";
import SectionHeader from "@/components/SectionHeader";
import ProgressItem from "@/components/ProgressItem";
import StatsCard from "@/components/StatsCard";
import CravingButton from "@/components/CravingButton";
import DailyInspiration from "@/components/DailyInspiration";
import WelcomeHeader from "@/components/WelcomeHeader";
import AICoachCard from "@/components/AICoachCard";
import { useUserData } from "@/hooks/useUserData";

export default function HomeScreen() {
  const { userData, moneySaved, resetDays } = useUserData();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <SafeAreaView className="flex-1 bg-black">
        <Image source={images.bg} className="absolute w-full z-0" />
        <StatusBar barStyle="light-content" />

        <ScrollView
          className="flex-1 px-5"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 16, paddingBottom: 8 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Welcome */}
          <WelcomeHeader name={userData.name} onRelapse={resetDays} />

          {/* Daily Inspiration */}
          <DailyInspiration motivation={userData.dailyMotivation} />

          {/* Craving Button */}
          <CravingButton />

          {/* Stats */}
          <View className="flex-row justify-between mt-2 mb-4">
            <StatsCard
              icon="trophy"
              iconLib="material"
              label="Days Vape-Free"
              value={userData.daysVapeFree}
            />
            <StatsCard
              icon="trending-up"
              label="Money Saved"
              value={`${moneySaved}`}
            />
          </View>

          {/* Progress */}
          <View className="mt-4">
            <SectionHeader icon="trending-up" title="Your Progress" />
            <ProgressItem label="Days without vaping:" value={userData.daysVapeFree} />
            <ProgressItem label="Money saved:" value={`${moneySaved.toFixed(2)}`} />
            <ProgressItem label="Health:" value={userData.healthStatus} />
          </View>

          {/* AI Coach */}
          <AICoachCard />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
