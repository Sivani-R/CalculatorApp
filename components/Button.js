import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ value, onPress, isEqualButton }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isEqualButton && styles.equalButton]}
      onPress={() => onPress(value)}
    >
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 5,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  equalButton: {
    backgroundColor: "green",
  },
});

export default Button;
