/**
 * Scrembl : Obfusticate messages to post on socials that can be unobfusticated by others.
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { useState }      from 'react';
import { useEffect }     from 'react';
import { useRef }        from 'react';
import type {Node}       from 'react';

import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	Button,
	FlatList,
	TouchableOpacity,
	Image,
	Platform,
	ToastAndroid,
	PermissionsAndroid,
	Dimensions,
	BackHandler,
	ActivityIndicator,
	Linking,
} from 'react-native';

// FontAwesome.
//
import {
	Colors,
} from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
	faQuestion,
	faPlus,
	faMinus,
	faPlay,
	faGear,
	faTrash,
	faCalendar,
	faHouse,
	faCircleDot,
	faFloppyDisk,
} from '@fortawesome/free-solid-svg-icons';

// Other community libs.
//
import SplashScreen   from 'react-native-splash-screen';

// Local Components.
//
import styles       from './styles';
import MainPage     from './components/MainPage';

// Constants.
//
// Debug
//

// App context.
//
import { colors }   from './constants';

// The Scrembl App.
//
const App: () => Node = () => {

	useEffect(() => {
		SplashScreen.hide();
	}, []);

    // https://reactnative.dev/docs/backhandler
    //
    useEffect(() => {
        const backAction = () => {
			return false;
        };
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => backAction (),
        );
        return () => backHandler.remove();
    },[]);
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar />
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				keyboardShouldPersistTaps='handled'
			>
				<MainPage />
			</ScrollView>
		</SafeAreaView>
	);
};
export default App;
