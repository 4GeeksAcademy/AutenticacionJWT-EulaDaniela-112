export async function login(email, password) {
  console.log("vengo del UserServices.js");
  console.log(email, password);

  try {
    const response = await fetch(
      "https://fantastic-space-train-4j6wrvprjpq7f7956-3001.app.github.dev/login",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      console.log(data);
      sessionStorage.setItem("token", data.access_token);
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}
