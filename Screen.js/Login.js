// import React, { useContext, useState } from 'react'
// import {
//   StyleSheet,
//   SafeAreaView,
//   View,
//   Image,
//   Text,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { AuthContext } from '../Context/AuthContext';

// export default function Login({navigation}) {
//   const { userloggeduidHandler } = useContext(AuthContext);

//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//   });

//   const SubmiteLogin = () => {
//     if (form.email.trim() !== '' && form.password.trim() !== '') {
//       // Navigate to the Home screen if email and password are provided
//       // navigation.navigate('Home');
//       const userId = "Selvan@123"
//       userloggeduidHandler(userId)
//     } else {
//       // Show an alert if email or password is missing
//       alert("Please provide a valid email and password");
//     }
//   }
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
//       <View style={styles.container}>
//         <KeyboardAwareScrollView>
//           <View style={styles.header}>
//             <Image
//               alt="App Logo"
//               resizeMode="contain"
//               style={styles.headerImg}
//               source={{
//                 uri: 'https://sukraa.in/wp-content/uploads/2020/08/Sukraa-Logo-111.png',
//               }} />

//             <Text style={styles.title}>
//               Sign In <Text style={{ color: '#075eec' }}></Text>
//             </Text>

//             <Text style={styles.subtitle}>
//               Get access to your portfolio and more
//             </Text>
//           </View>

//           <View style={styles.form}>
//             <View style={styles.input}>
//               <Text style={styles.inputLabel}>Email address</Text>

//               <TextInput
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 keyboardType="email-address"
//                 onChangeText={email => setForm({ ...form, email })}
//                 placeholder="john@example.com"
//                 placeholderTextColor="#6b7280"
//                 style={styles.inputControl}
//                 value={form.email} />
//             </View>

//             <View style={styles.input}>
//               <Text style={styles.inputLabel}>Password</Text>

//               <TextInput
//                 autoCorrect={false}
//                 onChangeText={password => setForm({ ...form, password })}
//                 placeholder="********"
//                 placeholderTextColor="#6b7280"
//                 style={styles.inputControl}
//                 secureTextEntry={true}
//                 value={form.password} />
//             </View>

//             <View style={styles.formAction}>
//               <TouchableOpacity
//                 onPress={SubmiteLogin}>
//                 <View style={styles.btn}>
//                   <Text style={styles.btnText}>Sign in</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>

//             <Text style={styles.formLink}>Forgot password?</Text>
//           </View>
//         </KeyboardAwareScrollView>

//         <TouchableOpacity
        
//           style={{ marginTop: 'auto' }}>
//           <Text style={styles.formFooter}>
//             Don't have an account?{' '}
//             <Text   onPress={() => {
//            navigation.navigate('Register')
//           }} style={{ textDecorationLine: 'underline' }}>Sign up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 24,
//     paddingHorizontal: 0,
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//   },
//   title: {
//     fontSize: 31,
//     fontWeight: '700',
//     color: '#1D2A32',
//     marginBottom: 6,
//   },
//   subtitle: {
//     fontSize: 15,
//     fontWeight: '500',
//     color: '#929292',
//   },
//   /** Header */
//   header: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 36,
//   },
//   headerImg: {
//     width: 100,
//     height: 100,
//     alignSelf: 'center',
//     marginBottom: 10,
//   },
//   /** Form */
//   form: {
//     marginBottom: 24,
//     paddingHorizontal: 24,
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//   },
//   formAction: {
//     marginTop: 4,
//     marginBottom: 16,
//   },
//   formLink: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#075eec',
//     textAlign: 'center',
//   },
//   formFooter: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#222',
//     textAlign: 'center',
//     letterSpacing: 0.15,
//   },
//   /** Input */
//   input: {
//     marginBottom: 16,
//   },
//   inputLabel: {
//     fontSize: 17,
//     fontWeight: '600',
//     color: '#222',
//     marginBottom: 8,
//   },
//   inputControl: {
//     height: 50,
//     backgroundColor: '#fff',
//     paddingHorizontal: 16,
//     borderRadius: 12,
//     fontSize: 15,
//     fontWeight: '500',
//     color: '#222',
//     borderWidth: 1,
//     borderColor: '#C9D3DB',
//     borderStyle: 'solid',
//   },
//   /** Button */
//   btn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 30,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     backgroundColor: '#075eec',
//     borderColor: '#075eec',
//   },
//   btnText: {
//     fontSize: 18,
//     lineHeight: 26,
//     fontWeight: '600',
//     color: '#fff',
//   },
// });


