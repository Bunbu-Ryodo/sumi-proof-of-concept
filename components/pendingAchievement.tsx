import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type PendingAchievement = {
  achievementName: string;
  achievementDesc: string;
  achievementProgress: number;
  icon: string;
};

export default function PendingAchievement({
  achievementName,
  achievementDesc,
  achievementProgress,
  icon,
}: PendingAchievement) {
  return (
    <View style={styles.achievementsRow}>
      <View style={styles.achievementIcon}>
        <Ionicons name={icon} size={24} color={"#393E41"}></Ionicons>
      </View>
      <View style={styles.achievementDetails}>
        <Text style={styles.achievementTitle}>{achievementName}</Text>
        <Text style={styles.achievementDescription}>{achievementDesc}</Text>
        <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.achievementProgressBar,
              { width: achievementProgress * 2 }, // Dynamic width based on achievementProgress
            ]}
          ></View>
        </View>
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
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#393E41",
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
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
  progressBarContainer: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#393E41",
    borderRadius: 40,
    height: 14,
    width: 200,
  },
  achievementProgressBar: {
    backgroundColor: "#8980F5",
    borderRadius: 40,
    height: 12,
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
