import { View, StyleSheet, Text, TextInput, Switch, TouchableOpacity, Image } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContexts } from './context';

import { Button, Card, Form, FloatingLabel, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';



export function Cadastro(props) {
    const [inicio, setInicio] = useState(false)
    const { utils, setUtils } = useContext(UtilsContexts)

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senha2, setSenha2] = useState("")



    // if(utils.Usuario == undefined)
    // {
    //     setUtils({ ...utils, Usuario: []})
    // }

    // function goToLogin() {
    //     if (senha == senha2) {

    //         const Usuario = {
    //             nome: nome,
    //             idade: idade,
    //             sexo: sexo,
    //             email: email,
    //             senha: senha,
    //             senha2: senha2,
    //             notificacao: inicio? "Sim" : "Nao",
    //             id: utils.Usuario.length + 1
    //         }
    //         console.log(Usuario)
    //         const Usuarios = [...utils.Usuario, Usuario]

    //         setUtils({ ...utils, Usuario: Usuarios })
    //         props.navigation.navigate('Login')
    //     }
    // }

    return (
        <View style={styles.container}>

            <View style={styles.view2}>

                <div>
                    <Image source={require('./assets/logo.png')} />
                </div>

                <div class="m-5">
                    <Text>CADASTRO</Text>
                </div>

                <div class="">
                    <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
                        <Form.Control style={styles.inputs} type="text" placeholder="" onChangeText={e => setNome(e)} />
                    </FloatingLabel>
                </div>

                <div class="">
                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                        <Form.Control style={styles.inputs} type="email" placeholder="name@example.com" onChangeText={e => setEmail(e)} />
                    </FloatingLabel>
                </div>

                <div class="">
                    <FloatingLabel controlId="floatingPassword" label="Senha">
                        <Form.Control style={styles.inputs} type="password" placeholder="Password" onChangeText={e => setSenha(e)} />
                    </FloatingLabel>
                </div>

                <div class="m-3">
                    <FloatingLabel controlId="floatingPassword" label="Repetir senha">
                        <Form.Control style={styles.inputs} type="password" placeholder="Password" onChangeText={e => setSenha2(e)} />
                    </FloatingLabel>
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <Button variant="" style={styles.btn1}>Cadastrar</Button>{' '}
                </div>

                <div className="d-flex justify-content-center">
                    <Button variant="" style={styles.btn2} onClick={() => props.navigation.navigate("Login")}>Cancelar</Button>{' '}
                </div> 
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6e6e6e',
        width: 'auto',
        height: '751px',
    },

    view2: {
        alignItems: 'center'
    },

    inputs: {
        width: '300px',
        borderRadius: '50px',
        backgroundColor: 'rgb(220,220,220)'
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



})