import React, { useContext, useState } from 'react'

import {

  StyleSheet,

  SafeAreaView,

  View,

  Image,

  Text,

  TouchableOpacity,

  TextInput,

} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { AuthContext } from '../Context/AuthContext';

import AsyncStorage from '@react-native-async-storage/async-storage';

 

export default function Login({navigation}) {

  const { userloggeduidHandler } = useContext(AuthContext);

 

  const [form, setForm] = useState({

    userId: '',

    email: '',

    password: '',

  });

 

  // const SubmiteLogin = () => {

  //   if (form.email.trim() !== '' && form.password.trim() !== '') {

  //     // Navigate to the Home screen if email and password are provided

  //     // navigation.navigate('Home');

  //     const LoginId = ["001","002","003"]

  //     const userId = form.userId

  //     const findId = LoginId.includes(form.userId)

  //     console.log(findId);

  //     if(findId){

  //       userloggeduidHandler(userId)

  //       AsyncStorage.setItem('CRN', userId);

  //     }else{

  //       alert("Please provide a valid CRN");

  //     }

     

  //   } else {

  //     // Show an alert if email or password is missing

  //     alert("Please provide a valid email and password");

  //   }

  // }

 

  const SubmiteLogin = () => {

    if (form.email.trim() !== '' && form.password.trim() !== '' && form.userId.trim() !== '') {

      const LoginId = ["001", "002", "003","004"];

      const userId = form.userId;

      const findId = LoginId.includes(form.userId);

      if (findId) {

        userloggeduidHandler(userId);

        AsyncStorage.setItem('CRN', userId).then(() => {

          console.log('CRN stored successfully');

          // navigation.navigate('Home'); // Navigate after successful login

        }).catch(error => {

          console.error('Error storing CRN:', error);

          alert("An error occurred during login. Please try again.");

        });

      } else {

        alert("Please provide a valid CRN");

      }

    } else {

      alert("Please provide a valid email, password, and CRN");

    }

  }

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>

      <View style={styles.container}>

        <KeyboardAwareScrollView>

          <View style={styles.header}>

            <Image

              alt="App Logo"

              resizeMode="contain"

              style={styles.headerImg}

              source={{

                uri: 'https://media.licdn.com/dms/image/v2/C560BAQFbVuMDG5McOg/company-logo_200_200/company-logo_200_200/0/1648105410610/resbee_info_technologies_pvt_ltd_logo?e=2147483647&v=beta&t=YC_8Wv5hUPGe7athWbTpWZk8i_CqqpGxA7OihpzGKgg',

              }} />

 

            <Text style={styles.title}>

              Learn LMS <Text style={{ color: '#075eec' }}></Text>

            </Text>
            <Text style={styles.signtitle}>

Sign In <Text style={{ color: '#075eec',fontSize:13 }}></Text>

</Text>

 

            <Text style={styles.subtitle}>

              {/* Get access to your portfolio and more */}

            </Text>

          </View>

 

          <View style={styles.form}>

          <View style={styles.input}>

              <Text style={styles.inputLabel}>User Id</Text>

 

              <TextInput

                autoCapitalize="none"

                autoCorrect={false}

                keyboardType="number-pad"

                onChangeText={userId => setForm({ ...form, userId })}

                placeholder="User Id"

                placeholderTextColor="#6b7280"

                style={styles.inputControl}

                value={form.userId} />

            </View>

            <View style={styles.input}>

              <Text style={styles.inputLabel}>Email address</Text>

 

              <TextInput

                autoCapitalize="none"

                autoCorrect={false}

                keyboardType="email-address"

                onChangeText={email => setForm({ ...form, email })}

                placeholder="Email"

                placeholderTextColor="#6b7280"

                style={styles.inputControl}

                value={form.email} />

            </View>

 

            <View style={styles.input}>

              <Text style={styles.inputLabel}>Password</Text>

 

              <TextInput

                autoCorrect={false}

                onChangeText={password => setForm({ ...form, password })}

                placeholder="********"

                placeholderTextColor="#6b7280"

                style={styles.inputControl}

                secureTextEntry={true}

                value={form.password} />

            </View>

 

            <View style={styles.formAction}>

              <TouchableOpacity

                onPress={SubmiteLogin}>

                <View style={styles.btn}>

                  <Text style={styles.btnText}>Sign in</Text>
                  

                </View>

              </TouchableOpacity>

            </View>

 
{/* 
            <Text style={styles.formLink}>Forgot password?</Text> */}

          </View>

        </KeyboardAwareScrollView>

{/*

        <TouchableOpacity

       

          style={{ marginTop: 'auto' }}>

          <Text style={styles.formFooter}>

            Don't have an account?{' '}

            <Text   onPress={() => {

           navigation.navigate('Register')

          }} style={{ textDecorationLine: 'underline' }}>Sign up</Text>

          </Text>

        </TouchableOpacity> */}

      </View>

    </SafeAreaView>

  );

}

 

