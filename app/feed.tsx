import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Extract from "../components/extract";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function FeedScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      <View style={styles.headerBar}>
        <TouchableOpacity>
          <Ionicons name="trophy" size={24} color="#F6F7EB" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="bookmark" size={24} color="#F6F7EB" />
        </TouchableOpacity>
        <Link href="/settings" asChild>
          <TouchableOpacity>
            <Ionicons name="settings" size={24} color="#F6F7EB" />
          </TouchableOpacity>
        </Link>
      </View>
      <Extract
        title={"Kim"}
        author={"Rudyard Kipling"}
        chapter={"Chapter 1"}
        frequency={"New Installment in 1 day(s)"}
        year={"(1901)"}
        portrait={require("../assets/images/kipling.png")}
        thumbnail={require("../assets/images/Kim.png")}
        text="O ye who tread the Narrow Way / By Tophet-flare to Judgment Day / Be
          gentle when “the heathen” pray / To Buddha at Kamakura! He sat, in
          defiance of municipal orders, astride the gun Zam Zammah on her brick
          platform opposite the old Ajaib-Gher—the Wonder House, as the natives
          call the Lahore Museum. Who hold Zam-Zammah, that “fire-breathing dragon”, hold the Punjab, for the great green-bronze piece is always first of the conqueror’s loot. There was some justification for Kim—he had kicked Lala Dinanath’s boy off the trunnions—since the English held the Punjab and Kim was English... "
      ></Extract>
      <Extract
        title={"The Golden Bowl"}
        author={"Henry James"}
        chapter={"Chapter 1"}
        frequency={"New Installment in 3 day(s)"}
        year={"(1904)"}
        portrait={require("../assets/images/james.jpg")}
        thumbnail={require("../assets/images/goldenbowl.png")}
        text="The Prince had always liked his London, when it had come to him; he was one of the modern Romans who find by the Thames a more convincing image of the truth of the ancient state than any they have left by the Tiber. Brought up on the legend of the City to which the world paid tribute, he recognised in the present London much more than in contemporary Rome the real dimensions of such a case. If it was a question of an Imperium, he said to himself, and if one wished, as a Roman, to recover a little the sense of that, the place to do so was on London Bridge, or even, on a fine afternoon in May, at Hyde Park... "
      ></Extract>
      <Extract
        title={"Victory"}
        author={"Joseph Conrad"}
        chapter={"Chapter 1"}
        frequency={"New Installment in 6 day(s)"}
        year={"(1915)"}
        portrait={require("../assets/images/conrad.jpg")}
        thumbnail={require("../assets/images/Victory.png")}
        text="There is, as every schoolboy knows in this scientific age, a very close chemical relation between coal and diamonds. It is the reason, I believe, why some people allude to coal as “black diamonds.” Both these commodities represent wealth; but coal is a much less portable form of property. There is, from that point of view, a deplorable lack of concentration in coal. Now, if a coal-mine could be put into one's waistcoat pocket—but it can't! At the same time, there is a fascination in coal, the supreme commodity of the age in which we are camped like bewildered travellers in a garish, unrestful hotel. And I suppose those two considerations, the practical and the mystical, prevented Heyst—Axel Heyst—from going away..."
      ></Extract>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center", // Center the Extract components horizontally
    paddingVertical: 16, // Add some vertical padding if needed
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
