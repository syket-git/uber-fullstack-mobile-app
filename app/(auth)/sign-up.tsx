import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-black flex items-center justify-center">
        <Text className="text-4xl font-inter-medium text-red-600">SignUp</Text>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
