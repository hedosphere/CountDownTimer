import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
// import { colors } from "../colors";
const RoundButton = ({
  color = "black",
  backgroundColor,
  size = 100,
  title = "set title",
  fontSize,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress ? onPress : (e) => ""}
        style={styles2(size, color, backgroundColor, fontSize).buttonContainer}
      >
        <Text
          style={styles2(size, color, backgroundColor, fontSize).buttonText}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles2 = (size, color, backgroundColor, fontSize) => ({
  buttonContainer: {
    backgroundColor: backgroundColor,
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: "center",
    borderColor: color,
    borderWidth: 2,
  },
  buttonText: {
    color: color,
    alignSelf: "center",
    fontSize: fontSize ? fontSize : size / 7,
  },
});

export default RoundButton;
