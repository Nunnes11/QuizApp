import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import QuestionsScreen from './src/screens/QuestionsScreen';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizz</Text>
      <QuestionsScreen
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        score={score}
        setScore={setScore}
        showResults={showResults}
        setShowResults={setShowResults}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87CEEB",
    padding: 20,
  },

  title: {
    fontSize: 30,
    color:"#4169E1",
    fontWeight: "bold",
    marginTop: 20,
    marginRight: '140',
    textAlign: "center",
  },

  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  
  button: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: "center",
    width: 200,
  },
});

export default App;