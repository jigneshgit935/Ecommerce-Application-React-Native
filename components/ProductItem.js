import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartReducer';

const ProductItem = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };

  return (
    <Pressable style={{ marginHorizontal: 20, marginVertical: 25 }}>
      <Image
        source={{ uri: item?.image }}
        style={{ width: 150, height: 150, resizeMode: 'contain' }}
      />
      <Text style={{ width: 150, marginTop: 10 }} numberOfLines={1}>
        {item?.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 5,
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>₹{item?.price}</Text>
        <Text style={{ color: '#FFC72C', fontWeight: 'bold' }}>
          {item?.rating?.rate} ratings
        </Text>
      </View>

      <Pressable
        onPress={() => addItemToCart(item)}
        style={{
          backgroundColor: '#FFC72C',
          padding: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginTop: 10,
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
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
