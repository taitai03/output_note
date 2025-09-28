import { supabase } from "../lib/supabase"

export const diaryRepository={
  async create(content,userId){
    const {data,error}=await supabase
    .from('diaries')
    .insert([{content,user_id:userId}])
    .select()
    if (error != null)throw new Error(error.message)
    return data[0]
  }
}