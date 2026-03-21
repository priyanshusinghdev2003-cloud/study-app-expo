import { COLORS } from "@/lib/theme";
import { getGreetingForHour } from "@/lib/utils";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatsScreen = () => {
  const { user } = useUser();
  const firstName = user?.firstName;

  const [search, setSearch] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* HEADER */}
      <View className="px-5 pt-3 pb-2">
        <Text className="text-sm text-foreground-muted mb-0.5">
          {getGreetingForHour()}, {firstName}
        </Text>
      </View>

      {/* SEARCH BAR */}
      <View className="flex-row items-center bg-surface mx-5 mb-3 px-3.5 py-3 rounded-[14px] gap-2.5 border border-border">
        <Ionicons name="search" size={18} color={COLORS.textMuted} />
        <TextInput
          className="flex-1 text-[15px] text-foreground"
          placeholder="Search study rooms..."
          placeholderTextColor={COLORS.textMuted}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* SECTION LABEL */}
      <View className="flex-row items-center px-5 my-1.5 gap-2">
        <Ionicons name="chatbubbles" size={16} color={COLORS.primaryLight} />
        <Text className="text-[15px] font-semibold text-primary-light">
          Your Study Sessions
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ChatsScreen;
