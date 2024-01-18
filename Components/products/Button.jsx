import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { COLORS } from "../../constraits";

const Button = ({ onPress, title, isValid, loader }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(isValid === false ? COLORS.gray : COLORS.primary)}
    >
      {loader === false ? (
        <Text style={styles.btnTxt}>{title}</Text>
      ) : (
        <ActivityIndicator />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnStyle: (backgroundColor) => ({
    height: 50,
    marginVertical: 20,
    width: "100%",
    backgroundColor: backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  }),

  btnTxt: {
    fontWeight: "bold",
    color: COLORS.white,
    fontSize: 18,
  },
});
