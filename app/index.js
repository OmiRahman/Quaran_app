import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link, Stack } from "expo-router";

const App = () => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch("https://api.quran.com/api/v4/chapters?language=bn")
      .then((res) => res.json())
      .then((data) => {
        setChapters(data.chapters);
        // console.log(data);
      });
  }, []);

  return (
    <View>
      <Stack.Screen
        options={{ title: "Al-Quran", headerTitleAlign: "center" }}
      />

      <FlatList
        data={chapters}
        renderItem={({ item }) => (
          <Link href={`chapter/${item.id}`} asChild>
            <TouchableOpacity
              style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                {item.name_simple}
              </Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
