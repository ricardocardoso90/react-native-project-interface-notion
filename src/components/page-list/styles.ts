import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 12,
    padding: 20,
  },
  header: {
    gap: 16,
    // paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: colors.gray[300],
  },
  list: {
    borderRadius: 8,
    backgroundColor: colors.gray[700],
  },
  separator: {
    flex: 1,
    height: 1,
    marginLeft: 42,
    backgroundColor: colors.gray[500],
  }
});