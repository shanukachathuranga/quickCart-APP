import { COLORS } from "@/constants/ColorPallete";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button, Icon } from "react-native-paper";

const logo = require("../../../../assets/images/logo.jpeg");
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={logo} resizeMode={"contain"} />
      </View>
      <View style={styles.inputOuter}>
        <View style={styles.formModel}>
          <TextInput
            selectionColor={COLORS.blue}
            activeOutlineColor={COLORS.blue}
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.formModel}>
          <TextInput
            selectionColor={COLORS.blue}
            activeOutlineColor={COLORS.blue}
            secureTextEntry={true}
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.forgotPwButtonOuter}>
          <Button
            textColor={COLORS.blue}
            mode="text"
            onPress={() => console.log("Forgot password Pressed")}
          >
            Forgot Password?
          </Button>
        </View>
        <View style={{ marginTop: 5 }}>
          <Button
            textColor={COLORS.light}
            buttonColor={COLORS.blue}
            mode="contained"
            onPress={() => console.log("Login Pressed")}
          >
            Login
          </Button>
          <Text style={styles.seperationText}>OR</Text>
        </View>
        <View style={styles.socialLoginWrapper}>
          <View style={styles.iconOuter}>
            <TouchableOpacity onPress={() => console.log("google auth")}>
              <Icon source="google" color={COLORS.blue} size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.iconOuter}>
            <TouchableOpacity onPress={() => console.log("github auth")}>
              <Icon source="github" color={COLORS.blue} size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.iconOuter}>
            <TouchableOpacity onPress={() => console.log("twitter auth")}>
              <Icon source="twitter" color={COLORS.blue} size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.iconOuter}>
            <TouchableOpacity onPress={() => console.log("facebook auth")}>
              <Icon source="facebook" color={COLORS.blue} size={40} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 50, }}>
          <Button
            textColor={COLORS.light}
            buttonColor={COLORS.orange}
            mode="contained"
            onPress={() => console.log("Register Pressed")}
          >
            Register with the email
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  iconOuter: {
  },
  socialLoginWrapper: {
    marginTop:20,
    flexDirection:'row',
    justifyContent:'center',
    gap:40
  },
  seperationText: {
    marginTop: 20,
    textAlign: "center",
    color: "grey",
  },
  forgotPwButtonOuter: {
    flex: 1,
    alignItems: "flex-end",
  },
  formModel: {
    marginBottom: 10,
  },
  inputInner: {
    marginTop: 5,
  },
  inputOuter: {},
  logo: {
    width: 60,
    height: 60,
  },
  logoWrapper: {
    alignItems: "center",
    marginTop: 20,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.light,
  },
});
