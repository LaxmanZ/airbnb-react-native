import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

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
  const route =  useRoute();
  console.log(route.params);
  return (
    <View>
      <Text>ConfirmScreen</Text>
    </View>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({});
