import React from 'react';
import {
    StyleSheet,
} from 'react-native';

export default styles = StyleSheet.create({
   container            : {
      padding           : 10,
      fontFamily        : 'CourierPrime-Regular',
   },
   title                : {
      fontFamily        : 'CourierPrime-Bold',
      fontSize          : 30,
   },
   titleMed             : {
      fontFamily        : 'CourierPrime-Bold',
      fontSize          : 24,
   },
   textSmall            : {
      fontFamily        : 'CourierPrime-Regular',
      fontSize          : 12,
   },
   textSmallItalic      : {
      fontFamily        : 'CourierPrime-BoldItalic',
      fontSize          : 10,
   },
   textBoldSmall        : {
      fontFamily        : 'CourierPrime-Bold',
      fontSize          : 10,
   },
   textBoldMed          : {
      fontFamily        : 'CourierPrime-Bold',
      fontSize          : 14,
   },
   marginVert           : {
      marginVertical    : 10,
   },
   subTitle             : {
      paddingVertical   : 13,
      paddingHorizontal : 10,
   },
   width100             : {
      width             : "100%",
   },
   bigMarginTop         : {
      marginTop         : 100,
   },
   settingsContainer    : {
      marginTop         : '33%',
      flex              : 1,
      justifyContent    : 'space-around',
      alignItems        : 'center',
      flexDirection     : 'row',
   },
   settingsSave         : {
      marginTop         : '33%',
   },
   mainPageContainer    : {
      borderWidth       : 1,
      borderRadius      : 5,
      borderColor       : "#7b8dac",
      marginTop         : 10,
      marginBottom      : 10,
      paddingTop        : 10,
      paddingBottom     : 10,
      paddingLeft       : 10,
      paddingRight      : 10,
   },
   mainButtonContainer  : {
      marginTop         : 20,
      marginBottom      : 20,
   },
   fontAwesomeIcon      : {
      alignSelf         : 'center',
   },
   spaceEvenly          : {
      flexDirection     : "row",
      justifyContent    : "space-evenly",
      alignItems        : 'center',
   },
   spaceBetween         : {
      flexDirection     : "row",
      justifyContent    : "space-between",
      alignItems        : 'center',
   },
   spaceAround          : {
      flexDirection     : "row",
      justifyContent    : "space-around",
      alignItems        : 'center',
   },
   mauveBox             : {
      marginTop         : 7,
      marginBottom      : 7,
      padding           : 5,
      borderWidth       : 1,
      borderRadius      : 4,
      borderColor       : '#7b8dac',
   },
   button               : {
      alignItems        : 'center',
      justifyContent    : 'center',
      paddingVertical   : 12,
      paddingHorizontal : 32,
      borderRadius      : 7,
      elevation         : 3,
      backgroundColor   : '#7b8dac',
   },
   buttonSmall          : {
      alignItems        : 'center',
      justifyContent    : 'center',
      paddingVertical   : 6,
      paddingHorizontal : 15,
      borderRadius      : 7,
      elevation         : 3,
      backgroundColor   : '#7b8dac',
   },
   buttonInactive       : {
      alignItems        : 'center',
      justifyContent    : 'center',
      paddingVertical   : 12,
      paddingHorizontal : 32,
      borderRadius      : 7,
      elevation         : 3,
      backgroundColor   : '#7b8dac',
      opacity           : 0.5,
   },
   buttonText           : {
      fontSize          : 16,
      lineHeight        : 21,
      letterSpacing     : 0.25,
      color             : 'white',
      fontFamily        : 'CourierPrime-Regular',
   },
   centeredView         : {
      flex              : 1,
      justifyContent    : 'center',
      alignItems        : 'center',
      marginTop         : 22,
      marginBottom      : 22,
   },
   modalView            : {
      margin            : 10,
      backgroundColor   : 'white',
      borderRadius      : 20,
      padding           : 35,
      alignItems        : 'center',
      shadowColor       : '#000',
      shadowOffset      : {
         width          : 0,
         height         : 2,
      },
      shadowOpacity     : 0.25,
      shadowRadius      : 4,
      elevation         : 5,
      fontFamily        : 'CourierPrime-Regular',
   },
   buttonClose          : {
      backgroundColor   : '#7b8dac',
      fontFamily        : 'CourierPrime-Regular',
   },
   textStyle            : {
      fontSize          : 12,
      color             : 'white',
      textAlign         : 'center',
      fontFamily        : 'CourierPrime-Bold',
   },
   modalText            : {
      marginBottom      : 15,
      textAlign         : 'center',
      fontFamily        : 'CourierPrime-Regular',
   },
   modalHeader          : {
      marginBottom      : 15,
      textAlign         : 'center',
      fontFamily        : 'CourierPrime-Regular',
   },
   centre               : {
      alignItems        : 'center',
   },
   medText              : {
      fontSize          : 16,
      fontFamily        : 'CourierPrime-Regular',
   },
   bigText              : {
      fontSize          : 24,
      fontFamily        : 'CourierPrime-Regular',
   },
   permsText            : {
      fontSize          : 12,
      fontFamily        : 'CourierPrime-Regular',
      marginTop         : 5,
      marginBottom      : 5,
   },
   logoImage            : {
      width             : 35,
      height            : 35,
   },
   textInput            : {
      textAlignVertical : 'top',
      fontFamily        : 'CourierPrime-Regular',
      color             : 'black',
   },
   textInputContainer   : {
      width             : "100%",
      borderWidth       : 1,
      borderColor       : '#7b8dac',
      padding           : 10,
      borderRadius      : 5,
   },
   clearIcon            : {
      padding           : 4,
      alignSelf         : 'flex-end',
   },
   backToTop            : {
      flexDirection     : 'row',
      alignItems        : 'center',
   },
   hideBTT              : {
      flexDirection     : 'row',
      alignItems        : 'center',
      opacity           : 0,
   },
});
