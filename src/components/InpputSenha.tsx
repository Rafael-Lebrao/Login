import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export function InputSenha( {...rest}: TextInputProps) {

  const [input, setInput] = useState(true);


  return (
    <View >

        <View style={styles.inputArea}>
            <TextInput
                style={styles.input}
                placeholder="Insira uma Senha"
                secureTextEntry = {input}
                {...rest}
            />
            <TouchableOpacity style={styles.icon} onPress={ () => setInput(!input)}>
                { input ?
                    <Ionicons name="eye" color="#333" size={25} />
                :
                <Ionicons name="eye-off" color="#333" size={25} /> 
                }
                
            </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({

  inputArea: {
    height: 56,
    flexDirection:"row",
    borderWidth: 1,
    borderRadius: 8,
    alignItems:"center"
  },

  input: {
    width: '85%',
    height: 50,
    color: '#333',
    padding: 8,
    fontSize: 18
  },

  icon: {
    width: '15%',
    height: 50,
    justifyContent: "center",
    alignItems: "center",

  }

});

