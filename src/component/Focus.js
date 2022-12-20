import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import CountDown from "./CountDown";
import RoundButton from "../buttons/RoundButton";

const Focus = ({
  setShowPlan,
  setPlan,
  plan,
  focusText,
  setLastFocus,
  lastFocus,
  setFocusText,
}) => {
  const [pausePlay, setPausePlay] = useState(false);
  const [minute, setMinute] = useState(0.05);
  const [progress, setProgress] = useState(1);
  const handleEnd = (e) => {
    setPausePlay(!pausePlay);

    setLastFocus((lf) => [{ title: focusText, id: Date.now() }, ...lf]);

    setFocusText();
  };

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <View style={styles.time}>
          <CountDown
            onEnd={handleEnd}
            minute={minute}
            focusText={focusText}
            setPausePlay={setPausePlay}
            onPause={pausePlay}
            setProgress={setProgress}
            progress={progress}
          />

          <View style={{ marginTop: 15 }}>
            <Text style={{ color: "white", textAlign: "center" }}>
              Focusing on:
            </Text>
            <Text style={{ color: "white", textAlign: "center" }}>
              {focusText}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
            flex: 0.3,
            marginHorizontal: 39,
          }}
        >
          <RoundButton
            color={"white"}
            fontSize={25}
            size={60}
            title="0:06"
            onPress={(e) => setMinute(0.1)}
          />

          <RoundButton
            color={"white"}
            fontSize={25}
            size={60}
            title="10"
            onPress={(e) => setMinute(10)}
          />

          <RoundButton
            color={"white"}
            fontSize={25}
            size={60}
            title="15"
            onPress={(e) => setMinute(15)}
          />
          <RoundButton
            color={"white"}
            fontSize={25}
            size={60}
            title="20"
            onPress={(e) => setMinute(20)}
          />
        </View>

        <View style={{ alignSelf: "center", flex: 0.4 }}>
          {!pausePlay ? (
            <RoundButton
              color={"yellow"}
              onPress={(e) => setPausePlay(!pausePlay)}
              fontSize={25}
              title="Pause"
            />
          ) : (
            <RoundButton
              onPress={(e) => setPausePlay(!pausePlay)}
              color={"white"}
              title="Play"
              fontSize={25}
            />
          )}
        </View>
        <View style={{ flex: 0.3, alignSelf: "center" }}>
          <RoundButton
            onPress={(e) => {
              setFocusText("");
              setPausePlay(true);
            }}
            color={"red"}
            backgroundColor={"white"}
            fontSize={30}
            size={50}
            title="x"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  time: {
    // backgroundColor: "blue",
    alignSelf: "center",
    alignItems: "center",
  },
  timeContainer: {
    // backgroundColor: "red",
    justifyContent: "center",
    // alignContent: "center",
    flex: 0.35,
  },
  progress: {
    flex: 0.07,
    paddingHorizontal: 9, // backgroundColor: "pink",
  },
  actions: {
    flex: 0.58,
    paddingTop: 5,
    // backgroundColor: "green",
  },
});
// remain 56
export default Focus;
