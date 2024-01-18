import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { COLORS, SIZES } from "../constraits";

const BackBtn = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backbtn}>
      <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  backbtn: {
    alignItems: "center",
    position: "absolute",
    zIndex: 999,
    top: SIZES.large - 10,
  },
});
