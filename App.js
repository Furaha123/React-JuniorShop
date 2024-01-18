import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "react";
import { useCallback } from "react";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { Cart, NewRivals, ProductDetails, LoginPage, SignUp } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/Fonts/Roboto-Regular.ttf"),
    light: require("./assets/Fonts/Roboto-Light.ttf"),
    bold: require("./assets/Fonts/Roboto-Bold.ttf"),
    medium: require("./assets/Fonts/Roboto-Medium.ttf"),
    extraBold: require("./assets/Fonts/Roboto-BoldItalic.ttf"),
    bolder: require("./assets/Fonts/Poppins-ExtraBoldItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigator"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductList"
          component={NewRivals}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
