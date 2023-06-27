/**
 * Scrembl : Header for all pages.
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { useState }  from 'react';
import { useEffect } from 'react';
import { useRef }    from 'react';
import { useContext }    from 'react';

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
}             from 'react-native';

import styles from '../styles';

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
	faLock,
	faUnlock,
} from '@fortawesome/free-solid-svg-icons';
import { colours } from '../constants';

export default function Header ({ page, setPages }) {
	return (
		<View style={[styles.spaceBetween, styles.mauveBox]}>
			<Image
				source={require ("../src/assets/images/scrembl-icon.png")}
				style={styles.logoImage}
			/>
			<Text style={styles.title}>
				Scrembl
			</Text>
			<TouchableOpacity
				onPress={() => setPages('scrembl') }
			>
				<FontAwesomeIcon  color={colours.scremblColour} size={25} icon={faLock} />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => setPages('unscrembl') }
			>
				<FontAwesomeIcon  color={colours.scremblColour} size={25} icon={faUnlock} />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => setPages('main') }
			>
				<FontAwesomeIcon  color={colours.scremblColour} size={25} icon={faHouse} />
			</TouchableOpacity>
		</View>
	);
}
