/**
 * UnScrembl : UnObfusticate message page.
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
	TextInput,
	Keyboard,
	KeyboardAvoidingView,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
	faClipboard,
	faTrash,
}                          from '@fortawesome/free-solid-svg-icons';
import Clipboard           from '@react-native-clipboard/clipboard';
import { colours }         from '../constants';
import { unScrembl }       from '../functions/gubbins';

export default function ({scrollRef}) {
	const [scrembledText,   setScrembledText  ] = useState('');
	const [unScrembledText, setUnScrembledText] = useState('');
	function copyToClipboard() {
		Clipboard.setString(unScrembledText);
		ToastAndroid.show("Copied to Clipboard!", ToastAndroid.LONG);
	}
	async function pasteFromClipboard() {
		const clipboardText = await Clipboard.getString();
		setScrembledText(clipboardText);
	}
	function onUnScrembl() {
		Keyboard.dismiss();
		let unobfusticated = unScrembl(scrembledText);
		setUnScrembledText(unobfusticated);
		scrollRef.current.scrollToEnd();
	}
	function clearText() {
		setUnScrembledText('');
		setScrembledText('');
	}
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
		>
			<View style={[styles.spaceBetween, styles.mauveBox]}>
				<Text style={styles.textBoldMed}>UnScrembl your message</Text>
                <TouchableOpacity
                    style={styles.clearIcon}
                    onPress={() => clearText()}
                >
                    <FontAwesomeIcon  color={colours.scremblColour} size={30} icon={faTrash} />
                </TouchableOpacity>
            </View>
			<View style={styles.textInputContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => pasteFromClipboard()}
				>
					<View style={styles.spaceBetween}>
						<FontAwesomeIcon  color={colours.scremblWhite} size={30} icon={faClipboard} />
						<Text style={styles.textStyle}> Paste from Clipboard</Text>
					</View>
				</TouchableOpacity>
				<TextInput style={styles.textInput}
					multiline
					onChangeText={text => setScrembledText(text)}
					value={scrembledText}
					placeholder="Or type your Scrembled message here"
					numberOfLines={4}
				 />
			</View>
			<Text></Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onUnScrembl()}
            >
                <Text style={styles.buttonText}>UnScrembl</Text>
            </TouchableOpacity>
			<Text></Text>
			{unScrembledText !== '' &&
				<>
				<View style={styles.textInputContainer}>
					<TextInput style={styles.textInput}
						multiline
						editable={false}
						value={unScrembledText}
						placeholder="UnScrembled message here"
						numberOfLines={4}
					 />
					<TouchableOpacity
						style={styles.button}
						onPress={() => copyToClipboard()}
					>
						<View style={styles.spaceBetween}>
							<FontAwesomeIcon  color={colours.scremblWhite} size={30} icon={faClipboard} />
							<Text style={styles.textStyle}> Copy to Clipboard</Text>
						</View>
					</TouchableOpacity>
				</View>
				</>
			}
		</KeyboardAvoidingView>
	);
}
