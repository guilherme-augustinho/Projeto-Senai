import { Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native-web";
import { UtilsContexts } from './context';
import { useState, useContext } from 'react';

import { Button, Card, Form, FloatingLabel, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { Header } from "@react-navigation/stack";

export function Login(props) {
    const { utils, setUtils } = useContext(UtilsContexts)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")


    // function goToUsuarios(){
    //     utils.Usuario.forEach(element => {

    //         if(email == element.email && senha == element.senha)
    //         {
    //             props.navigation.navigate("Usuarios")
    //         }
    //     });
    // }

    return (
        <View style={styles.container}>

            <View style={styles.view2}>

                <div class="m-5">
                    <Text>LOGIN</Text>
                </div>

                <div class="">
                    <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
                        <Form.Control style = {styles.inputs} type="text" placeholder="" onChangeText={e => setEmail(e)} />
                    </FloatingLabel>
                </div>

                <div class="">
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control style = {styles.inputs} type="password" placeholder="Password" onChangeText={e => setSenha(e)} />
                    </FloatingLabel>
                </div>


                <div className="d-flex justify-content-center mt-5">
                    <Button variant="" style={styles.btn1}>Login</Button>{' '}
                </div>

                <div className="d-flex justify-content-center">
                    <Button variant="" style={styles.btn2} onClick={() => props.navigation.navigate("Cadastro")}>Cadastrar</Button>{' '}
                </div>
            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#6e6e6e',
        width: 'auto',
        height: '751px',
    },

    view2: {
        alignItems: 'center'
    },

    textP: {
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'blue',
        textAlign: 'center'
    },

    inputs:{
        width: '300px',
        borderRadius:'50px',
        backgroundColor:'rgb(220,220,220)'
        
    },

    btn1: {
        width: '200px',
        margin: '5px',
        backgroundColor: '#464646',
        color:'white'
    },

    btn2: {
        width: '200px',
        backgroundColor: '#464646',
        color:'white'

    }


});