import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CarsData from "../data/CarsData";
import PageBackground from "../components/PageBackground";

export default function Home({ navigation }) {
  const carRender = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>Year: {item.year}</Text>
        <Text style={styles.productDescription}>Color: {item.color}</Text>
        <Text style={styles.productDescription}>Engine: {item.engine}</Text>
        <Text style={styles.productDescription}>Top Speed: {item.topSpeed}</Text>
        <Text style={styles.productPrice}>Price: ${item.price.toFixed(2)}</Text>
        <Text style={styles.productStock}>In Stock: {item.stock}</Text>
      </View>
    );
  };
  return (
    <PageBackground>
      <View style={styles.container}>
        <FlatList
          data={CarsData}
          renderItem={carRender}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </PageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    width: "100%", // Increased card width to 90%
    maxWidth: 1000, // Added a maximum width to prevent overly wide cards
    alignSelf: 'center', // Center the cards horizontally
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 14,
    marginTop: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  productStock: {
    fontSize: 14,
    color: "green",
    marginTop: 8,
  },
});
