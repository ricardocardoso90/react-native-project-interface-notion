import { styles } from "./styles";
import { Recent } from "../recent";
import { FlatList, Text, View } from "react-native";

type Props = {
  data: {
    id: string;
    title: string;
    cover?: string;
  }[]
};

export function RecentList({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recentes</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Recent data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
    </View>
  )
};