import React, { useContext } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { HandbookContext } from "../utils/Context";
import VideoPlayer from "../components/VideoPlayer";
import Badge from "../components/Badge";
import GoBack from "../components/GoBack";
import { globalStyles } from "../styles";

const { width, height } = Dimensions.get("window");
const Skills = () => {
  const { skills, makeActive, active, resetActive } =
    useContext(HandbookContext);
  const handlePress = (skills, item) => {
    resetActive();
    makeActive(skills, item);
  };

  return (
    <View style={{ backgroundColor: "#ffffff" }}>
      <GoBack />
      <View style={[styles.card, globalStyles.shadow]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}>
          <Image
            source={{ uri: active?.imageUrl }}
            style={{ width: width * 0.2, height: height * 0.1 }}
            resizeMode="contain"
          />
          <Text h4 style={{ marginHorizontal: 5 }}>
            {active?.name.toUpperCase()}
          </Text>
        </View>
        <View style={[styles.definition]}>
          <Text style={{ textAlign: "center" }}>{active?.definition}</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <VideoPlayer />
        </View>
      </View>
      <FlatList
        data={skills}
        horizontal
        contentContainerStyle={{ marginVertical: 15 }}
        initialScrollIndex={skills?.indexOf(active) || 0}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePress(skills, item)}
            style={
              active === item
                ? [
                    styles.listItem,
                    globalStyles.shadow,
                    { backgroundColor: "#CBE9ED" },
                  ]
                : [styles.listItem, globalStyles.shadow]
            }>
            <Image
              source={{ uri: item.imageUrl }}
              style={{ width: width * 0.2, height: height * 0.1 }}
              resizeMode="contain"
            />
            <Text style={{ textAlign: "center" }}>
              {item.name.toUpperCase()}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};
export default Skills;

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    position: "relative",
    overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    marginHorizontal: 5,
    marginBottom: 5,
    padding: 10,
    width: width * 0.25,
    height: height * 0.19,
    borderRadius: 4,
    backgroundColor: "#EFF5FA",
  },
  card: {
    borderRadius: 4,
    marginHorizontal: 20,
    padding: 10,
    height: height * 0.58,
    width: width * 0.9,
    backgroundColor: "#EFF5FA",
  },
  definition: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 4,
  },
});
