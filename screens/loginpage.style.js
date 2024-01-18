import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constraits";
const style = StyleSheet.create({
  cover: {
    height: SIZES.height / 2.6,
    width: SIZES.width - 60,
    resizeMode: "contain",
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.xlarge + 3,
    color: COLORS.primary,
    alignItems: "center",
    marginBottom: SIZES.xxlarge,
  },
  wrapper: {
    marginBottom: 20,
    // marginHorizontal: 20,
  },
  label: {
    fontFamily: "regular",
    fontSize: SIZES.xSmall,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: "right",
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  }),
  iconStyle: {
    marginRight: 10,
  },
  errorMessage: {
    color: COLORS.red,
    fontFamily: "regular",
    marginTop: 5,
    marginLeft: 5,
    fontSize: SIZES.xSmall,
  },
  registration: {
    marginTop: 20,
    textAlign: "center",
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
});

export default style;
