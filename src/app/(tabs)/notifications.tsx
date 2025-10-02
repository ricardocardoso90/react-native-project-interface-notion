import { colors } from "@/styles/colors";
import { StyleSheet, Text, View } from "react-native";

export default function Notificações() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de NOTIFICAÇÕES.</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
  }
});