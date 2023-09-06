import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import { UserType } from '../UserContext';
import axios from 'axios';

const AddressScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [street, setStreet] = useState('');
  const [landmark, setLandmark] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const { userId, setUserId } = useContext(UserType);
  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem('authToken');
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };
    fetchUser();
  }, []);

  const handleAddAddress = () => {
    const address = {
      name,
      mobileNo,
      houseNo,
      street,
      landmark,
      postalCode,
    };

    axios
      .post('http://{api_url}:8000/addresses', { userId, address })
      .then((response) => {
        Alert.alert('Success', 'Address added successfully');
        setName('');
        setMobileNo('');
        setHouseNo('');
        setStreet('');
        setLandmark('');
        setPostalCode('');

        setTimeout(() => {
          navigation.goBack();
        }, 500);
      })
      .catch((error) => {
        Alert.alert('Error', 'Failed to add address');
        console.log('Error', error);
      });
  };
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={{ height: 50, backgroundColor: '#00CDE1' }} />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
          Add a new address
        </Text>

        <TextInput
          placeholder="India"
          placeholderTextColor="#000"
          style={{
            padding: 10,
            borderColor: '#D0D0D0',
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
        />

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            Full name (first and last name)
          </Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            placeholderTextColor={'#000'}
            placeholder="Enter your name"
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            Mobile Number
          </Text>
          <TextInput
            value={mobileNo}
            onChangeText={(text) => setMobileNo(text)}
            placeholderTextColor={'#000'}
            placeholder="Mobile No"
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            Flat, House No, Building, Company
          </Text>
          <TextInput
            value={houseNo}
            onChangeText={(text) => setHouseNo(text)}
            placeholderTextColor={'#000'}
            placeholder=""
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            Area, Street, Sector, Village
          </Text>
          <TextInput
            value={street}
            onChangeText={(text) => setStreet(text)}
            placeholderTextColor={'#000'}
            placeholder=""
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Landmark</Text>
          <TextInput
            value={landmark}
            onChangeText={(text) => setLandmark(text)}
            placeholderTextColor={'#000'}
            placeholder="Eg near appollo Hospital"
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Pincode</Text>
          <TextInput
            value={postalCode}
            onChangeText={(text) => setPostalCode(text)}
            placeholderTextColor={'#000'}
            placeholder="Enter Pincode"
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>

        <Pressable
          onPress={handleAddAddress}
          style={{
            backgroundColor: '#FFC72C',
            padding: 10,
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>Add Address</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({});
