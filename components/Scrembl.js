/**
 * UnScrembl : Obfusticate message page.
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
import { scrembl }         from '../functions/gubbins';

export default function ({scrollRef}) {
   const [unScrembledText, setUnScrembledText] = useState('');
   const [scrembledText,   setScrembledText  ] = useState('');
   function copyToClipboard() {
      Clipboard.setString(scrembledText);
      ToastAndroid.showWithGravity("Copied to Clipboard!", ToastAndroid.LONG, ToastAndroid.CENTER);
   }
   async function pasteFromClipboard() {
      Keyboard.dismiss();
      const clipboardText = await Clipboard.getString();
      setUnScrembledText(clipboardText);
      setTimeout(() => scrollRef.current.scrollToEnd(), 100);
   }
   function onScrembl() {
      Keyboard.dismiss();
      if (unScrembledText) {
         let obfusticated = scrembl(unScrembledText);
         setScrembledText(obfusticated);
         setTimeout(() => scrollRef.current.scrollToEnd(), 100);
      }
   }
   function clearText() {
      setUnScrembledText('');
      setScrembledText('');
   }
   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      >
         <View style={styles.spaceBetween}>
            <View style={[styles.mauveBox, styles.subTitle, unScrembledText ? '' : styles.width100 ]}>
               <Text style={styles.textBoldMed}>Scrembl your message  </Text>
            </View>
            {unScrembledText &&
               <View style={[styles.mauveBox]}>
                  <TouchableOpacity
                     style={styles.clearIcon}
                     onPress={() => clearText()}
                  >
                     <FontAwesomeIcon  color={colours.scremblColour} size={30} icon={faTrash} />
                  </TouchableOpacity>
               </View>
            }
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
               onChangeText={text => setUnScrembledText(text)}
               value={unScrembledText}
               placeholder="Or type your message here"
               numberOfLines={4}
             />
         </View>
         <Text></Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onScrembl()}
            >
                <Text style={styles.buttonText}>Scrembl</Text>
            </TouchableOpacity>
         <Text></Text>
         {scrembledText !== '' &&
            <>
            <View style={styles.textInputContainer}>
               <TextInput style={styles.textInput}
                  multiline
                  editable={false}
                  value={scrembledText}
                  placeholder="Scrembled message here"
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
