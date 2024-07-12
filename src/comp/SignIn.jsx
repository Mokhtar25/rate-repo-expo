import { Text, Input, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { useFormik } from "formik";

const initialValues = {
  username: "",
  pass: "",
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <View className="flex flex-col gap-16 items-center  mt-0 h-full bg-slate-200">
      <Text className="text-3xl">Sign in</Text>

      <View className=" flex flex-col gap-2  w-3/4 items-center ">
        <TextField
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          autoFoucs={true}
        />
        <TextField
          placeholder="Password"
          secureTextEntry={true}
          value={formik.values.pass}
          onChangeText={formik.handleChange("pass")}
        />
      </View>
    </View>
  );
};

const TextField = ({ ...props }) => {
  return (
    <TextInput
      {...props}
      className="border-slate-600 bg-slate-100 w-full text-black border-2 rounded-xl p-3 "
    />
  );
};

export default SignIn;
