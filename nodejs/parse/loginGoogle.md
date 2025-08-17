# Login con Google

## Requerimientos

- Parse server
- Google client ID

## Implementación

### React

```bash
npm i @react-oauth/google
```

```html
<script>
    const handleSuccess = (response: any) => {
        console.log('Login Success:', response);
        loginWithGoogle(response.credential)
        // Handle the response, e.g., send the ID token to your backend

    };

    const handleError = () => {
        console.log('Login Failed');
    };
    async function loginWithGoogle(idToken: string) {
        try {
        // 1. Llama a la función de Cloud Code "googleSignin" con el token de ID.
        const authData = await Parse.Cloud.run("googleSignin", {
            id_token: idToken
        });

        // 2. Después de que la función de Cloud Code se completa, usa el sessionToken
        //    para logear al usuario en el cliente.
        //    Esto crea una sesión y guarda el usuario en localStorage.
        await Parse.User.logInWith('google', { authData: authData});
        console.log("Usuario logueado exitosamente:", Parse.User.current());

        } catch (error) {
        console.error("Error al iniciar sesión con Google:", error);
        // Maneja el error, por ejemplo, mostrando un mensaje al usuario.
        alert("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
        return null;
        }
    }
</script>
<GoogleOAuthProvider clientId="googleid-googleid.apps.googleusercontent.com">
    <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
    />
</GoogleOAuthProvider>
```

```javascript
Parse.Cloud.define("googleSignin", async (request) => {
  Parse.Cloud.useMasterKey();
  const { id_token } = request.params;
  const GOOGLE_CLIENT_ID = "googleid-googleid.apps.googleusercontent.com"; // Reemplaza con tu ID de cliente

  if (!id_token) {
    throw new Parse.Error(Parse.Error.SCRIPT_FAILED, "El parámetro id_token no fue proporcionado.");
  }

  try {
    // 1. Validar el token de Google y obtener la información del usuario
    const tokenInfoUrl = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${id_token}`;
    const response = await fetch(tokenInfoUrl)
    const userData = await response.json();

    // Verificar el ID del cliente para evitar ataques de suplantación
    if (userData.aud !== GOOGLE_CLIENT_ID) {
      throw new Parse.Error(Parse.Error.SCRIPT_FAILED, "ID de cliente no válido.");
    }

    // 2. Buscar si el usuario ya existe en Parse
    const query = new Parse.Query(Parse.User);
    query.equalTo("authData.google.id", userData.sub);

    let user = await query.first();
    // 3. Si el usuario no existe, crearlo
    const authData = {
      id: userData.sub,
      id_token: id_token
    };
    if (!user) {
      user = new Parse.User();
      user.set("username", userData.email);
      user.set("email", userData.email);
      user.set("name", userData.name);
      user.set("authData", {
        google: authData,
      });
      await user.save(null);
    }

    // 4. devolver el token de sesión
    return authData
  } catch (error) {
    console.error("Error en el inicio de sesión de Google:", error);
    throw new Parse.Error(Parse.Error.SCRIPT_FAILED, "Error en el inicio de sesión. Detalles: " + error.message);
  }
});
```