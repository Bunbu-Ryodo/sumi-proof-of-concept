import { Text, View, StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Achievements() {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      <View style={styles.banner}>
        <Text style={styles.brandText}>Sumi</Text>
      </View>
      <View>
        <Text style={styles.readerTag}>ReaderTag: xXxFR_Leavis_FrFrxXx</Text>
        <View style={styles.readerScoreContainer}>
          <Text style={styles.readerScore}>ReaderScore: 300</Text>
          <Ionicons
            style={styles.readerScoreTrophy}
            name="trophy"
            size={24}
            color={"#393E41"}
          ></Ionicons>
        </View>
      </View>
      <Text style={styles.completedAchievementsHeader}>
        Completed Achievements
      </Text>
      <View style={styles.completedAchievementsContainer}>
        <View style={styles.achievementsRow}>
          <View style={styles.achievementIcon}></View>
          <View style={styles.achievementDetails}>
            <Text style={styles.achievementTitle}>Bookworm</Text>
            <Text style={styles.achievementDescription}>
              Read everyday for a week
            </Text>
            <View style={styles.achievementProgressBar}></View>
          </View>
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>+100</Text>
          </View>
        </View>
        <View style={styles.achievementsRow}>
          <View style={styles.achievementIcon}></View>
          <View style={styles.achievementDetails}>
            <Text style={styles.achievementTitle}>Magpie</Text>
            <Text style={styles.achievementDescription}>Save 3 extracts</Text>
            <View style={styles.achievementProgressBar}></View>
          </View>
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>+50</Text>
          </View>
        </View>
        <View style={styles.achievementsRow}>
          <View style={styles.achievementIcon}></View>
          <View style={styles.achievementDetails}>
            <Text style={styles.achievementTitle}>Man of Letters</Text>
            <Text style={styles.achievementDescription}>
              Post a comment that gets upvoted 10 times
            </Text>
            <View style={styles.achievementProgressBar}></View>
          </View>
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>+150</Text>
          </View>
        </View>
      </View>
      <Text style={styles.inProgressAchievementsHeader}>In Progress</Text>
      <View style={styles.inProgressAchievementsContainer}>
        <View style={styles.achievementsRow}>
          <View style={styles.inProgressIcon}></View>
          <View style={styles.achievementDetails}>
            <Text style={styles.achievementTitle}>Scholar</Text>
            <Text style={styles.achievementDescription}>
              Read everyday for a month
            </Text>
            <View style={styles.inProgressBar}>
              <View style={styles.progress1}></View>
            </View>
          </View>
          <View style={styles.scoreContainer}></View>
        </View>
        <View style={styles.achievementsRow}>
          <View style={styles.inProgressIcon}></View>
          <View style={styles.achievementDetails}>
            <Text style={styles.achievementTitle}>
              Critically Acclaimed... Criticism
            </Text>
            <Text style={styles.achievementDescription}>
              Post a comment that earns 50 upvotes
            </Text>
            <View style={styles.inProgressBar}>
              <View style={styles.progress2}></View>
            </View>
          </View>
          <View style={styles.scoreContainer}></View>
        </View>
        <View style={styles.achievementsRow}>
          <View style={styles.inProgressIcon}></View>
          <View style={styles.achievementDetails}>
            <Text style={styles.achievementTitle}>Aficionado</Text>
            <Text style={styles.achievementDescription}>
              Revisit the same author ten times
            </Text>
            <View style={styles.inProgressBar}>
              <View style={styles.progress3}></View>
            </View>
          </View>
          <View style={styles.scoreContainer}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#F6F7EB",
    width: "100%",
  },
  paper: {
    backgroundColor: "#F6F7EB",
    width: "100%",
    padding: 16,
    height: "100%",
    alignItems: "center",
  },
  banner: {
    justifyContent: "center",
    alignItems: "center",
  },
  brandText: {
    fontFamily: "Goudybookletter",
    fontSize: 48,
  },
  readerTag: {
    fontFamily: "QuicksandReg",
    marginTop: 8,
    marginBottom: 8,
    fontSize: 18,
  },
  readerScore: {
    fontFamily: "QuicksandReg",
    fontSize: 18,
  },
  completedAchievementsHeader: {
    marginTop: 16,
    textDecorationLine: "underline",
    fontFamily: "QuicksandReg",
    fontSize: 14,
  },
  inProgressAchievementsHeader: {
    marginTop: 16,
    textDecorationLine: "underline",
    fontFamily: "QuicksandReg",
    fontSize: 14,
  },
  completedAchievementsContainer: {
    marginTop: 12,
    width: "90%",
    maxWidth: 368,
    borderWidth: 1,
    borderColor: "#393E41",
    borderRadius: 8,
    padding: 16,
  },
  inProgressAchievementsContainer: {
    marginTop: 12,
    width: "90%",
    maxWidth: 368,
    borderWidth: 1,
    borderColor: "#393E41",
    borderRadius: 8,
    padding: 16,
  },
  achievementDetails: {
    minWidth: 200,
  },
  achievementsRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  achievementIcon: {
    height: 48,
    width: 48,
    borderRadius: 8,
    backgroundColor: "#393E41",
    marginRight: 16,
  },
  inProgressIcon: {
    height: 48,
    width: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#393E41",
    marginRight: 16,
  },
  achievementTitle: {
    fontFamily: "QuicksandReg",
    fontSize: 16,
  },
  achievementDescription: {
    marginTop: 4,
    fontFamily: "QuicksandReg",
    maxWidth: 200,
    fontSize: 14,
  },
  readerScoreContainer: {
    flexDirection: "row",
  },
  achievementProgressBar: {
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FE7F2D",
    borderRadius: 40,
    height: 14,
    borderWidth: 1,
    borderColor: "#393E41",
  },
  inProgressBar: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#393E41",
    borderRadius: 40,
    height: 14,
    width: 200,
  },
  progress1: {
    height: "100%",
    width: 100,
    backgroundColor: "#8980F5",
    borderRadius: 40,
  },
  progress2: {
    height: "100%",
    width: 150,
    backgroundColor: "#8980F5",
    borderRadius: 40,
  },
  progress3: {
    height: "100%",
    width: 175,
    backgroundColor: "#8980F5",
    borderRadius: 40,
  },
  achievementStepCount: {
    fontFamily: "QuicksandReg",
  },
  scoreContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  score: {
    fontSize: 24,
    fontFamily: "GoudyBookletter",
  },
  readerScoreTrophy: {
    marginLeft: 8,
  },
});
