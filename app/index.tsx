import { Host, Text, VStack } from "@expo/ui/swift-ui";

export default function ContentView() {
  return (
    <Host style={{ flex: 1 }}>
      <VStack>
        <Text>Hello, world!</Text>
      </VStack>
    </Host>
  );
}
