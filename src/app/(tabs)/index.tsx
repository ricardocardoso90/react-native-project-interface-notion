import { PAGES, RECENT } from "@/utils/data";
import { ScrollView, StyleSheet, View } from "react-native";

import { Header } from "@/components/header";
import { RecentList } from "@/components/recent-list";
import { PageList } from "@/components/page-list";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        // paddingTop: 24,
        paddingBottom: 100,
      }}
      >
        <RecentList data={RECENT} />
        <PageList data={PAGES} />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 18,
  }
});