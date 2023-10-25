import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const Explore = () => {
  const [places, setPlaces] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://www.jsonkeeper.com/b/4G1G')
        .then((res) => res.json())
        .then((data) => setPlaces(data));
    };
    fetchData();
  }, []);
  //   console.log(places);
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 10 }}>
        Explore More
      </Text>

      <FlatList
        numColumns={2}
        data={places}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              backgroundColor: '#72a0c1',
              alignItems: 'center',
              margin: 7,
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: 60, height: 60 }}
              source={{ uri: item.img }}
            />
            <View style={{ marginLeft: 10, width: 120 }}>
              <Text style={{ color: 'white' }}>{item.location}</Text>
              <Text>{item.distance}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
