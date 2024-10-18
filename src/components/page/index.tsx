import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  data: {
    id: string;
    title: string;
  }
};

export function Page({ data }: Props) {
  return (
    <View style={styles.container}>
      <Feather
        size={20}
        name="chevron-right"
        color={colors.gray[300]}
      />
      <Feather
        size={20}
        name="file-text"
        color={colors.gray[300]}
      />

      <Text style={styles.title}>{data.title}</Text>

      <TouchableOpacity>
        <Feather
          size={20}
          name="plus"
          color={colors.gray[300]}
        />
      </TouchableOpacity>
    </View>
  )
};