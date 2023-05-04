document.getElementById('button').addEventListener('click', tangent)

async function tangent() {
    const x = document.getElementById('inputX').value
    const func = document.getElementById('inputFunc').value
    const respons = await fetch(`https://newton.vercel.app/api/v2/tangent/${x}|${func}`).then(data => data.json())
    document.getElementById("demo").innerHTML = respons.result;
  }
  
