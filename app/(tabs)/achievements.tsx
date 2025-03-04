import { Text, View, StyleSheet } from "react-native";

export default function Achievements() {
  return (
    <View style={styles.container}>
      <View style={styles.paper}>
        <View style={styles.banner}>
          <Text style={styles.brandText}>Sumi</Text>
        </View>
        <View>
          <Text style={styles.readerTag}>ReaderTag: xXxFR_Leavis_FrFrxXx</Text>
          <Text style={styles.readerScore}>ReaderScore: 300</Text>
        </View>
        <Text style={styles.completedAchievementsHeader}>
          Completed Achievements
        </Text>
        <View style={styles.completedAchievementsContainer}>
          <View style={styles.achievementsRow}>
            <View style={styles.achievementIcon}></View>
            <View>
              <Text style={styles.achievementTitle}>Bookworm</Text>
              <Text style={styles.achievementDescription}>
                Read everyday for a week
              </Text>
              <View style={styles.achievementProgressBar}>
                <Text>7/7</Text>
              </View>
            </View>
            <View></View>
          </View>
          <View>
            <View></View>
            <View>
              <Text></Text>
              <Text></Text>
              <View></View>
            </View>
            <View></View>
          </View>
          <View>
            <View></View>
            <View>
              <Text></Text>
              <Text></Text>
              <View></View>
            </View>
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#393E41",
    width: "100%",
  },
  paper: {
    backgroundColor: "#F6F7EB",
    width: "90%",
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
  completedAchievementsContainer: {
    marginTop: 12,
    width: "90%",
    borderWidth: 1,
    borderColor: "#393E41",
    borderRadius: 8,
    padding: 16,
  },
  achievementsRow: {
    flexDirection: "row",
  },
  achievementIcon: {
    height: 48,
    width: 48,
    borderRadius: 8,
    backgroundColor: "#393E41",
    marginRight: 16,
  },
});
