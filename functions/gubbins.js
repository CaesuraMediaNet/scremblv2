/**
* The thing that does the thing. Essentially Base64 plus an offset
*
* @format
* @flow strict-local
*/

import { Base64 } from 'js-base64';

// Valid for 24hrs only.
//
function getDateOffset () {
   var now         = new Date();
   var epochOffset = Math.floor(now/8.64e7) - 19000;
   var hex         = epochOffset.toString(16)
   var base64      = Base64.encode(hex);
   return {base64, epochOffset};
}

export function scrembl(message) {
   let {base64, epochOffset} = getDateOffset();
   var chars       = message.split('');
   var output_text = "^";
   for (var i=0; i < chars.length; i++) {

      // Add a date offset to each char.
      //
      var asci = (parseInt (message.charCodeAt(i)) + parseInt (epochOffset)).toString(16);
      output_text += asci + "%";
   }
   output_text = output_text.replace (/%$/, '$') + base64;
   return output_text;
}

export function unScrembl(message) {
   let {base64, epochOffset} = getDateOffset();
   var enc_base64  = message.replace(/^.*\$/, '');
   var output_text = "";
   if (enc_base64 !== base64) {
      output_text = "Out of date Scrembl, sorry!";
   } else {
      var asciis      = message.replace(/^\^/, '').replace(/\$.+$/, '').split('%');
      for (var i=0; i < asciis.length; i++) {
         var ch = String.fromCharCode((parseInt (asciis[i], 16) - parseInt (epochOffset)));

         // Printable characters only.
         //
         if (!ch.match(/^[\P{Cc}\P{Cn}\P{Cs}]+$/gu)) {
            output_text = "Out of date Scrembl, sorry!";
            break;
         }
         output_text += ch;
      }
   }
   return output_text;
}
