// src/components/NameTitle/index.js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const NameTitle = ({ isDarkMode }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.name, isDarkMode ? styles.darkText : styles.lightText]}>Hazel Kate L. Butlay</Text>
      <Text style={[styles.username, isDarkMode ? styles.darkText : styles.lightText]}>butlay.hazelkate@gmail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    bottom: -185,
    left: 80,           
    alignItems: 'center', 
  },


  name: {
    fontSize: 38,
    fontWeight: 'bold',
    marginTop: 10, 
  },

  username: {
    fontSize: 25,
    marginTop: 6,  
  },

// Light mode 
lightText: {
  color: '#ffff', 
    textShadowColor: '#000', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2, 
},

// Dark mode 
  darkText: {
    color: '#fff', 
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2, 
  },
});

export default NameTitle;