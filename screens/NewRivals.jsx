import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styles from "./newRivals.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constraits";

const NewRivals = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>Products</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;
