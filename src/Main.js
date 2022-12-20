import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Focus from "./component/Focus";

import Todo from "./component/Todo";

const main = () => {
  const [focusText, setFocusText] = useState();
  const [lastFocus, setLastFocus] = useState([
    { title: "Reading about to die", id: "1" },
    { title: "Study bible", id: "2" },
  ]);
  return (
    <View style={{ flex: 1 }}>
      {!focusText ? (
        <View style={{ flex: 1 }}>
          <Todo
            lastFocus={lastFocus}
            focusText={focusText}
            setFocusText={setFocusText}
          />
        </View>
      ) : (
        <Focus
          setLastFocus={setLastFocus}
          lastFocus={lastFocus}
          focusText={focusText}
          setFocusText={setFocusText}
        />
      )}
    </View>
  );
};

export default main;
