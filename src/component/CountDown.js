import { View, Text } from "react-native";
import React, { useState, useRef, useEffect } from "react";

const getMinutes = (min) => min * 1000 * 60;
const CountDown = ({
  setPausePlay,
  minute = 90,
  onEnd = (e) => console.log("Time End"),
  onPause,
  setProgress,
  progress,
}) => {
  const [millisecond, setMillisecond] = useState();
  const interval = useRef("");

  const countDown = (t) => {
    setMillisecond((time) => {
      if (time <= 999) {
        clearInterval(interval.current);
        onEnd();
        return time;
      }
      return time - 1000;
    });
  };

  useEffect(
    (e) => {
      clearInterval(interval.current);
      setPausePlay(true);
      setMillisecond(getMinutes(minute));

      return (e) => clearInterval(interval.current);
    },
    [minute]
  );

  useEffect(
    (e) => {
      setProgress(millisecond / getMinutes(minute));
      return (e) => setProgress(progress);
    },
    [millisecond]
  );

  useEffect(
    (e) => {
      if (onPause) {
        clearInterval(interval.current);
        return;
      } else {
        interval.current = setInterval(() => {
          countDown();
        }, 1000);
      }
      return (e) => clearInterval(interval.current);
    },
    [onPause]
  );

  const sec = Math.floor((millisecond / 1000) % 60);
  const min = Math.floor((millisecond / 1000 / 60) % 60);
  const hr = Math.floor((millisecond / 1000 / 60 / 60) % 24);
  const day = Math.floor(millisecond / 1000 / 60 / 60 / 24);

  return (
    <View>
      <View style={{ backgroundColor: "blue" }}>
        <Text style={{ fontSize: 90, color: "white", paddingVertical: 0 }}>
          {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
        </Text>
        {/* <Text style={{ fontSize: 20, color: "white" }}>
          {day < 10 ? "0" + day : day}:{hr < 10 ? "0" + hr : hr}:
          {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
        </Text> */}
      </View>
    </View>
  );
};

export default CountDown;
