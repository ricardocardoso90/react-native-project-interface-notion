import { styles } from "./styles";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";

import { Page } from "../page";

type Props = {
  data: {
    id: string;
    title: string;
  }[]
};

export function PageList({ data }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Privado</Text>

        <TouchableOpacity>
          <Feather
            size={20}
            name="more-horizontal"
            color={colors.gray[300]}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather
            size={20}
            name="plus"
            color={colors.gray[300]}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Page data={item} />
        )}
        
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        scrollEnabled={false}
      />
    </View>
  )
};