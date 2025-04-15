import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View>
      <Text style={styles.homeText}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  homeText: {
    color: "red"
  }
});
