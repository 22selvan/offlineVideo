import { StyleSheet, View } from 'react-native';
import React from 'react';
import CardComponent from '../Component/CardComponent';
import LeaveReport from '../Component/LeaveReport';
import {
  FAB,
  Card,
  Title,
  Paragraph,
  Provider as PaperProvider,
  Appbar,
} from "react-native-paper";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CardComponent />
      <View>

      </View>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#edf8fc",
    marginBottom:10
  },
});

