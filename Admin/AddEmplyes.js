import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    Alert,
} from "react-native";
import { StyleSheet } from 'react-native';


const AddEmplyes = ({ route, navigation }) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [empId, setEmpId] = useState("");
	
    const addEmployee = () => {
        if (!empId || !name || !position) {
            Alert.alert("Error", "Please fill in all the fields.");
            return;
        }
        const existingEmployees = route.params?.employees || [];
        if (existingEmployees.some((employee) => employee.empId === empId)) {
            Alert.alert("Error", "Employee with the same ID already exists.");
        } else {
			
            route.params?.addEmployee({
                id: Date.now().toString(),
                empId,
                name,
                position,
            });
            navigation.goBack();
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter Employee ID"
                value={empId}
                onChangeText={(text) => setEmpId(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter Name"
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter Position"
                value={position}
                onChangeText={(text) => setPosition(text)}
                style={styles.input}
            />
            <Button title="Add Employee" onPress={addEmployee} />
        </View>
    );
};

// styles.js



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0',
	},
	titleContainer: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
		paddingLeft: 10,
		marginBottom: 5,
	},
	titleIcon: {
		marginRight: 10,
		color: 'green',
	},
	title: {
		color: 'green',
		fontSize: 20,
		fontWeight: 'bold',
	},
	appbar: {
		backgroundColor: 'green',
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 5,
	},
	employeeList: {
		flex: 1,
		marginTop: 10,
		paddingHorizontal: 10,
	},
	card: {
		marginBottom: 10,
		elevation: 4,
		borderRadius: 10,
	},
	actionIcon: {
		marginHorizontal: 10,
	},
	fab: {
		position: 'absolute',
		margin: 16,
		right: 0,
		bottom: 0,
		backgroundColor: '#3498db',
		borderRadius: 28,
	},
	searchBarContainer: {
		backgroundColor: 'transparent',
		borderTopColor: 'transparent',
		borderBottomColor: 'transparent',
		flex: 1,
	},
	searchBarInputContainer: {
		backgroundColor: '#ecf0f1',
	},
	noRecordsContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});


export default AddEmplyes;