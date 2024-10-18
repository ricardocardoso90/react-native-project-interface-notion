import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://github.com/ricardocardoso90.png' }}
      />

      <View style={styles.user}>
        <Text style={styles.name}>Ricardo Cardoso</Text>
        <Text style={styles.email}>ricardomanolo90@gmail.com</Text>
      </View>

      <TouchableOpacity>
        <Feather
          name="more-horizontal"
          size={20}
          color={colors.gray[100]}
        />
      </TouchableOpacity>
    </View>
  )
};