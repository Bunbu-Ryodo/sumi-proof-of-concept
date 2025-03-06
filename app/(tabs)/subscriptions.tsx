import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import SubscriptionsList from "../../components/subscriptionList";
import subscriptions from "../../dummy_data/subscriptions";

export default function Subscriptions() {
  const newSubscriptions = subscriptions.filter((data) => !data.read);
  const readSubscriptions = subscriptions.filter((data) => data.read);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.unreadContainer}>
          <View style={styles.subscriptionsHeader}>
            <Text style={styles.newInstallmentsHeader}>New Installments</Text>
            <View style={styles.headerIconContainer}>
              <Ionicons
                name="mail-unread"
                size={24}
                color={"#393E41"}
              ></Ionicons>
            </View>
          </View>
          <SubscriptionsList data={newSubscriptions}></SubscriptionsList>
        </View>
        <View style={styles.readContainer}>
          <View style={styles.subscriptionsHeader}>
            <Text style={styles.newInstallmentsHeader}>Read Installments</Text>
            <View style={styles.headerIconContainer}>
              <Ionicons name="mail-open" size={24} color={"#393E41"}></Ionicons>
            </View>
          </View>
          <SubscriptionsList data={readSubscriptions}></SubscriptionsList>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#F6F7EB",
  },
  subscriptionsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  newInstallmentsHeader: {
    fontFamily: "QuicksandReg",
    fontSize: 24,
  },
  headerIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  unreadContainer: {
    padding: 16,
    marginTop: 24,
    width: "80%",
  },
  readContainer: {
    padding: 16,
    marginTop: 24,
    width: "80%",
  },
});
