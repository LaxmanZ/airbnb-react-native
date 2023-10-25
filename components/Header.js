import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        style={{ width: '100%', height: 540 }}
        source={{
          uri: 'https://wallpapersmug.com/download/1280x900/3126d4/outing-campfire-tent-night.jpg',
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 15,
            padding: 8,
            marginTop: 40,
            width: 250,
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          <Feather name="search" size={22} color="#c71585" />
          <TextInput
            style={{ marginLeft: 20, fontSize: 16, color: 'gray' }}
            placeholder="Where You Want to Go?"
          />
        </View>

        <Pressable
          onPress={() => navigation.navigate('Search')}
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 15,
            padding: 10,
            width: 120,
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          <Text
            style={{
              fontSize: 17,
              color: '#c71585',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            I'm Flexible
          </Text>
        </Pressable>

        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Not Sure Where To Go?
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            Perfect.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
