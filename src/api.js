import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://ytfrjbsqrspqbtthhzgn.supabase.co';
const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTM3ODg5MywiZXhwIjoxOTU0OTU0ODkzfQ.YyLxtBW6VeCMqtREU9FZyuhMo6VrKkTgpwvKspdvfaw';

export const supabase = createClient(API_URL, API_KEY, {
  localStorage: AsyncStorage,
});
