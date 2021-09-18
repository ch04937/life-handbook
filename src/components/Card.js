import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import VideoPlayer from "../components/VideoPlayer";

const Card = ({ data }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={[
        styles.card,
        {
          marginHorizontal: width / 20,
          padding: width / 25,
        },
      ]}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: data?.imageUrl }}
          style={{ width: width / 4, height: width / 4 }}
          resizeMode="contain"
        />
        <View style={{ width: "55%" }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>{data.name}</Text>
        </View>
      </View>
      <Text style={{ marginBottom: "auto" }}>{data.definition}</Text>
      <View style={{ alignItems: "center", height: height / 4 }}>
        <VideoPlayer vid={data} />
      </View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    backgroundColor: "#EFF5FA",
    height: "60%",
    elevation: 5,
    overflow: "scroll",
  },
});
