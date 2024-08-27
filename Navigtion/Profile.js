// const Profile = () => {
//   const { userloggeduidHandler } = useContext(AuthContext);
//   const navigation = useNavigation()
//   const handleLogOut=()=>{
//     AsyncStorage.removeItem('userloggeduid')
//     userloggeduidHandler("1")
//     // navigation.navigate("Login")
//   }
//   return (
//     <View>
//       <Text>Profile</Text>
//       <Button title='LOgOut' onPress={handleLogOut}/>
//     </View>
//   )
// }

// export default Profile

// const styles = StyleSheet.create({})

//

import React, { useEffect, useState, useContext } from "react";

import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import FeatherIcon from "react-native-vector-icons/Feather";

import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../Context/AuthContext";

const image9 = require("../assets/images/boss.png");

const logOut = require("../assets/images/logout.png");
const AdminData = [
  { label: "About", value: "", isTitle: true },
  { label: "Name", value: "Admin" },
  { label: "Email", value: "Admin@sukraa.in" },

  { label: "Admin", value: "Sukraa Software" },

  { label: "Admin", value: "E001" },

  { label: "Department", value: "Admin" },

  { label: "Mobile", value: "+91-7458744585" },

  { label: "Email", value: "Admin@sukraa.in" },

  { label: "Availability", value: "", isTitle: true },

  { label: "Shift", value: "Regular Shift" },

  { label: "Location", value: "Sukraa Software Solution Private Limited" },

  { label: "Time Zone", value: "IST (GMT +5:30)" },

  {
    label: "Reporting To",
    value: "IST (GMT +5:30)",
    isTitle: true,
    Profile: [
      {
        Name: "Thenu",
        Mobile: "9566771245",
        Role: "senior Developer",
        ECode: "E0196",
        image: image9,
      },
    ],
  },
];

const datas = [
  { label: "About", value: "", isTitle: true },
  { label: "Name", value: "Selvan v" },
  { label: "Email", value: "sevan@sukraa.in" },
  { label: "Designation", value: "Junior Software Developer" },

  { label: "Employee ID", value: "E0231" },

  { label: "Department", value: "Development" },

  { label: "Mobile", value: "+91-8248406629" },

  { label: "Email", value: "sevan@sukraa.in" },

  { label: "Availability", value: "", isTitle: true },

  { label: "Shift", value: "Regular Shift" },

  { label: "Location", value: "Sukraa Software Solution Private Limited" },

  { label: "Time Zone", value: "IST (GMT +5:30)" },

  {
    label: "Reporting To",
    value: "IST (GMT +5:30)",
    isTitle: true,
    Profile: [
      {
        Name: "Thenu",
        Mobile: "9566771245",
        Role: "senior Developer",
        ECode: "E0196",
        image: image9,
      },
    ],
  },
];

