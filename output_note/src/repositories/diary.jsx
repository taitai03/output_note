import { supabase } from "../lib/supabase"

export const diaryRepository={
  async create(content,date){
    const {date,error}=await supabase
    .from('diaries')
    .insert([{content,date}])
    .select()
    if (error != null)throw new Error(error.message)
    return data[0]
  }
}