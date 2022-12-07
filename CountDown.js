import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Pressable,
  StatusBar,
  SafeAreaView,
  TouchableNativeFeedbackBase,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import ButtonRound from '../utils/ButtonRound';

const CountDown = () => {
  const interval = useRef(0);

  const [second, setSecond] = useState(59);
  const [minute, setMinute] = useState(59);
  const [hour, setHour] = useState(0);

  //
  const handleTodoTimer = (e) => {
    setSecond((sec) => {
      if (sec === 0) { 
        setMinute((min) => {
          if (min === 0) {
            setHour((hr) => {
              if (hr === 0) return clearInterval(interval.current);
              else return hr - 1;
            });
            return 59;
          } else return min - 1;
        });
        return 59;
      } else return sec - 1;
    });
  };

  useEffect((e) => {
    interval.current = setInterval(handleTodoTimer, 1000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Pressable onPress={handleTodoTimer} style={{ backgroundColor: 'blue' }}>
        <Text style={{ color: 'white', fontSize: 18 }}>
          My second: {second}
        </Text>
        <Text style={{ color: 'white', fontSize: 18 }}>
          My minute: {minute}
        </Text>
        <Text style={{ color: 'white', fontSize: 18 }}>My Hour: {hour}</Text>
      </Pressable>
      <View
        style={{
          paddingHorizontal: 16,
          flex: 1,
          flexDirection: 'row',
          marginTop: 29,
        }}>
        <Pressable
          onPress={(e) => clearInterval(interval.current)}
          style={{
            justifyContent: 'center',
            height: 42,
            backgroundColor: 'green',
            // marginLeft: 'auto',
            // paddingVertical:14,
            textAlign: 'center',
            // marginLeft:15,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
              width: 50,
              textAlign: 'center',
            }}>
            Pause
          </Text>
        </Pressable>

        <Pressable
          onPress={(e) =>
            (interval.current = setInterval(handleTodoTimer, 1000))
          }
          style={{
            justifyContent: 'center',
            height: 42,
            backgroundColor: 'green',
            marginLeft: 'auto',
            textAlign: 'center',
            // marginLeft:15,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',

              width: 50,
              textAlign: 'center',
            }}>
            Play
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CountDown;
