import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// dependency installing
import { TextInput } from "react-native-paper";

// My component
import RoundButton from "../buttons/RoundButton";

const Todo = ({ focusText, setFocusText, lastFocus }) => {
  const [focus, setFocus] = useState("");

  const handleSubmit = (e) => {
    setFocusText(focus);
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.textTitle}> Focus Time</Text>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput
            value={focus}
            onChangeText={(r) => setFocus(r)}
            label={"What will like to focus on?"}
          />
        </View>
        <RoundButton
          onPress={focus && handleSubmit}
          size={60}
          color={"white"}
          fontSize={39}
          title={"+"}
        />
      </View>
      <ScrollView style={{ flex: 0.8, paddingHorizontal: 30 }}>
        <Text style={{ color: "white", marginTop: 15 }}>Last Focused:</Text>
        <View style={{ paddingHorizontal: 10, marginTop: 5 }}>
          {lastFocus &&
            lastFocus.map((item, index) => (
              <Text style={{ color: "white" }} key={item.id}>
                {index + 1}
                {". "} {item.title}
              </Text>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 30,
  },
  textTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    marginBottom: 20,
  },
});

export default Todo;
