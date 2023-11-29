import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import 'bootstrap/dist/css/bootstrap.min.css';

import { UtilsContexts } from './context';
import {Condominio} from "./Condominio";
import { useState } from 'react';
import { Login } from "./Login";
import { Cadastro } from "./Cadastro";

export default function App() {
  
  const Stack = createStackNavigator()

  const [utils, setUtils] = useState({})

  return(
    <NavigationContainer>
      <UtilsContexts.Provider value = {{utils, setUtils}}>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name = "Login" component = {Login} />
          <Stack.Screen options={{headerShown: false}} name = "Cadastro" component = {Cadastro} />
          <Stack.Screen name = "Condominio" component = {Condominio} />
        </Stack.Navigator>
      </UtilsContexts.Provider>
    </NavigationContainer>
  );
}