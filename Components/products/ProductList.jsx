import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React from "react";
import useFetch from "../../hook/useFetch";
import styles from "./productlist.style";
import { COLORS, SIZES } from "../../constraits";

const ProductList = () => {
  const { data, isLoading, error } = useFetch;
  if (isLoading) {
    return (
      <View style= {styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxlarge} color={COLORS.primary} />
      </View>
    );
  }
};

export default ProductList;
