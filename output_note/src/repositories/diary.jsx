import { supabase } from "../lib/supabase"

export const diaryRepository={
  async create(content,userId,date,title){
    const {data,error}=await supabase
    .from('diaries')
    .insert([{content,user_id:userId,date,title}])
    .select()
    if (error != null)throw new Error(error.message)
    return data[0]
  },

  async find(){
    const {data,error}=await supabase
    .from('diaries_view')
    .select("*")
    .order('created_at',{asceinding:false})
    if (error != null)throw new Error(error.message)
      return data.map((diary)=>{
    return{
      ...diary,
      userId:diary.user_id,
      userName:diary.user_metadata.name,

    }
    })
  },

  async delete(id){
    const {error} = await supabase.from('diaries').delete().eq('id',id) 
    if (error != null)throw new Error(error.message)
      return true
  }
}