export default function Example() {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    darkMode: false,

    emailNotifications: true,

    pushNotifications: false,
  });
  const [ImageUri, setImageUri] = useState("");
  const [data, setData] = useState([]);
  const [adminData, setAdminData] = useState([]);
  const [crn, setCrn] = useState([]);
  console.log(ImageUri, "image");
  const { userloggeduidHandler } = useContext(AuthContext);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.assets[0].uri, "image");

    if (!result.canceled) {
      // Save the selected image URI in AsyncStorage
      const crn = await AsyncStorage.getItem("CRN");
      await AsyncStorage.setItem(`${crn}`, result.assets[0].uri);
      // Update state to reflect the selected image
      setImageUri(result.assets[0].uri);
    }
  };

  useEffect(() => {
    const getProfileImageUri = async () => {
      try {
        const crn = await AsyncStorage.getItem("CRN");
        const uri = await AsyncStorage.getItem(`${crn}`);
        if (uri !== null) {
          setImageUri(uri);
        }
      } catch (error) {
        console.error("Error retrieving profile image URI:", error);
      }
    };

    getProfileImageUri();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const crn = await AsyncStorage.getItem("CRN");
      setCrn(crn);
      // Assuming data and adminData are fetched from some source
      // Replace these with your actual data fetching logic
      const fetchedData = []; // Fetch your data
      const fetchedAdminData = []; // Fetch your admin data
      setData(datas);
      setAdminData(AdminData);
    };

    fetchData();
  }, []);

  const handleLogOut = () => {
    AsyncStorage.removeItem("userloggeduid");

    AsyncStorage.removeItem("CRN");

    userloggeduidHandler("1");

    const data = AsyncStorage.getItem("CRN");

    console.log(data, "CRN SET THE USER AGENSTS");

    // navigation.navigate("Login")
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleLogOut}>
          <View style={{ margin: 10 }}>
            <Image
              style={{
                width: 30,

                height: 30,

                marginRight: 10,
              }}
              source={logOut} // Change this to your profile image
            />
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  let emailDisplayed = false;
  const DynamicComponent = () => {
    return (
      <View style={styles.section}>
          
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.profile}>
            <TouchableOpacity onPress={pickImage}>
              {!ImageUri ? (
                <Image
                  style={{ ...styles.profileAvatar, width: 100, height: 100 }}
                  source={image9}
                />
              ) : (
                <Image
                  style={{ ...styles.profileAvatar, width: 100, height: 100 }}
                  source={{ uri: ImageUri }}
                />
              )}
            </TouchableOpacity>
            {/* <Image

              alt=""

              source={image9}

              style={styles.profileAvatar} /> */}



            {/* <TouchableOpacity

              onPress={() => {

                // handle onPress

              }}>

              <View style={styles.profileAction}>

                <Text style={styles.profileActionText}>Edit Profile</Text>

 

                <FeatherIcon color="#fff" name="edit" size={16} />

              </View>

            </TouchableOpacity> */}
          </View>

          <DynamicComponent />

          {/* <Text style={styles.contentFooter}>Made with ❤️ in Seattle</Text> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 24,

    paddingHorizontal: 0,

    flexGrow: 1,

    flexShrink: 1,

    flexBasis: 0,
  },

  header: {
    paddingLeft: 24,

    paddingRight: 24,

    // marginTop: 12,
  },

  title: {
    fontSize: 32,

    fontWeight: "700",

    color: "#1d1d1d",

    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,

    fontWeight: "500",

    color: "#929292",
  },

  contentFooter: {
    marginTop: 24,

    fontSize: 13,

    fontWeight: "500",

    color: "#929292",

    textAlign: "center",
  },

  /** Profile */

  profile: {
    padding: 16,

    flexDirection: "column",

    alignItems: "center",

    backgroundColor: "#fff",

    borderTopWidth: 1,

    borderBottomWidth: 1,

    borderColor: "#e3e3e3",
  },

  profileAvatar: {
    width: 60,

    height: 60,

    borderRadius: 9999,
  },

  profileName: {
    marginTop: 12,

    fontSize: 20,

    fontWeight: "600",

    color: "#090909",
  },

  profileEmail: {
    marginTop: 6,

    fontSize: 16,

    fontWeight: "400",

    color: "#848484",
  },

  profileAction: {
    marginTop: 12,

    paddingVertical: 10,

    paddingHorizontal: 16,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "center",

    backgroundColor: "#007bff",

    borderRadius: 12,
  },

  profileActionText: {
    marginRight: 8,

    fontSize: 15,

    fontWeight: "600",

    color: "#fff",
  },

  /** Section */

  section: {
    paddingTop: 12,
    backgroundColor:"#fff"
  },

  sectionTitle: {
    marginVertical: 8,

    marginHorizontal: 24,

    fontSize: 14,

    fontWeight: "600",

    color: "#a7a7a7",

    textTransform: "uppercase",

    letterSpacing: 1.2,
  },

  sectionBody: {
    paddingLeft: 24,

    backgroundColor: "#fff",

    borderTopWidth: 1,

    borderBottomWidth: 1,

    borderColor: "#e3e3e3",
  },

  /** Row */

  row: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "flex-start",

    paddingRight: 16,

    height: 50,
  },

  rowWrapper: {
    borderTopWidth: 1,

    borderColor: "#e3e3e3",
  },

  rowFirst: {
    borderTopWidth: 0,
  },

  rowIcon: {
    width: 30,

    height: 30,

    borderRadius: 4,

    alignItems: "center",

    justifyContent: "center",

    marginRight: 12,
  },

  rowLabel: {
    fontSize: 17,

    fontWeight: "500",

    color: "#000",
  },

  rowSpacer: {
    flexGrow: 1,

    flexShrink: 1,

    flexBasis: 0,
  },

  rowValue: {
    fontSize: 17,

    fontWeight: "500",

    color: "#8B8B8B",

    marginRight: 4,
  },

  section: {
    padding: 10,

    margin: 10,
  },

  sectionTitle: {
    margin: 10,

    fontSize: 15,

    fontWeight: "600",
  },

  label: {
    fontSize: 12,
  },

  value: {
    fontSize: 13,

    fontWeight: "600",
  },
  profileSection: {
    marginTop: 10,
  },

  profileSectionTitle: {
    fontSize: 14,

    fontWeight: "600",

    color: "#a7a7a7",

    marginBottom: 5,
  },

  profileContainer: {
    flexDirection: "row",

    alignItems: "center",

    marginBottom: 10,
  },

  profileImage: {
    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,
  },

  profileInfo: {
    flexDirection: "column",
  },

  profileName: {
    fontSize: 14,

    fontWeight: "600",

    marginBottom: 2,
  },

  profileDetail: {
    fontSize: 12,

    color: "#8B8B8B",
  },
});
