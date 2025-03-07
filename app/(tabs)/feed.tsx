import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Extract from "../../components/extract";
import Ionicons from "@expo/vector-icons/Ionicons";
import feedData from "../../dummy_data/feed";

export default function FeedScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      {feedData.map((item) => (
        <Extract
          key={item.id}
          id={item.id}
          title={item.title}
          author={item.author}
          chapter={item.chapter}
          year={item.year}
          portrait={item.portrait}
          thumbnail={item.thumbnail}
          text={item.text}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center", // Center the Extract components horizontally
    paddingVertical: 24, // Add some vertical padding if needed
  },
  container: {
    backgroundColor: "#393E41",
    flex: 1,
  },
  headerBar: {
    padding: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
