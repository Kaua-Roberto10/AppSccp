import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Info1( {navigation}){
    return(
        <View style={styles.container}>
            <Text>Página Info1</Text>
            <Pressable style={styles.botao} onPress={( ) => navigation.goBack()}>
                <Text style={styles.textoBotao}>Voltar para o Blog</Text>
            </Pressable>
            <Pressable onPress={()=> navigation.navigate("Info2")} style={styles.botao}>
                <Text style={styles.textoBotao}>Abra a tela Info 2</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    botao: {
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,

    },
    textoBotao: {
        color: 'white',
        fontSize: 20,
    },
});