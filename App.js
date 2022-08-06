import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS, IMAGES } from './src/Constants';

export default function App() {
  return (
    <View style={RegisterStyles.container}>
      <View style={RegisterStyles.Top_View}>
        <View style={{ paddingLeft: 40, paddingTop: 20 }}>
          <View style={RegisterStyles.ICON_VIEW}>
            <Image
              source={require('./src/assets/icon.png')}
              style={{ height: 150, width: 150, borderRadius: 10 }}
              resizeMode="cover"
            />
          </View>
          <Text style={RegisterStyles.Heading}>SIGN UP</Text>
          <Text style={{ paddingLeft: 15, color: COLORS.WHITE }}>
            Lorem ipsum dolor sit, amet,
          </Text>
          <Text style={{ paddingLeft: 15, color: COLORS.WHITE }}>
            consectetur adpiscing
          </Text>
        </View>

        <View
          style={{
            // alignItems: 'flex-end',
            // justifyContent: 'flex-end',
            // backgroundColor: COLORS.WHITE,
          }}>
          {/* code changing here... */}
          <Image source={require('./src/assets/radient.png')} />
        </View>
      </View>

      <View style={RegisterStyles.Middle_View}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor={COLORS.WHITE}
          style={RegisterStyles.Input_Style}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={COLORS.WHITE}
          style={RegisterStyles.Input_Style}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={COLORS.WHITE}
          style={RegisterStyles.Input_Style}
        />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor={COLORS.WHITE}
          style={RegisterStyles.Input_Style}
        />

        <LinearGradient
          // Button Linear Gradient
          colors={['#bc4e9c', '#f80759']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={RegisterStyles.BTN_Styles}>
          <TouchableOpacity>
            <Text style={{ color: COLORS.WHITE, fontWeight: 'bold' }}>
              SIGNUP
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text
            style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.WHITE }}>
            Or
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 20,
          }}>
          <View style={RegisterStyles.Social_Icons}>
            <Image
              source={IMAGES.GOOGLE}
              style={RegisterStyles.Social_Icon_Images}
            />
          </View>
          <View style={RegisterStyles.Social_Icons}>
            <Image
              source={IMAGES.FACEBOOK}
              style={RegisterStyles.Social_Icon_Images}
            />
          </View>
          <View style={RegisterStyles.Social_Icons}>
            <Image
              source={IMAGES.APPLE}
              style={RegisterStyles.Social_Icon_Images}
            />
          </View>
        </View>
      </View>
      <View style={RegisterStyles.Bottom_View}>
        <Text style={RegisterStyles.Bottom_TXT}>
          Already have Account? Sign In
        </Text>
      </View>
    </View>
  );
}

const RegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  Top_View: {
    flex: 0.3,
    //backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Middle_View: {
    flex: 0.6,
    //backgroundColor: 'orange',
    padding: 50,
  },
  Bottom_View: {
    flex: 0.1,
    // backgroundColor: 'green',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Input_Style: {
    borderWidth: 1,
    marginVertical: 10,
    //borderColor: COLORS.WHITE,
    color: COLORS.WHITE,
    padding: 20,
    borderRadius: 10,
    backgroundColor: COLORS.GRAY,
  },
  BTN_Styles: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 10,
    marginVertical: 10,
  },
  ICON_VIEW: { height: 130, width: 130, borderRadius: 50 },
  Heading: {
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.WHITE,
    marginVertical: 20,
    paddingTop: 10,
    paddingLeft: 15,
  },
  Social_Icons: { height: 50, width: 50 },
  Bottom_TXT: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: COLORS.WHITE,
  },
  Social_Icon_Images: { height: 50, width: 50 },
});
