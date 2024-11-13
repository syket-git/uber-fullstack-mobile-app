import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 h-[250px] w-full" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create your account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value: string) => setForm({ ...form, name: value })}
            labelStyle=""
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value: string) => setForm({ ...form, email: value })}
            labelStyle=""
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={true}
            icon={icons.lock}
            value={form.password}
            onChangeText={(value: string) =>
              setForm({ ...form, password: value })
            }
            labelStyle=""
          />

          <CustomButton
            title="Sign Up"
            className="mt-6"
            textStyle="text-white"
            onPress={onSignUpPress}
          />
          <OAuth />
          <Link
            href="/(auth)/sign-in"
            className="text-lg text-center mt-5 text-general-200"
          >
            <Text className="font-JakartaMedium">Already have an account?</Text>{" "}
            <Text className="font-JakartaSemiBold text-primary-500">Login</Text>
          </Link>
        </View>
        {/* Verification Model */}
      </View>
      <StatusBar style="light" />
    </ScrollView>
  );
}
