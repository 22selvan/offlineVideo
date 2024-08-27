// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Attendence = () => {
//   return (
//     <View>
//       <Text>Attendence</Text>
//     </View>
//   )
// }

// export default Attendence
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const shiftsData = {
  weekly: [
    { id: 1, day: 'Monday', start: '9:00 AM', end: '5:00 PM' },
    { id: 2, day: 'Tuesday', start: '9:00 AM', end: '5:00 PM' },
    { id: 3, day: 'Wednesday', start: '9:00 AM', end: '5:00 PM' },
    { id: 4, day: 'Thursday', start: '9:00 AM', end: '5:00 PM' },
    { id: 5, day: 'Friday', start: '9:00 AM', end: '5:00 PM' },
  ],
  monthly: [
    { id: 1, day: '1st', start: '9:00 AM', end: '5:00 PM' },
    { id: 2, day: '8th', start: '9:00 AM', end: '5:00 PM' },
    { id: 3, day: '15th', start: '9:00 AM', end: '5:00 PM' },
    { id: 4, day: '22nd', start: '9:00 AM', end: '5:00 PM' },
    { id: 5, day: '29th', start: '9:00 AM', end: '5:00 PM' },
  ],
  yearly: [
    { id: 1, month: 'January', start: '9:00 AM', end: '5:00 PM' },
    { id: 2, month: 'February', start: '9:00 AM', end: '5:00 PM' },
    { id: 3, month: 'March', start: '9:00 AM', end: '5:00 PM' },
    { id: 4, month: 'April', start: '9:00 AM', end: '5:00 PM' },
    { id: 5, month: 'May', start: '9:00 AM', end: '5:00 PM' },
  ],
};

const ShiftItem = ({ item }) => (
  <View style={styles.shift}>
    <Text>{item.day || item.month}</Text>
    <Text>{item.start}</Text>
    <Text>{item.end}</Text>
  </View>
);

const AttendanceScreen = () => {
  const [activeTab, setActiveTab] = useState('Weekly');

  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handleTabPress('Weekly')} style={[styles.tab, activeTab === 'Weekly' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'Weekly' && styles.activeTabText]}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('Monthly')} style={[styles.tab, activeTab === 'Monthly' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'Monthly' && styles.activeTabText]}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('Yearly')} style={[styles.tab, activeTab === 'Yearly' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'Yearly' && styles.activeTabText]}>Yearly</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Shifts</Text>
        <FlatList
          data={shiftsData[activeTab.toLowerCase()]}
          renderItem={({ item }) => <ShiftItem item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  tabText: {
    color: '#333',
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  shift: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
});

export default AttendanceScreen;
                                                                                                                                      