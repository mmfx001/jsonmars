import { createClient } from '@supabase/supabase-js';

// Supabase konfiguratsiyasi
const supabaseUrl = 'https://ztmmpxctjejkdlwszunj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0bW1weGN0amVqa2Rsd3N6dW5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0NjE3NjQsImV4cCI6MjA0MjAzNzc2NH0.Pv67rlYHWGR9azk8VOMrcGfm0VEJllzd0EFqZtjjsEI';
const supabase = createClient(supabaseUrl, supabaseKey);
async function getUsers() {
  let { data, error } = await supabase
    .from('users')
    .select('*');
  
  if (error) console.error(error);
  else console.log(data);
}

getUsers();
