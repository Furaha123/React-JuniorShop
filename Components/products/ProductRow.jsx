import { Text, View, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import styles from "./productrow.style";
import { COLORS, SIZES } from "../../constraits";
import ProductCardView from "./ProductCardView";
import useFetch from "../../hook/useFetch";

const ProductRow = () => {
  const products = [1, 2, 3];
  const { data, isLoading, error } = useFetch();
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxlarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium, height: 350 }}
        />
      )}
    </View>
  );
};

export default ProductRow;
