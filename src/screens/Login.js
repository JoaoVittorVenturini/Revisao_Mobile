import React, { useContext } from "react";
import {View, Text, StyleSheet} from "react-native";
import { useState } from "react";
import PageBackground from "../components/PageBackground";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import UserContext from "../contexts/UserContext";

const [users] = useContext(UserContext);

export default function Login({ navigation }) {
  const validateLogin = () => {
    const userLogin = users.filter(u => u.name == user)[0];
    (userLogin.password == password)
      ? alert('User ou senha incorretos.')
      : navigation.navigate('Home');
  }
  
  const [user, setUser] = useState('');
  const [password, setPassword] = useState(''); 

  return (
    <PageBackground>
      <View style={styles.container}>
        <Logo />

        <Text style={styles.nameApp}> Cars Stock </Text>
        
        <View style={styles.containerFormLogin}>
          <Input
            label="User"
            value={user}
            onChangeText={setUser}
          />
          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Button text="Entrar"
          onPress={validateLogin}
          styleButton={styles.btnLogin}
          styleText={styles.btnLoginText}
        />
      </View>
    </PageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50
  },
  nameApp: {
    color: '#E3E4ED',
    fontSize: 60,
    height: 70,
    fontWeight: 'bold',
    marginBottom: 20
  },
  containerFormLogin: {
    height: 90,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  rememberPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '78%',
    marginTop: 30
  },
  containerSignIn:{
    flexDirection: 'column',
    padding: 46,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  textSignIn: {
    color: '#d5d5d5',
    fontSize: 14
  },
  btnLogin: {
    backgroundColor: '#4169e1',
    height: 60,
    width: '80%',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnLoginText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  }
});