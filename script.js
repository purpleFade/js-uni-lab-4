document.getElementById('button').addEventListener('click', tangent)

async function tangent() {
  try {
    const x = document.getElementById('inputX').value
    const func = document.getElementById('inputFunc').value
    const response = await fetch(`https://newton.vercel.app/api/v2/tangent/${x}|${func}`)
    if (response.ok) {
      const data = await response.json()
      document.getElementById("demo").innerHTML = data.result
    } else {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
  } catch (error) {
    console.error(`Error: ${error.message}`)
    tangent()
  }
}
