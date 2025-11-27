import { View, Image, Text, StyleSheet } from "react-native";


const ImagemBusca = ({ src, titulo, descricao }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Image source={{ uri: src }} style={styles.imagem}/>
      <Text style={{textAlign: "center"}}>{descricao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    alignItems: "center",
  },
  imagem: {
    width: 150,
    height: 150,
    marginBottom: 8,
  },
  titulo: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  }
});

export default ImagemBusca;
