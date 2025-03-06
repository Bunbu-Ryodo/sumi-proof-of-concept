import { View, Text, StyleSheet } from "react-native";

type Achievement = {
  achievementName: string;
  achievementDesc: string;
  achievementScore: number;
};

export default function Achievement({
  achievementName,
  achievementDesc,
  achievementScore,
}: Achievement) {
  return (
    <View style={styles.achievementsRow}>
      <View style={styles.achievementIcon}></View>
      <View style={styles.achievementDetails}>
        <Text style={styles.achievementTitle}>{achievementName}</Text>
        <Text style={styles.achievementDescription}>{achievementDesc}</Text>
        <View style={styles.achievementProgressBar}></View>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{achievementScore}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  achievementDetails: {
    minWidth: 200,
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
});
