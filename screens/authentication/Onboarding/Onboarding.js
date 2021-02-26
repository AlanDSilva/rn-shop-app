import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useDispatch } from "react-redux";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import * as authActions from "../../../store/actions/auth";

const BORDER_RADIUS = 75;
const { width, height } = Dimensions.get("window");
const slides = [
  {
    title: "Buy",
    subtitle: "Find Yout Outfits",
    description:
      "Confused about your outfit? Don't sweat! Find the best outfit here!",
    color: "#bfeaf5",
  },
  {
    title: "Sell",
    subtitle: "Sell your old glam",
    description: "One mans recycle is another's treasure",
    color: "#beecc4",
  },
  {
    title: "Recycle",
    subtitle: "Keep mother earth safe",
    description:
      "And besides, wouldn't it be nice to meet somebody rocking that old cardigan you sold?",
    color: "#ffe4d9",
  },
];

const Onboarding = () => {
  const scroll = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const backgroundColor = scrollX.interpolate({
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const tryLogin = async () => {
    setIsLoading(true);
    try {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        dispatch(authActions.setDidTryAL());
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token, username, name } = transformedData;
      dispatch(authActions.authenticate(token, username, name));
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={1}
        >
          {slides.map((slide, i) => (
            <Slide key={slide.title} {...slide} right={i % 2 !== 0} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: Animated.multiply(scrollX, -1) }],
            },
          ]}
        >
          {!isLoading ? (
            slides.map(({ subtitle, description }, index) => (
              <Subslide
                key={index}
                last={index === slides.length - 1}
                {...{ subtitle, description }}
                onPress={() => {
                  scroll.current.scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }}
                tryLogin={tryLogin}
              />
            ))
          ) : (
            <ActivityIndicator />
          )}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "cyan",
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});
