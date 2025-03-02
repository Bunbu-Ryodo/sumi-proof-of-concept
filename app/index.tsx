import {
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.logoBook}>
        <View style={styles.logoTitle}></View>
      </View>
      <Text style={styles.header}>Sumi</Text>
      <Text style={styles.tagline}>Just One More Chapter</Text>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formInput}></TextInput>
        <Text style={styles.formLabel}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.formInput}></TextInput>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => {}}>
          <Text style={styles.primaryButtonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary} onPress={() => {}}>
          <Text style={styles.secondaryButtonText}>Register</Text>
        </TouchableOpacity>
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
  logoBook: {
    width: 50,
    height: 73,
    padding: 5,
    backgroundColor: "#F6F7EB",
    borderRadius: 2,
  },
  logoTitle: {
    width: 12,
    height: 30,
    borderRadius: 2,
    backgroundColor: "#393E41",
  },
  header: {
    fontSize: 36,
    fontFamily: "GoudyBookletter",
    color: "#F6F7EB",
  },
  tagline: {
    fontSize: 18,
    fontFamily: "QuicksandReg",
    color: "#F6F7EB",
  },
  form: {
    width: "90%",
  },
  formLabel: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "QuicksandReg",
    color: "#F6F7EB",
  },
  formInput: {
    marginTop: 12,
    fontSize: 16,
    fontFamily: "QuicksandReg",
    color: "#F6F7EB",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#F6F7EB",
    padding: 12,
    backgroundColor: "transparent",
  },
  signIn: {
    marginTop: 14,
    backgroundColor: "#F6F7EB",
    borderRadius: 8,
  },
  buttonPrimary: {
    marginTop: 14,
    padding: 16,
    backgroundColor: "#F6F7EB",
    borderRadius: 8,
    alignItems: "center",
    fontFamily: "QuicksandReg",
  },
  primaryButtonText: {
    color: "#393E41",
    fontFamily: "QuicksandReg",
  },
  secondaryButtonText: {
    color: "#F6F7EB",
    fontFamily: "QuicksandReg",
  },
  buttonSecondary: {
    marginTop: 12,
    padding: 12,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#F6F7EB",
    color: "#F6F7EB",
    borderRadius: 8,
    alignItems: "center",
    fontFamily: "QuicksandReg",
  },
});
