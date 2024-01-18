import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./profile.style";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../constraits";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const navigation = useNavigation();
  const handleCartClick = () => {
    navigation.navigate("Cart");
  };
  const logout = () => {
    const buttons = [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel pressed"),
      },
      {
        text: "Continue",
        onPress: () => console.log("Continue pressed"),
      },
    ];

    const message = `Are you sure you want to logout?\n\n${buttons[0].text} | ${buttons[1].text}`;

    Alert.alert("Logout", message, buttons);
  };

  const deleteAccount = () => {
    const buttons = [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel pressed"),
      },
      {
        text: "Delete",
        onPress: () => console.log("Delete pressed"),
      },
    ];

    const message =
      "Are you sure you want to delete your account?\n\nCancel | Delete";

    Alert.alert("Delete Account", message, buttons);
  };

  const clearCache = () => {
    const buttons = [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel pressed"),
      },
      {
        text: "Clear",
        onPress: () => console.log("Clear pressed"),
      },
    ];

    const message =
      "Are you sure you want to clear the cache?\n\nCancel | Clear";

    Alert.alert("Clear Cache", message, buttons);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray} />
        <View style={{ width: "100%" }}>
          <Image
            source={require("../assets/Images/universe.jpeg")}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/Images/animate.jpg")}
            style={styles.profile}
          />
          <Text style={styles.name}>
            {userLogin === true ? "Meech" : "Please Login into your account"}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={styles.loginBtn}>
                <Text style={styles.menText}>L O G I N </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginBtn}>
              <Text style={styles.menText}>meechmoses@gmail.com </Text>
            </View>
          )}

          {userLogin === false ? (
            <View></View>
          ) : (
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0.3)}>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menText}>Favorites</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0.3)}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menText}>Orders</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleCartClick()}>
                <View style={styles.menuItem(0.3)}>
                  <SimpleLineIcons
                    name="bag"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menText}>Cart</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => clearCache()}>
                <View style={styles.menuItem(0.3)}>
                  <MaterialCommunityIcons
                    name="cached"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menText}>Clear Cache</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteAccount()}>
                <View style={styles.menuItem(0.3)}>
                  <AntDesign
                    name="deleteuser"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menText}>Delete Account</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => logout()}>
                <View style={styles.menuItem(0.3)}>
                  <AntDesign name="logout" color={COLORS.primary} size={24} />
                  <Text style={styles.menText}>Log out </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;
