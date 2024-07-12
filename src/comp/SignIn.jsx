import { Text, Input, View, Pressable } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 chars")
    .required("Username is missing "),
  pass: yup
    .string()
    .min(3, "pass must be at least 3 chars long ")
    .required("password is required"),
});

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
    validateOnChange: false,
    validationSchema,
    onSubmit,
  });
  // fix overlaping messagess
  // make the outline red and display the error blow the filed
  // can be done esaily with formik error checking
  // do not use controlled inputs cases flickering and unexpected behivor beacse of rerenders
  return (
    <View className="flex flex-col gap-16 items-center  mt-0 h-full bg-slate-200">
      <Text className="text-3xl">Sign in</Text>

      {formik.touched.username && formik.errors.username && (
        <Text className="text-red-500 absolute top-[65] mx-auto">
          {formik.errors.username}
        </Text>
      )}

      {formik.touched.pass && formik.errors.pass && (
        <Text className="text-red-500 absolute top-[80] mx-auto">
          {formik.errors.pass}
        </Text>
      )}

      <View className=" flex flex-col gap-2  w-3/4 items-center ">
        <TextField
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
        />

        <TextField placeholder="Username uncro" />
        <TextField
          placeholder="Password"
          secureTextEntry={true}
          value={formik.values.pass}
          onChangeText={formik.handleChange("pass")}
        />
      </View>
      <Pressable onPress={formik.handleSubmit}>
        <Text>Calculate</Text>
      </Pressable>
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
