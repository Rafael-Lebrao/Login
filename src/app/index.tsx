import { View, Text, Button } from "react-native";
import { useState } from "react";

import {  Input  } from "@/components/Input";
import { InputSenha } from "@/components/InpputSenha";
import {useUsuariosDatabase} from "@/database/useUsuariosDatabase"
import { styles } from "@/CSS/styles";
import { generatePassword} from "@/components/NunAleat";

export default function Index() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [usuario, setUsuario] = useState([]);


    const usuariosDatabase = useUsuariosDatabase()

    function create() {
        usuariosDatabase.create({ name, email, senha})
    }

    return(
    <View style = {styles.container}>

        <Input placeholder="Nome ..." onChangeText={setName} value="name"/>
        <Input placeholder="Email ..." onChangeText={setEmail} value="email"/>
        <InputSenha onChangeText={setSenha} value="senha"/>

        <Button title="Gerar Senha" onPress={() => generatePassword}/>
        <Button title="Cadastrar" onPress={create}/>
        
    </View>
    )
}