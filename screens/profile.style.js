import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constraits/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  cover: {
    height: 290,
    width: "100%",
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 999,
    borderBlockColor: COLORS.primary,
    borderWidth: 2,
    marginTop: -90,
  },
  name: {
    fontFamily: "bold",
    color: COLORS.primary,
    marginVertical: 5,
  },
  loginBtn: {
    backgroundColor: COLORS.secondary,
    padding: 2,
    borderWidth: 0.4,
    borderColor: COLORS.primary,
    borderRadius: SIZES.xxlarge,
  },
  menText: {
    fontFamily: "regular",
    color: COLORS.gray,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 26,
  },
  menuWrapper: {
    marginTop: SIZES.xlarge,
    width: SIZES.width - SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
  menuItem: (borderBottomWidth) => ({
    borderBottomWidth: borderBottomWidth,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: COLORS.gray,
  }),
});

export default styles;
