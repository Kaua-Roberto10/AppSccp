import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Blog({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Página Blog</Text>
            <Pressable onPress={() => navigation.navigate('Info1')} style={styles.botao}>
                <Text style={styles.textoBotao}>Abra a tela Info 1</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
});