import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Explore from '../components/Explore';

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <Cards />
      <Explore />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
