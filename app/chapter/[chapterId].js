import { useSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { View, StyleSheet, Text } from "react-native";

const ChapterId = () => {
  const params = useSearchParams();
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.quran.com/api/v4/verses/by_chapter/${params.chapterId}?language=bn&words=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setVerses(data.verses);
      });
  }, []);

  console.log(params);
  return (
    <FlatList
      data={verses}
      renderItem={({ item }) => (
        <>
          <Text>{item.words.map((word) => word.text).join("")}</Text>
          <Text>
            {item.words.map((word) => word.translation.text).join(" ")}
          </Text>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default ChapterId;
