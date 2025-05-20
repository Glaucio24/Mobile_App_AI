import { Slot } from "expo-router";
import './globals.css';
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Slot /> 
      <StatusBar hidden={true} />
    </>
  )

}
