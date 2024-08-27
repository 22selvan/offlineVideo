// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const AdminHomeScreen = () => {
//   return (
//     <View>
//       <Text>AdminHomeScreen</Text>
//     </View>
//   )
// }

// export default AdminHomeScreen

// const styles = StyleSheet.create({})

import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    Alert,
    StyleSheet
} from "react-native";

import {
    FAB,
    Card,
    Title,
    Paragraph,
    Provider as PaperProvider,
    Appbar,
} from "react-native-paper";
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import Animated, {
    useAnimatedStyle,
    withSpring,
    useSharedValue,
} from "react-native-reanimated";

 
const AdminHomeScreen = ({ navigation }) => {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");
    const fabScale = useSharedValue(1);
    useEffect(() => {
        const defaultEmployees = [
            {
                id: "1",
                empId: "EMP001",
                name: "Ramesh",
                position: "Software Engineer",
            },
            {
                id: "2",
                empId: "EMP002",
                name: "Suresh",
                position: "Product Manager",
            },
            {
                id: "3",
                empId: "EMP003",
                name: "Ram",
                position: "UI/UX Designer",
            },
            {
                id: "4",
                empId: "EMP004",
                name: "Kumar",
                position: "UI/UX Designer",
            },
            {
                id: "5",
                empId: "EMP005",
                name: "Rajan",
                position: "UI/UX Designer",
            },
        ];
        setEmployees(defaultEmployees);
    }, []);
    useEffect(() => {
        const filtered = employees.filter((employee) =>
            employee.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredEmployees(filtered);
    }, [search, employees]);
    const handleSort = () => {
        const newOrder = sortOrder === "asc" ? "desc" : "asc";
        setSortOrder(newOrder);
        const sortedEmployees = [...employees].sort((a, b) => {
            if (newOrder === "asc") {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
        setEmployees(sortedEmployees);
    };
    const deleteEmployee = (id) => {
        const updatedEmployees = employees.filter(
            (employee) => employee.id !== id
        );
        setEmployees(updatedEmployees);
    };
    const editEmployee = (id, updatedEmployee) => {
        const updatedEmployees = employees.map((employee) =>
            employee.id === id ? updatedEmployee : employee
        );
        setEmployees(updatedEmployees);
    };
    const addEmployee = (newEmployee) => {
        if (
            employees.some((employee) => employee.empId === newEmployee.empId)
        ) {
            Alert.alert("Error", "Employee with the same ID already exists.");
        } else {
            setEmployees([...employees, newEmployee]);
            navigation.goBack();
        }
    };
    const fabStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: withSpring(fabScale.value) }],
        };
    });
    return (
        <View style={styles.container}>
            {/* <View style={styles.titleContainer}>
                <Icon
                    name="people"
                    size={24}
                    color="white"
                    style={styles.titleIcon}
                />
                <Text style={styles.title}>GeeksforGeeks Emp Management</Text>
            </View> */}
            <Appbar.Header  style={styles.appbar}>
            <Appbar.Action icon="magnify"/>
        <TextInput
          placeholder="Search Employees..."
          onChangeText={setSearch}
          value={search}
          style={styles.searchInput}
        />
                {/* <SearchBar
                    placeholder="Search Employees..."
                    onChangeText={setSearch}
                    value={search}
                    lightTheme
                    containerStyle={styles.searchBarContainer}
                    inputContainerStyle={styles.searchBarInputContainer}
                /> */}
                <Appbar.Action
                    icon={() => (
                        <Icon name="filter-alt" size={24} color="#04bd8b" />
                    )}
                    onPress={handleSort}
                />
            </Appbar.Header>
            {(filteredEmployees.length === 0 && search !== "") ||
            (employees.length === 0 && filteredEmployees.length === 0) ? (
                <View style={styles.noRecordsContainer}>
                    <Text>No records found</Text>
                </View>
            ) : (
                <FlatList
                    data={filteredEmployees}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Card style={styles.card}>
                            <Card.Content>
                                <Title>{item.name}</Title>
                                <Paragraph>ID: {item.empId}</Paragraph>
                                <Paragraph>Position: {item.position}</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("EditEmploye", {
                                            employee: item,
                                            editEmployee: editEmployee,
                                        })
                                    }
                                >
                                    <Icon
                                        name="edit"
                                        size={24}
                                        color="#04bd8b"
                                        style={styles.actionIcon}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => deleteEmployee(item.id)}
                                >
                                    <Icon
                                        name="delete"
                                        size={24}
                                        color="#04bd8b"
                                        style={styles.actionIcon}
                                    />
                                </TouchableOpacity>
                            </Card.Actions>
                        </Card>
                    )}
                    style={styles.employeeList}
                />
            )}
            <Animated.View style={[styles.fab, fabStyle]}>
                <FAB
                    icon={() => <Icon name="add" size={24} color="white" />}
                    onPress={() => {
                        fabScale.value = 0.8;
                        navigation.setOptions({
                            tabBarVisible: false,
                            addEmployee: addEmployee,
                        });
                        navigation.navigate("AddEmplye");
                    }}
                    onStateChange={({ nativeEvent }) => {
                        if (nativeEvent.state === 2) {
                            fabScale.value = 1;
                        }
                    }}
                />
            </Animated.View>
        </View>
    );
};

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
        marginTop:3,
		backgroundColor: '#ffff',
	},
    
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		padding: 10,
		backgroundColor: '#3498db',
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
    searchInput: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
      },
});

export default AdminHomeScreen