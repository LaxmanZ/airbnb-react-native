import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SearchItem = (props) => {
  const data = props.data;
  //   console.log(data);
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={{ padding: 10 }}
        onPress={() =>
          navigation.navigate('Reserve', {
            id: data.key,
            img: data.img,
            description: data.description,
            lat: data.lat,
            location: data.location,
            person: data.person,
            price: data.price,
            reveiew: data.reveiew,
            star: data.star,
            title: data.title,
            total: data.total,
            distance: data.distance,
            image: data.image,
          })
        }
      >
        <Image
          style={{ width: '100%', height: 300, borderRadius: 10 }}
          source={{ uri: data.img }}
        />
        <Pressable style={{ position: 'absolute', top: 25, right: 25 }}>
          <AntDesign name="hearto" size={30} color="white" />
        </Pressable>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text style={{ fontSize: 17 }}>{data.location}</Text>
            <Text style={{ color: 'gray' }}>
              {data.distance} Kilometers Away
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
              {data.price}
            </Text>
            <Text style={{ fontSize: 15 }}>dec 12 - 20</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({});
