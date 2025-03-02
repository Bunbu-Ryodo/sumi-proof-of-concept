import { Text, Image, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type ExtractProps = {
  title: string;
  author: string;
  year: number;
  text: string;
  portrait: any;
  thumbnail: any;
};

export default function Extract({
  title,
  author,
  year,
  text,
  portrait,
  thumbnail,
}: ExtractProps) {
  return (
    <View style={styles.extract}>
      <View style={styles.header}>
        <Image source={portrait} style={styles.portrait}></Image>
        <View>
          <Text style={styles.headerText}>{title}</Text>
          <Text style={styles.headerText}>{author}</Text>
          <Text style={styles.headerText}>{year}</Text>
        </View>
      </View>
      <View style={styles.previewText}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.thumbnail}>
        <Image source={thumbnail} style={styles.thumbnail} />
      </View>
      <View style={styles.engagementButtons}>
        <Ionicons name="heart-outline" size={24} color="#D64045" />
        <Ionicons name="chatbubble-outline" size={24} color="#77966D" />
        <Ionicons name="share-social-outline" size={24} color="#8980F5" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  extract: {
    backgroundColor: "#F6F7EB",
    width: "80%",
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 8,
    padding: 16,
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    cursor: "pointer",
  },
  thumbnail: {
    width: "100%",
    alignItems: "center",
    borderRadius: 8,
    height: 250,
  },
  previewText: {
    marginTop: 12,
    marginBottom: 12,
  },
  portrait: {
    borderRadius: "100%",
  },
  text: {
    fontFamily: "Merriweather",
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    width: "100%",
  },
  headerText: {
    marginLeft: 12,
    fontSize: 20,
    fontFamily: "MerriweatherSans",
    color: "#393E41",
  },
  engagementButtons: {
    marginTop: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
});
