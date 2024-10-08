import React from 'react';
import { Switch, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const DarkModeToggle = ({ toggle, isDarkMode }) => {
  return (
    <TouchableOpacity 
      style={[styles.container, isDarkMode && styles.darkContainer]} 
      onPress={toggle}
    >
      <Icon 
        name={isDarkMode ? 'dark-mode' : 'light-mode'} 
        size={24} 
        color={isDarkMode ? '#fff' : '#000'} 
        style={styles.icon} 
      />
      <Text style={[styles.label, isDarkMode && styles.darkLabel]}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </Text>
      <Switch
        onValueChange={toggle}
        value={isDarkMode}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  // Light mode 
    container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#CAF0F8', 
    margin: 100,
    borderWidth: 2,          
    borderColor: '#0077B6',
    marginTop: 460,
    backgroundColor: '#EBEBEB', 
  },

  label: {
    marginRight: 15,
    fontSize: 25,
    color: '#000',
  },
  
  // Dark mode
  darkContainer: {
    backgroundColor: '#3e3e3e', 
    borderRadius: 10,        
    borderWidth: 2,          
    borderColor: '#F17720',
  },
  
  darkLabel: {
    color: '#fff', 
  },

  icon: {
    marginRight: 15, 
    marginLeft:  15, 

  },
});

export default DarkModeToggle;