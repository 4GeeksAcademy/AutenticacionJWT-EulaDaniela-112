export async function login(email, password) {
  console.log("vengo del UserServices.js");
  try {
    const response = await fetch(
      "https://fantastic-space-train-4j6wrvprjpq7f7956-3001.app.github.dev/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      console.log(data);
      sessionStorage.setItem("token", data.access_token);
      return data;
    } else {
      return {error: "Usuario p contraseña incorrecta" };
    }
  } catch (error) {
      return {error: "Error al conectar con el servidor"};
  }
}

export async function signup(email, password) {
  try {
    const response = await fetch(
      "https://fantastic-space-train-4j6wrvprjpq7f7956-3001.app.github.dev/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();
    console.log(data);

    if (response.status === 201) {
      // creado con éxito
      if (data.access_token) {
        sessionStorage.setItem("token", data.access_token);
      }
      return true;
    }

    if (response.status === 400 || response.status === 409) {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function Private() {
  try {
    const token = sessionStorage.getItem("token"); // buscamos el token guardado

    const response = await fetch(
      "https://fantastic-space-train-4j6wrvprjpq7f7956-3001.app.github.dev/private",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    if (!response.ok) {
      console.error("error en la solicitud:", response.status);
      return null; // token inválido o no autorizado
    }

    const data = await response.json();
    console.log("respuesta del servidor:", data)
    return data; // retornamos la respuesta del backend
  } catch (error) {
    console.error("Error en Private:", error);
    return null;
  }
}
