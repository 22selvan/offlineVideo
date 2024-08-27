// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const ApplyLeave = () => {
//   return (
//     <View>
//       <Text>ApplyLeave</Text>
//     </View>
//   )
// }

// export default ApplyLeave

// const styles = StyleSheet.create({})

import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import DateTimePicker from '@react-native-community/datetimepicker';

import { useNavigation } from '@react-navigation/native';

 

const ApplyLeave = ({ initialLeaveType }) => {

 

  const navigation =useNavigation()

  const [reason, setReason] = useState('');

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const [leaveType, setLeaveType] = useState(initialLeaveType || 'Casual');

  const [employeeCode, setEmployeeCode] = useState('');

  const [balanceLeave, setBalanceLeave] = useState(0);

  const [endDateError, setEndDateError] = useState('');

  const [showStartDatePicker, setShowStartDatePicker] = useState(false);

  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const [items, setItems] = useState([

    {label: 'Casual Leave', value: 'Casual'},

    {label: 'Sick Leave', value: 'Sick'},

    {label: 'Compensatory Leave', value: 'Compensatory'},

    {label: 'Earned Leave', value: 'Earned'}

  ]);

  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(null);

 

  const leaveTypes = ['Casual', 'Sick', 'Compensatory', 'Earned'];

 

  const handleStartDateChange = (event, selectedDate) => {

    const currentDate = selectedDate || startDate;

    setShowStartDatePicker(false);

    setStartDate(currentDate);

  };

 

  const handleEndDateChange = (event, selectedDate) => {

    const currentDate = selectedDate || endDate;

    setShowEndDatePicker(false);

    setEndDate(currentDate);

    setEndDateError('');

  };

 

  const handleSubmit = () => {

    if (endDate < startDate) {

      setEndDateError('End date must be after start date');

      return;

    }

 

    console.log('Submitting leave request...');

    console.log('Leave Type:', leaveType);

    console.log('Reason:', reason);

    console.log('Start Date:', startDate);

    console.log('End Date:', endDate);

    console.log('Employee Code:', employeeCode);

    console.log('Balance Leave:', balanceLeave);

  };

 

  const handleCancel = () => {

    console.log('Cancel button clicked');

    navigation.goBack()

  };

 

  return (

    <View style={styles.container}>

      <Text style={styles.label}>Type of Leave:</Text>

      <DropDownPicker

      open={open}

      value={value}

      items={items}

      setOpen={setOpen}

      setValue={setValue}

      setItems={setItems}

      style={{

        backgroundColor: '#f0f0f0',

        borderColor: '#ccc',

        borderRadius: 8,

      }}

      labelStyle={{

        color: '#04bd8b',

        fontSize: 16,

      }}

    />

      <Text style={styles.label}>Reason for Leave:</Text>

      <TextInput

        style={styles.input}

        value={reason}

        onChangeText={text => setReason(text)}

        placeholder="Enter reason for leave"

        underlineColorAndroid="transparent"

        placeholderTextColor="grey"

        numberOfLines={3}

        multiline={true}

      />

      <Text style={styles.label}>Start Date:</Text>

      <TouchableOpacity onPress={() => setShowStartDatePicker(true)}>

        <Text style={styles.dateText}>{startDate.toDateString()}</Text>

      </TouchableOpacity>

      {showStartDatePicker && (

        <DateTimePicker

          value={startDate}

          mode="date"

          is24Hour={true}

          display="default"

          onChange={handleStartDateChange}

        />

      )}

      <Text style={styles.label}>End Date:</Text>

      <TouchableOpacity onPress={() => setShowEndDatePicker(true)}>

        <Text style={styles.dateText}>{endDate.toDateString()}</Text>

      </TouchableOpacity>

      {showEndDatePicker && (

        <DateTimePicker

          value={endDate}

          mode="date"

          is24Hour={true}

          display="default"

          onChange={handleEndDateChange}

        />

      )}

      {endDateError ? <Text style={styles.errorText}>{endDateError}</Text> : null}

      <Text style={styles.label}>Employee Code:</Text>

      <TextInput

        style={styles.input}

        value={employeeCode}

        onChangeText={text => setEmployeeCode(text)}

        placeholder="Enter employee code"

      />

      <Text style={styles.label}>Balance Leave:</Text>

      <TextInput

        style={styles.input}

        value={balanceLeave.toString()}

        onChangeText={text => setBalanceLeave(parseInt(text))}

        placeholder="Enter balance leave"

        keyboardType="numeric"

      />

      <View style={styles.footer}>

        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>

          <Text style={styles.buttonText}>Cancel</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmit}>

          <Text style={styles.buttonText}>Submit</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};

 

const styles = StyleSheet.create({

  container: {

    flex: 1,

    paddingHorizontal: 20,

    paddingTop: 20,

    backgroundColor: 'white',

  },

  label: {

    fontSize: 16,

    marginBottom: 5,

  },

  input: {

    borderWidth: 1,

    borderColor: '#ccc',

    borderRadius: 5,

    padding: 10,

    marginBottom: 20,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  button: {

    flex: 1,

    paddingVertical: 15,

    borderRadius: 5,

    alignItems: 'center',

  },

  cancelButton: {

    backgroundColor: '#f75d2f',

    marginRight: 10,

  },

  submitButton: {

    backgroundColor: '#04bd8b',

    marginLeft: 10,

  },

  buttonText: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

  },

  errorText: {

    color: 'red',

    marginBottom: 10,

  },

  dateText: {

    borderWidth: 1,

    borderColor: '#ccc',

    borderRadius: 5,

    padding: 10,

    marginBottom: 20,

  },

});

 

export default ApplyLeave;