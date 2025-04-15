
import Dashboard from "@/components/ui/screen/Dashboard";
import SplashScreen from "@/components/ui/screen/SplashScreen";
import { useState } from "react";
import { Image, StyleSheet, Platform, View, Text } from "react-native";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <SplashScreen
          onFinish={() => {
            setIsLoading(false);
          }}
        />
      ) : (
        <Dashboard/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
});
