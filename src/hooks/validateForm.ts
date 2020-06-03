
export function checkStrLength(str: string) {
   if (str.length < 6) {
      return 'Username should at least be 6 characters.';
   }
   return '';
}

