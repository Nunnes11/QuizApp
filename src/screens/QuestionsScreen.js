import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const QuestionsScreen = ({
  currentQuestion,
  setCurrentQuestion,
  score,
  setScore,
  showResults,
  setShowResults,
}) => {
    const questions = [
        {
            question: "Qual o berço da Civilização Ocidental?",
            options: ["Brasil", "Estados Unidos", "Grécia", "Oriente Médio"],
            answer: "Grécia",
        },

        {
            question: "Qual é o maior planeta do Sistema Solar?",
            options: ["Terra", "Marte", "Júpiter", "Saturno"],
            answer: "Júpiter",
        },

        {
            question: "Qual o autor da frase: Penso, logo existo?",
            options: ["Platão", "Dalai Lama", "Adi Shankara", "Descartes"],
            answer: "Descartes",
        },

        {
            question: "Artefato criado na Revolução Francesa.",
            options: ["Canhão", "Guilhotina", "Mosquete", "Espada curva"],
            answer: "Guilhotina",
        },

        {
            question: "O que é Abaporu?",
            options: ["Uma ave", "Uma comida", "Uma pintura", "Uma construção"],
            answer: "Uma pintura",
        },

        {
            question: "Personalidade histórica importante pelo seu 'ato de desobediência civil' que levou ao boicote contra os ônibus de Montgomery em 1955.",
            options: ["Joan Crawford", "Robert Plant", "Rosa Parks", "Julio Verne"],
            answer: "Rosa Parks",
        },

        {
            question: "Adaptou o romance 'O iluminado' para o cinema.",
            options: ["Alfred Hitchckok", "Stanley Kubrick", "Steven Spilberg", "Quentin Tarantino"],
            answer: "Stanley Kubrick",
        },

        {
            question: "Gravou a famosa 'Rock and Roll All Nite.'",
            options: ["Queen", "Rolling Stones", "Kiss", "Beatles"],
            answer: "Kiss",
        },

        {
            question: "Autor da obra 'Poética.'",
            options: ["Fernando Pessoa", "Charles Baudelaire", "Aristóteles", "Carlos Drumond Andrade"],
            answer: "Aristóteles",
        },

        {
            question: "Foi o primeiro conde Drácula do cinema.",
            options: ["Christopher Lee", "Béla Lugosi", "Marlon Brando", "Jack Nicholson"],
            answer: "Béla Lugosi",
        },

    ];


  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <View style={styles.container}>
      {showResults ? (
        <View>
          <Text style={styles.text}>
            Você acertou {score} de {questions.length}!
          </Text>
          <Button
            title="Reiniciar Quiz"
            onPress={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowResults(false);
            }}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handleAnswer(option)}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
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

  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#1E90FF",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: "center",
    width: 200,
  },
});

export default QuestionsScreen;
