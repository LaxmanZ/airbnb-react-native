import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const ConfirmScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Explore Airbnb',
      headerStyle: {
        backgroundColor: '#fd5c63',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    });
  });
  const route = useRoute();
  //   console.log(route.params);

  return (
    <View>
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 10 }}
          source={{ uri: route.params.img }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: 'gray' }}>{route.params.location}</Text>
          <Text style={{ marginVertical: 5, fontSize: 16, fontWeight: 'bold' }}>
            {route.params.title.substr(0, 30)}...
          </Text>
          <Text style={{ width: 300 }}>{route.params.description}</Text>

          <Text style={{ fontSize: 16, marginTop: 5 }}>
            <AntDesign
              name="star"
              size={20}
              color="crimson"
              style={{ marginHorizontal: 5 }}
            />
            {route.params.star} ratings
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
          padding: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
            This is a Rare Find.
          </Text>
          <Text style={{ fontSize: 16, color: 'gray', marginTop: 2 }}>
            Melati's on Airbnb is usually Fully Booked
          </Text>
        </View>
        <FontAwesome name="diamond" size={24} color="#c71585" />
      </View>

      <Text
        style={{
          height: 1,
          borderWidth: 2,
          borderColor: '#d8d8d8',
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({});
