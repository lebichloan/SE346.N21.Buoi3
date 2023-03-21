import React, {Component} from 'react';
import {Alert, Button, StyleSheet, View, TextInput, Text} from 'react-native';

export default class Login extends React.Component {
  state = { username: '', password: '', errorMessage: null }
  handleLogin = () => {
    if (this.state.username == 'user' && this.state.password == 123456)
      {
        Alert.alert('You are acessed!');
      }
    else 
    {
      Alert.alert('You are denied!');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logincontainer}>
          <Text style={styles.baseText}>
            Login
          </Text>
        </View>

        <View style={styles.containerusername}>
          <TextInput style={styles.usernameinput}
          autoCapitalize="none"
          placeholder="Username"
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
          />
        </View>

        <View style={styles.containerpassword}>
          <TextInput style={styles.passwordinput}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>

        <View style={styles.containerlogin}>
          <Button onPress={this.handleLogin} title="Login" color="#748DA6"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9CB4CC'
  },
  logincontainer:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F2D7D9'

  },
  containerusername:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerpassword:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerlogin:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseText: {
    fontSize: 80,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
  },
  usernameinput:{
    height: '50%',
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  passwordinput:{
    height: '50%',
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  buttonstyles:{
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    height: '50%',
  },


});