const styles = StyleSheet.create({

  container: {

    paddingVertical: 24,

    paddingHorizontal: 0,

    flexGrow: 1,

    flexShrink: 1,

    flexBasis: 0,
    backgroundColor:"white"

  },
  signtitle:{
     fontSize:22,
     fontWeight:"600",
     color:"blue"
  },

  title: {

    fontSize: 31,

    fontWeight: '700',

    color: 'orange',

    marginBottom: 6,

  },

  subtitle: {

    fontSize: 15,

    fontWeight: '500',

    color: '#929292',

  },

  /** Header */

  header: {

    alignItems: 'center',

    justifyContent: 'center',

    marginVertical: 36,

  },

  headerImg: {

    width: 100,

    height: 100,

    alignSelf: 'center',

    marginBottom: 10,

  },

  /** Form */

  form: {

    marginBottom: 24,

    paddingHorizontal: 24,

    flexGrow: 1,

    flexShrink: 1,

    flexBasis: 0,

  },

  formAction: {

    marginTop: 4,

    marginBottom: 16,

  },

  formLink: {

    fontSize: 16,

    fontWeight: '600',

    color: '#075eec',

    textAlign: 'center',

  },

  formFooter: {

    fontSize: 15,

    fontWeight: '600',

    color: '#222',

    textAlign: 'center',

    letterSpacing: 0.15,

  },

  /** Input */

  input: {

    marginBottom: 16,

  },

  inputLabel: {

    fontSize: 17,

    fontWeight: '600',

    color: '#222',

    marginBottom: 8,

  },

  inputControl: {

    height: 50,

    backgroundColor: '#fff',

    paddingHorizontal: 16,

    borderRadius: 12,

    fontSize: 15,

    fontWeight: '500',

    color: '#222',

    borderWidth: 1,

    borderColor: '#C9D3DB',

    borderStyle: 'solid',

  },

  /** Button */

  btn: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    borderRadius: 30,

    paddingVertical: 10,

    paddingHorizontal: 20,

    borderWidth: 1,

    backgroundColor: '#075eec',

    borderColor: '#075eec',

  },

  btnText: {

    fontSize: 18,

    lineHeight: 26,

    fontWeight: '600',

    color: '#fff',

  },

});
