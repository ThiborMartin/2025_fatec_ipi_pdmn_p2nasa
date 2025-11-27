import {View, Image, Text, StyleSheet} from "react-native";

const ImagemDia = ({src, data}) =>{
    return(
        <View style={styles.container}>
            <Image
                source={{uri: src}}
                style={styles.imagem}/>
            <Text style={{textAlign: "center"}}>{data}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20
    },
    imagem:{
        width: 75,
        height: 75
    }
});

export default ImagemDia;