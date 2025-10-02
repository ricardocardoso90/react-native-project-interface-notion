import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 134,
    height: 134,
    borderRadius: 10,
    backgroundColor: colors.gray[700],
    overflow: 'hidden',
  },
  cover: {
    width: '100%',
    height: '50%',
    backgroundColor: colors.gray[600],
  },
  content: {
    width: '100%',
    height: '50%',
    padding: 12,
  },
  icon: {
    position: 'absolute',
    left: 7,
    top: -16,
  },
  title: {
    fontSize: 16,
    marginTop: 10,
    color: colors.gray[100],
  }
});