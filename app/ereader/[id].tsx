import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ereaderData from "../../dummy_data/ereader.js";
import Ionicons from "@expo/vector-icons/Ionicons";

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
              <Text style={styles.chapter}>{textObject.chapter}</Text>
            </View>
            <Text style={styles.extractText}>{textObject.fullExtract}</Text>
          </View>
        ) : (
          <Text>Your book is in another castle</Text>
        )}
        <View style={styles.engagementButtons}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="#D64045" />
          </TouchableOpacity>
          <View style={styles.subscribeContainer}>
            <TouchableOpacity>
              <Ionicons name="bookmark-outline" size={24} color="#FE7F2D" />
            </TouchableOpacity>
            <Text style={styles.bookmarkText}>
              Subscribe: new chapter next week
            </Text>
          </View>
          <View style={styles.shoppingContainer}>
            <TouchableOpacity>
              <Ionicons name="cart-outline" size={24} color="#77966D" />
            </TouchableOpacity>
            <Text style={styles.shoppingText}>
              Buy a high quality edition of the full text
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="share-social-outline" size={24} color="#8980F5" />
          </TouchableOpacity>
        </View>
        <Text style={styles.discuss}>Discuss.</Text>
        <TextInput
          editable
          multiline
          numberOfLines={8}
          maxLength={490}
          style={styles.addCommentTextarea}
        />
        <TouchableOpacity style={styles.submitCommentButton} onPress={() => {}}>
          <Text style={styles.submitCommentText}>Comment</Text>
        </TouchableOpacity>
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
    fontFamily: "GoudyBookletter",
    fontSize: 24,
    marginBottom: 16,
  },
  chapter: {
    fontFamily: "Merriweather",
    fontSize: 18,
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
    borderBottomWidth: 1,
    borderColor: "#393E41",
    paddingBottom: 16,
    borderStyle: "dotted",
  },
  engagementButtons: {
    marginTop: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  subscribeContainer: {
    alignItems: "center",
    maxWidth: 120,
  },
  shoppingContainer: {
    alignItems: "center",
    maxWidth: 120,
  },
  bookmarkText: {
    textAlign: "center",
    fontFamily: "QuicksandReg",
  },
  shoppingText: {
    textAlign: "center",
    fontFamily: "QuicksandReg",
  },
  discuss: {
    fontFamily: "GoudyBookletter",
    fontSize: 36,
  },
  addCommentTextarea: {
    borderWidth: 1,
    borderColor: "#393E41",
    padding: 8,
    borderRadius: 8,
    fontFamily: "QuicksandReg",
  },
  submitCommentButton: {
    marginTop: 12,
    paddingVertical: 16,
    backgroundColor: "#393E41",
    borderRadius: 8, // Same borderRadius as form inputs
    alignItems: "center",
    width: "100%", // Take 100% of the container width
  },
  submitCommentText: {
    color: "#F6F7EB",
    fontFamily: "QuicksandReg",
    fontSize: 16,
  },
});
