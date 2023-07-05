/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
// import 'react-native-gesture-handler';
import I18n, { getLanguages } from 'react-native-i18n';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	KeyboardAvoidingView,
	BackHandler,
	YellowBox,
	LogBox
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Maps from './screens/AuthScreens/MapsComponent'

const store = configureStore()
export default function App() {
	

	return (
			<Provider store={store}>
				<Maps />
			</Provider>
	);
}
