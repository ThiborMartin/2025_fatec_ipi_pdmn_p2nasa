import React, { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

const Busca = ({ aoBuscar }) => {
  const [termo, setTermo] = useState("");

  const onPressBuscar = () => {
    if (aoBuscar) {
      aoBuscar(termo);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.campo}
        value={termo}
        onChangeText={setTermo}
        placeholder="Digite o que deseja buscar (exemplos: moon, earth etc)"
      />

      <Pressable style={styles.campo} onPress={onPressBuscar}>
        <Text style={{textAlign: "center"}}>Buscar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "90%",
  },
  campo: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 2,
    marginTop: 10,
    padding: 8,
    textAlign: "center",
    borderRadius: 4,
  }
});

export default Busca;