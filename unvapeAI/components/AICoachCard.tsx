import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useUserData } from "@/hooks/useUserData";

type Message = {
  id: string;
  sender: "user" | "ai";
  content: string;
};

const AICoachCard: React.FC = () => {
  const { userData } = useUserData();
  const [showChat, setShowChat] = useState(false); // Toggle
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      content: `Hey ${userData.name}, I'm here if you need support.`,
    },
  ]);
  const [input, setInput] = useState("");

  const scrollRef = useRef<ScrollView>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI reply
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now().toString() + "-ai",
        sender: "ai",
        content: "Thanks for sharing. I'm here with you.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  useEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={90}
    >
      <View className="bg-gray-900 my-4 p-4 rounded-xl">
        {/* Header that toggles chat */}
        <TouchableOpacity onPress={() => setShowChat(!showChat)} className="flex-row justify-between items-center mb-2">
          <Text className="text-white font-medium">Chat with your AI Coach</Text>
          <Ionicons name={showChat ? "chevron-up" : "chevron-down"} size={20} color="#AAAAAA" />
        </TouchableOpacity>

        {showChat && (
          <>
            <ScrollView
              ref={scrollRef}
              style={{ maxHeight: 250 }}
              contentContainerStyle={{ paddingBottom: 8 }}
              showsVerticalScrollIndicator={false}
            >
              {messages.map((msg) => (
                <View
                  key={msg.id}
                  className={`my-1 px-3 py-2 rounded-xl max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-yellow-500 self-end"
                      : "bg-gray-800 self-start"
                  }`}
                >
                  <Text className="text-white">{msg.content}</Text>
                </View>
              ))}
            </ScrollView>

            <View className="flex-row items-center bg-gray-800 mt-3 rounded-full px-4 py-2">
              <TextInput
                className="flex-1 text-white"
                placeholder="Type a message..."
                placeholderTextColor="#aaa"
                value={input}
                onChangeText={setInput}
                onSubmitEditing={sendMessage}
                returnKeyType="send"
              />
              <TouchableOpacity onPress={sendMessage}>
                <Ionicons name="send" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default AICoachCard;
