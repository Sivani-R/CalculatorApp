import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Button from "./components/Button";
import styles from "./styles/styles";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{input || "0"}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {["C", "(", ")", "/"].map((item) => (
          <Button key={item} value={item} onPress={handlePress} />
        ))}
        {["7", "8", "9", "*"].map((item) => (
          <Button key={item} value={item} onPress={handlePress} />
        ))}
        {["4", "5", "6", "-"].map((item) => (
          <Button key={item} value={item} onPress={handlePress} />
        ))}
        {["1", "2", "3", "+"].map((item) => (
          <Button key={item} value={item} onPress={handlePress} />
        ))}
        {["0", ".", "="].map((item) => (
          <Button
            key={item}
            value={item}
            onPress={handlePress}
            isEqualButton={item === "="}
          />
        ))}
      </View>
      <Text style={styles.footerText}>Calc by Sivani</Text>
    </SafeAreaView>
  );
}
