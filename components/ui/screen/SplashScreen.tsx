import { COLORS } from "@/constants/ColorPallete";
import { useEffect, useRef } from "react";
import { Text, StyleSheet, View, Animated, Image } from "react-native";
import appJson from "../../../app.json"

export default function SplashScreen({ onFinish }: any) {
  const logo = require("../../../assets/images/logo.jpeg");
  const progress = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start(() => {
      onFinish();
    });
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={logo} resizeMode={"contain"} />
      </View>
      <Text>Effortless Shopping for the Busy Lifestyle</Text>
      <View style={styles.progressContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
      <View style={styles.bottom}>
        <Text>Version: {appJson.expo.version}</Text>
        <Text>Author: {appJson.expo.author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    width:'100%',
    height:50,
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    padding:10,
    justifyContent:'space-between'
  },
  progressBar: {
    backgroundColor: COLORS.orange,
    borderRadius: 5,
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoWrapper: {
    marginBottom: 5,
  },
  logo: {
    height: 60,
  },
  progressContainer: {
    width: "80%",
    height: 5,
    backgroundColor: COLORS.darkGrey,
    overflow: "hidden",
    borderRadius: 5,
    marginTop: 10,
  },
});
