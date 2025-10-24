import { createClient } from 'npm:@supabase/supabase-js@2'
import { validateFields } from '../helpers/validate.ts'

Deno.serve(async (req: Request) => {

  const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://andart-coral.vercel.app',
  ]

  const reqOrigin = req.headers.get('Origin') || ''
  const DEFAULT_CORS_ORIGIN = Deno.env.get('SUPABASE_FUNCTIONS_ALLOW_ORIGIN') ?? '*'
  const corsOrigin = allowedOrigins.includes(reqOrigin) ? reqOrigin : DEFAULT_CORS_ORIGIN

  const corsHeaders = {
    'Access-Control-Allow-Origin': corsOrigin,
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, apikey, x-client-info',
  }

  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    })
  }


  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

  try {
    const {name, email, message} = await req.json()
    
    const isValid = validateFields(name, email, message)
    if (!isValid) {
      return new Response(
        JSON.stringify({error: 'Invalid request payload'}),
        {status: 400, headers: {'Content-Type': 'application/json', ...corsHeaders}},
      )
    }

    const {data, error} = await supabase
      .from('messages')
      .insert([{
        name: name.trim(),
        mail: email.trim(),
        content: message.trim(),
      }])
      .select()

    if (error) {
      console.error('Error inserting message:', error)
      return new Response(
        JSON.stringify({error: 'Failed to insert message'}),
        {status: 500, headers: {'Content-Type': 'application/json', ...corsHeaders}},
      )
    }

    return new Response(
      JSON.stringify({success: true, data}),
      {status: 200, headers: {'Content-Type': 'application/json', ...corsHeaders}},
    )

  } catch (error) {
    console.error('Error processing request:', error)
    return new Response(
      JSON.stringify({error: error instanceof SyntaxError ? 'Invalid JSON' : 'Server error'}),
      {status: error instanceof SyntaxError ? 400 : 500, headers: {'Content-Type': 'application/json', ...corsHeaders}},
    )
  }
})