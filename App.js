/**
 * DistanS : Measure walking, riding etc distance, with records.
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { useState }  from 'react';
import { useEffect } from 'react';
import { useRef }    from 'react';
import { memo }      from 'react';
import type {Node}   from 'react';

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

// Constants.
//
// Debug
//

// No magic numbers.
//
const scremblColour           = '#d018ec';
const scremblGrey             = 'dimgray';
const scremblWhite            = 'white';


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

	function Header ({ page }) {
		return (
			<View style={[styles.spaceBetween, styles.mauveBox]}>
				<Image
					source={require ("./src/assets/images/scrembl-icon.png")}
					style={styles.logoImage}
				/>
				<Text style={styles.title}>
					Scrembl
				</Text>
				<TouchableOpacity
					onPress={() => null }
				>
					<FontAwesomeIcon  color={scremblColour} size={35} icon={faGear} />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => null }
				>
					<FontAwesomeIcon  color={scremblColour} size={35} icon={faCalendar} />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => null }
				>
					<FontAwesomeIcon  color={scremblColour} size={35} icon={faHouse} />
				</TouchableOpacity>
			</View>
		);
	}

	function MainPage () {
		return (
			<>
			<Header page={'main'}/>
			<View style={styles.mainPageContainer}>
				<Text style={styles.bigText}>
					I have a message to : 
				</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => null}
				>
					<Text style={styles.buttonText}>Scrembl</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => null}
				>
					<Text style={styles.buttonText}>UnScrembl</Text>
				</TouchableOpacity>
			</View>
			</>
		)
	}
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
