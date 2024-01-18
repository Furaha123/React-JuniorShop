import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import style from "./loginpage.style";
import BackBtn from "./BackBtn";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../Components/products";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS } from "../constraits";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be atleast 8 Characters")
    .required("Requred"),
  email: Yup.string()
    .email("Please provide a valid  email address")
    .required("Required"),
});
const LoginPage = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecreText] = useState(false);

  const inValidForm = () => {
    const message =
      "Invalid form. Please fill in all required fields correctly.";

    Alert.alert("Invalid Form", message, [{ text: "OK" }]);
  };
  const login = async (values) => {
    setLoader(true);

    try {
      const endpoint = "https://fakestoreapi.com/auth/login";
      const data = values;
      const response = await axios.post(endpoint, data);

      if (response.status === 200) {
        setLoader(false);
        setResponseData(response.data);
        console.log(`user${responseData._id}`);
        // await AsyncStorage.setItem(`user${responseData._id}`);
        console.log(response.data);
      } else {
        Alert.alert("Error logging in", "Please provide valid credentials", [
          {
            text: "Cancel",
            onPress: () => {},
          },
          {
            text: "Continue",
            onPress: () => {},
          },
        ]);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
          <Image
            source={require("../assets/Images/flower.png")}
            style={style.cover}
          />
          <Text style={style.title}>Unlimited Luxurious Devices</Text>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => login(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              setFieldTouched,
              touched,
            }) => (
              <View>
                <View style={style.wrapper}>
                  <Text style={style.label}>Email</Text>
                  <View
                    style={style.inputWrapper(
                      touched.email ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={20}
                      color={COLORS.gray}
                      style={style.iconStyle}
                    />
                    <TextInput
                      placeholder="Enter email"
                      onFocus={() => {
                        setFieldTouched("email");
                      }}
                      onBlur={() => {
                        setFieldTouched("email", "");
                      }}
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={style.errorMessage}>{errors.email}</Text>
                  )}
                </View>

                <View style={style.wrapper}>
                  <Text style={style.label}>Password</Text>
                  <View
                    style={style.inputWrapper(
                      touched.password ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={20}
                      color={COLORS.gray}
                      style={style.iconStyle}
                    />
                    <TextInput
                      secureTextEntry={obsecureText}
                      placeholder="Enter password"
                      onFocus={() => {
                        setFieldTouched("password");
                      }}
                      onBlur={() => {
                        setFieldTouched("password", "");
                      }}
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={(password) => {
                        handleChange("password")(password);
                      }}
                      value={values.password}
                      style={{ flex: 1 }}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        setObsecreText(!obsecureText);
                      }}
                    >
                      <MaterialCommunityIcons
                        name={obsecureText ? "eye-outline" : "eye-off-outline"}
                        size={18}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={style.errorMessage}>{errors.password}</Text>
                  )}
                </View>
                <Button
                  loader={loader}
                  title={"L O G I N"}
                  onPress={isValid ? handleSubmit : inValidForm}
                  isValid={isValid}
                />
                <Text
                  style={[style.registration, style.registerLink]}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  Do not have an account clik here to Register here?
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginPage;
