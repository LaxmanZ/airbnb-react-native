import { Image, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  FontAwesome,
  Ionicons,
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import DateRangePicker from 'rnv-date-range-picker';
import moment from 'moment';

const ReserveScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  //   console.log(route.params);
  const [selectedRange, setRange] = useState({});
  const day = new Date(selectedRange.firstDate);
  const night = new Date(selectedRange.secondDate);
  const diffTime = Math.abs(day - night);

  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(days);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={{ width: '100%', height: 200 }}
          source={{ uri: route.params.img }}
        />
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            {route.params.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 15,
              alignItems: 'center',
              marginTop: 8,
            }}
          >
            <AntDesign name="star" size={25} color="crimson" />
            <Text style={{ fontSize: 16 }}>{route.params.star}</Text>
            <Text style={{ color: 'gray', fontSize: 16 }}>
              {route.params.location}
            </Text>
          </View>
          <Text
            style={{
              height: 1,
              borderWidth: 1,
              borderColor: '#d8d8d8',
              marginTop: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
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
              borderWidth: 1,
              borderColor: '#d8d8d8',
              marginTop: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                Hosted By {route.params.person}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#8a2bef',
                  marginTop: 10,
                }}
              >
                {route.params.description}
              </Text>
            </View>
            <Image
              source={{ uri: route.params.image }}
              style={{ width: 45, height: 45, borderRadius: 50 }}
            />
          </View>
          <Text
            style={{
              height: 1,
              borderWidth: 1,
              borderColor: '#d8d8d8',
              marginTop: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Feather name="home" size={28} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: '600' }}>
                Entire Home
              </Text>
              <Text style={{ color: 'gray', fontSize: 16 }}>
                You Will Have The TreeHouse To Yourself
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Feather name="smile" size={28} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: '600' }}>
                Enhanced Clean
              </Text>
              <Text style={{ color: 'gray', fontSize: 16 }}>
                the host is committed to Airbnb's 5 step cleaning process
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Ionicons name="location-outline" size={28} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: '600' }}>
                Great Location
              </Text>
              <Text style={{ color: 'gray', fontSize: 16 }}>
                100% of the guests gave a 5 star rating
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <AntDesign name="calendar" size={28} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18 }}>Free Cancellation Available</Text>
            </View>
          </View>
          <Text
            style={{
              height: 1,
              borderWidth: 1,
              borderColor: '#d8d8d8',
              marginTop: 12,
            }}
          />
          <View style={{ marginTop: 12 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
              Where You'll Sleep
            </Text>
            <View
              style={{
                marginTop: 8,
                borderColor: 'gray',
                borderWidth: 1,
                width: 130,
                height: 80,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}
            >
              <Ionicons name="bed-outline" size={30} color="black" />
              <Text st={{ fontSize: 15, fontWeight: 'bold' }}>Bedroom</Text>
              <Text>1 Double Bed</Text>
            </View>

            <Text
              style={{
                height: 1,
                borderWidth: 1,
                borderColor: '#d8d8d8',
                marginTop: 12,
              }}
            />
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                What This Place Offers
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="food-fork-drink"
                  size={28}
                  color="black"
                />
                <Text
                  style={{ fontSize: 18, fontWeight: '400', marginLeft: 10 }}
                >
                  Kitchen
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}
              >
                <MaterialIcons name="wifi" size={28} color="black" />
                <Text
                  style={{ fontSize: 18, fontWeight: '400', marginLeft: 10 }}
                >
                  Wifi
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}
              >
                <AntDesign name="car" size={28} color="black" />
                <Text
                  style={{ fontSize: 18, fontWeight: '400', marginLeft: 10 }}
                >
                  Free Parking on Premises
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}
              >
                <MaterialIcons name="pets" size={28} color="black" />
                <Text
                  style={{ fontSize: 18, fontWeight: '400', marginLeft: 10 }}
                >
                  Pets
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}
              >
                <FontAwesome5 name="charging-station" size={24} color="black" />
                <Text
                  style={{ fontSize: 18, fontWeight: '400', marginLeft: 10 }}
                >
                  Free Vehicle Charging On Premises
                </Text>
              </View>
            </View>

            <Text
              style={{
                height: 1,
                borderWidth: 1,
                borderColor: '#d8d8d8',
                marginTop: 18,
              }}
            />

            <DateRangePicker
              onSelectDateRange={(range) => {
                setRange(range);
              }}
              responseFormat="YYYY-MM-DD"
              minDate={moment()}
            />
            <View style={styles.container}>
              {!selectedRange.firstDate && !selectedRange.secondDate ? null : (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 10,
                    }}
                  >
                    <Text style={{ fontSize: 17 }}>
                      {selectedRange.firstDate} -{' '}
                    </Text>
                    <Text style={{ fontSize: 17 }}>
                      {selectedRange.secondDate}
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </View>
      </ScrollView>

      <Pressable
        style={{
          backgroundColor: '#AFD8F5',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {route.params.price}
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('Confirm', {
              img: route.params.img,
              title: route.params.title,
              location: route.params.location,
              description: route.params.description,
              price: route.params.price,
              no_of_days: days,
              startDate: selectedRange.firstDate,
              endDate: selectedRange.secondDate,
              star: route.params.star,
              person: route.params.person,
            })
          }
          disabled={!selectedRange.firstDate && !selectedRange.secondDate}
          style={{ backgroundColor: '#fd5c63', padding: 10 }}
        >
          <Text style={{ color: 'white' }}>Reserve</Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default ReserveScreen;

const styles = StyleSheet.create({});
