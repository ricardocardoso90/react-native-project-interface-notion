import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 12,
    width: '100%',
  },
  title: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 10,
    color: colors.gray[300],
  },
  content: {
    gap: 12,
    paddingHorizontal: 20,
  }
});