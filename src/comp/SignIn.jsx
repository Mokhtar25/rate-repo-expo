import { Text, View, Pressable } from "react-native";
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
    <View className="flex flex-col gap-4 pt-8 items-center  mt-0 h-full bg-slate-200">
      <View className=" flex flex-col gap-2  w-3/4 items-center ">
        <Text className="text-3xl py-8">Sign in</Text>

        <TextField
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          className={
            formik.errors.username && formik.touched.username
              ? "border-red-500"
              : ""
          }
        />

        {formik.touched.username && formik.errors.username && (
          <Text className="text-red-500 ">{formik.errors.username}</Text>
        )}
        <TextField
          placeholder="Password"
          secureTextEntry={true}
          className={
            formik.errors.pass && formik.touched.pass ? "border-red-500" : ""
          }
          value={formik.values.pass}
          onChangeText={formik.handleChange("pass")}
        />
        {formik.touched.pass && formik.errors.pass && (
          <Text className="text-red-500">{formik.errors.pass}</Text>
        )}
      </View>
      <Pressable
        className="bg-blue-500 rounded h-12 w-28 justify-center items-center"
        onPress={formik.handleSubmit}
      >
        <Text className="text-white">Calculate</Text>
      </Pressable>
    </View>
  );
};

const TextField = ({ ...props }) => {
  return (
    <TextInput
      {...props}
      className="border-slate-600 bg-slate-100 w-full p-3 text-black border-2 rounded-xl  "
    />
  );
};

export default SignIn;
