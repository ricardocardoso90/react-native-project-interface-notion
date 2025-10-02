import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  data: {
    id: string;
    title: string;
    cover?: string;
  }
};

export function Recent({ data }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Image
        style={styles.cover}
        source={{ uri: data.cover }}
      />

      <View style={styles.content}>
        <Feather
          size={32}
          name="file-text"
          color={colors.gray[300]}
          style={styles.icon}
        />
        <Text style={styles.title} numberOfLines={2}>{data.title}</Text>
      </View>
    </TouchableOpacity>
  )
};