import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';

const HomeScreen = () => {
  return (
    <ScrollView>
      <Header />
      <Cards />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
