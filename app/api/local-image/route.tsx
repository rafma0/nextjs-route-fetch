export async function POST (request: Request) {
  const body = await request.formData()

  const res = await fetch('http:/localhost:3000/api/external-image', {
    method: 'POST',
    body
  })

  return new Response(res.body, { status: res.status })
}