import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, StyleSheet, Image } from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";

const CustomCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(images);
  const ref = useRef(null);

  const renderItem = useCallback(
    ({ item, index }) => <Image style={styles.image} source={{ uri: item }} />,
    []
  );

  const pagination = (
    <Pagination
      dotsLength={images.length}
      activeDotIndex={activeIndex}
      containerStyle={{
        backgroundColor: "white",
      }}
      dotStyle={{
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: "gray",
      }}
      inactiveDotStyle={{}}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingTop: 50 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Carousel
          layout="default"
          ref={ref}
          data={carouselItems}
          sliderWidth={400}
          itemWidth={350}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        {pagination}
      </View>
    </SafeAreaView>
  );
};

export default CustomCarousel;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});
