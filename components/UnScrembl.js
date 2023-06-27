/**
 * UnScrembl : Unobfusticate message page.
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useState }      from 'react';
import { useEffect }     from 'react';
import { useRef }        from 'react';

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


export default function () {
	return (
		<View>
			<Text>UnScrembl</Text>
		</View>
	);
}
