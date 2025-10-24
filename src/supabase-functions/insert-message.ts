import { supabase } from "./supabase.config";

import {
    SendMessageParams
} from "../types/supabase/sendMessage";

export async function sendMessage(params: SendMessageParams) {
  const { data, error } = await supabase.functions.invoke('insert-message', {
    body: params
  })
  
  if (error) throw error
  return data
}
