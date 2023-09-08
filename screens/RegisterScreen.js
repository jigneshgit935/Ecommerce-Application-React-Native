import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    // send a post request to the backend API
    axios
      .post(`http://locahost:8000/register`, user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          'Registration Successfull',
          'You have registered successfully'
        );
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        Alert.alert(
          'Registration Error',
          'An error occured during registration'
        );
        setName('');
        setEmail('');
        setPassword('');
        console.log('registration failed', error);
      });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}
    >
      <View style={{ marginTop: 20 }}>
        <Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: 'https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png',
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginTop: 12,
              color: '#041E42',
            }}
          >
            Register to your Account
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#D0D0D0',
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <Ionicons
              name="ios-person"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: 'gray',
                marginVertical: 10,
                width: 300,
                fontSize: name ? 16 : 16,
              }}
              placeholder="enter your Name"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#D0D0D0',
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: 'gray',
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="enter your Email"
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            backgroundColor: '#D0D0D0',
            paddingVertical: 5,
            borderRadius: 5,
            marginTop: 30,
          }}
        >
          <MaterialIcons
            name="email"
            size={24}
            color="gray"
            style={{ marginLeft: 8 }}
          />
          <TextInput
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            style={{
              color: 'gray',
              marginVertical: 10,
              width: 300,
              fontSize: password ? 16 : 16,
            }}
            placeholder="enter your Password"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 12,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ color: '#007FFF', fontWeight: '500' }}>
            Forgot Password
          </Text>
        </View>

        <View style={{ marginTop: 50 }} />

        <Pressable
          onPress={handleRegister}
          style={{
            width: 200,
            backgroundColor: '#FEBE10',
            borderRadius: 6,
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            Register
          </Text>
        </Pressable>

        <Pressable
          style={{ marginTop: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ textAlign: 'center', color: 'gray', fontSize: 16 }}>
            Already have an account? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
