import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray[400],
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
  user: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.gray[100],
  },
  email: {
    fontSize: 14,
    color: colors.gray[300],
  }
});