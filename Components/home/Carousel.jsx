import { StyleSheet, View, Text } from "react-native";
import React from "react";

import { COLORS } from "../../constraits/";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const slides = [
    require("../../assets/Images/slide1.jpeg"),
    require("../../assets/Images/slide2.jpg"),
    require("../../assets/Images/slide4.jpg"),
  ];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 10,
          width: "95%",
          marginTop: 10,
        }}
        autoplay
        circleloop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignContent: "center",
  },
});
