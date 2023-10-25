import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Experience = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 5 }}>
        Discover Airbnb Experiences
      </Text>

      <ImageBackground
        style={{
          width: 370,
          height: 450,
          resizeMode: 'contain',
          marginLeft: 10,
          marginTop: 20,
        }}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcIhhZoVAOPiN5Mggdz1NdjW-5nvZvTzFog&usqp=CAU',
        }}
      >
        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              width: 260,
              color: 'white',
            }}
          >
            Things To Do On Your Trip
          </Text>

          <Pressable
            style={{
              backgroundColor: 'white',
              width: 140,
              marginTop: 50,
              padding: 10,
            }}
          >
            <Text
              style={{ fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}
            >
              Experiences
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Experience;

const styles = StyleSheet.create({});
