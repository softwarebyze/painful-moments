import { Host, Text, VStack } from "@expo/ui/swift-ui";
import { SymbolView } from "expo-symbols";
import { StyleSheet } from "react-native";

export default function ContentView() {
  return (
    <Host style={styles.container}>
      <VStack>
        <SymbolView name="globe" />
        <Text>Hello, world!</Text>
      </VStack>
    </Host>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
