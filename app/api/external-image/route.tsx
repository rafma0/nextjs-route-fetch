export async function POST (request: Request) {
  const body = await request.formData()

  console.log(body.get('image'))

  return new Response()
}