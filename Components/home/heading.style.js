import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constraits";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginBottom: SIZES.xSmall,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "medium",
    fontSize: SIZES.xlarge - 2,
  },
});

export default styles;
