import { View, Text, StyleSheet, ScrollView } from "react-native";
import ereaderData from "../../dummy_data/ereader.js";

import { useLocalSearchParams } from "expo-router";

export default function EReader() {
  const { id } = useLocalSearchParams();
  console.log(id);
  const textObject = ereaderData.find(
    (text) => text.id === parseInt(Array.isArray(id) ? id[0] : id)
  );

  console.log(textObject);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView style={styles.paper}>
        {textObject ? (
          <View>
            <View style={styles.titleBar}>
              <Text style={styles.title}>{textObject.title}</Text>
              <Text style={styles.title}>{textObject.chapter}</Text>
            </View>
            <Text style={styles.extractText}>{textObject.fullExtract}</Text>
          </View>
        ) : (
          <Text>Something Wrong</Text>
        )}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#393E41",
    width: "100%",
    height: "100%",
  },
  titleBar: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Merriweather",
    marginBottom: 16,
  },
  paper: {
    backgroundColor: "#F6F7EB",
    width: "90%",
    padding: 16,
    height: "100%",
  },
  extractText: {
    fontFamily: "Merriweather",
  },
});
