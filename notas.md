# Paquetes instalados
- npm i color inquirer

# Borrar paquete
- npm uninstall '<nombre del paquete>'

# Acces token 
Token de acceso que se necesita para realizar peticiones a una api 

# Endpoint
URL que funciona como punto para realizar peticiones http a una api

# Crear instacia de axios

    const instance = axios.create ({
                    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                    params:{
                        'acces_token': 'pk.eyJ1IjoiY2FmZXNpdDAiLCJhIjoiY2w5YnQ3YmZkMDk2YjN2cWU0YjN1bmdwMyJ9.6nSKJxdAjqR_WAxP_iCo3A',
                        'limit' :5,
                        'language': 'es'
                    }
    })

# Variables de entorno
Con el comando
    process.env
se puede ver las variables de entorno en nuestro proyecto de node

Para trabajar de formas mas comoda y no tener que copiar y pegar la API Key de mapbox podemos
utilizar una variable de entorno para guardarla. Y para facilitar aun mas este trabajo, se utiliza
el paquete **dotenv** para crear nuestras variables de entorno de forma sencilla.

    npm i dovenv

Creamos un archivo *.env* en nuestra ruta Root y agregamos la variable de la siguiente forma

    MAPBOX_KEY=pk.eyJ1IjoiY2FmZXNpdDAiLCJhIjoiY2w5YnQ3YmZkMDk2YjN2cWU0YjN1bmdwMyJ9.6nSKJxdAjqR_WAxP_iCo3A

El archivo **.env** no se sube a git porque contiene accesos nuestros a apis, bases de datos etc.
En su lugar se crea un archivo **example.env** con las keys vacias.