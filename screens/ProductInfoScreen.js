import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartReducer';

const ProductInfoScreen = () => {
  const route = useRoute();
  const { width } = Dimensions.get('window');
  const navigation = useNavigation();

  const [addedToCart, setAddedToCart] = useState(false);

  const height = (width * 100) / 100;

  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <ScrollView style={{ marginTop: 55, flex: 1, backgroundColor: '#fff' }}>
      <View
        style={{
          backgroundColor: '#00CED1',
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: 'white',
            borderRadius: 3,
            height: 38,
            flex: 1,
          }}
        >
          <AntDesign
            style={{ paddingLeft: 10 }}
            name="search1"
            size={22}
            color="black"
          />
          <TextInput placeholder="Search Amazon.in" />
        </Pressable>
        <Feather name="mic" size={24} color="black" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            resizeMode="contain"
            style={{ width, height, marginTop: 25 }}
            source={{ uri: item }}
            key={index}
          >
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#C60C30',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: 12,
                  }}
                >
                  20% offer
                </Text>
              </View>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#E0E0E0',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <MaterialCommunityIcons
                  name="share-variant"
                  size={24}
                  color="black"
                />
              </View>
            </View>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#E0E0E0',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 'auto',
                marginLeft: 10,
                marginBottom: 20,
                flexDirection: 'row',
              }}
            >
              <AntDesign name="hearto" size={24} color="black" />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: '500' }}>
          {route?.params?.title}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 6 }}>
          ₹{route.params.price}
        </Text>
      </View>
      <Text style={{ height: 1, borderColor: '#D0D0D0', borderWidth: 1 }} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <Text>Color: </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          {route.params.color}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <Text>Size: </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          {route.params.size}
        </Text>
      </View>
      <Text style={{ height: 1, borderColor: '#D0D0D0', borderWidth: 1 }} />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          Total : ₹{route.params.price}
        </Text>
        <Text style={{ color: '#00CED1' }}>
          FREE Delivery Tommorrow by 3 PM.Order within 10hrs 30mins
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            alignItems: 'center',
            gap: 5,
          }}
        >
          <Ionicons name="location" size={24} color="black" />
          <Text style={{ fontSize: 15, fontWeight: '500' }}>
            Deliver to Jignesh - Udaipur 301302
          </Text>
        </View>
      </View>

      <Text style={{ color: 'green', marginHorizontal: 10, fontWeight: '500' }}>
        In Stock
      </Text>

      <Pressable
        onPress={() => addItemToCart(route?.params.item)}
        style={{
          backgroundColor: '#FFC72C',
          padding: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <Text>
          {addedToCart ? (
            <View>
              <Text>Added to Cart</Text>
            </View>
          ) : (
            <View>
              <Text>Add to Cart</Text>
            </View>
          )}
        </Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: '#FFAC1C',
          padding: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <Text>Buy Now</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({});
