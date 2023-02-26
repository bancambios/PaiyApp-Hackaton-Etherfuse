
<div align="center">
<a title="Proyect Name"  target="_blank"><img src="https://github.com/bancambios/PaiyApp-Hackaton-Etherfuse/blob/main/Images/ProyectName%7D.png"  width="400" height="75"></a>
 
 
 NaltonPaiyApp - Pequenio Corredor Veloz!]
 
![image](https://user-images.githubusercontent.com/17559524/221425734-88bb83a6-0b6b-4f0a-b1e3-75da7320601c.png)






<a title="Logo pAIy" href="https://www.canva.com/design/DAFbohngzsQ/5U7AudeforlzVrcpKlU-9A/watch?utm_content=DAFbohngzsQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank"><img src="https://github.com/bancambios/PaiyApp-Hackaton-Etherfuse/blob/main/Images/Log1.png"  width="200" height="200"></a>
<li>(https://paiy.app/nalton)
</div>

<div align="justify">
<h3>UI Flow</h3>
<ul>
 	<li>Página de registro: La página de registro permitiría a los usuarios crear una cuenta en la aplicación utilizando sus cuentas de redes sociales. La página de registro podría incluir campos para la información de perfil, como nombre, dirección de correo electrónico y foto de perfil.
<ul>
 	<li>Página de inicio de sesión: La página de inicio de sesión permitiría a los usuarios iniciar sesión en la aplicación utilizando sus cuentas de redes sociales. Los usuarios podrían iniciar sesión con su información de perfil existente en Facebook, Twitter u otra red social.
<ul>
 	<li>Página de perfil: La página de perfil mostraría la información de perfil del usuario, incluyendo su foto de perfil, nombre y otra información personal que hayan proporcionado durante el registro. Desde la página de perfil, los usuarios también podrían acceder a sus carteras de USDC y realizar transacciones.
<ul>
 	<li>Página de transacciones: La página de transacciones permitiría a los usuarios enviar y recibir remesas en USDC, pagar por servicios o productos en USDC, e invertir en DeFi mediante contratos inteligentes. La página de transacciones podría incluir campos para ingresar la cantidad de USDC a enviar o recibir, el destinatario o el proveedor de servicios y una lista de transacciones recientes.
<ul>
 	<li>Menú de navegación: El menú de navegación sería un elemento fijo en la aplicación que permitiría a los usuarios navegar entre las diferentes páginas de la aplicación. El menú de navegación podría incluir enlaces a la página de registro, la página de inicio de sesión, la página de perfil y la página de transacciones.
</ul></div>



<div align="center">
<a title="GUI Mobile"  target="_blank"><img src="https://github.com/bancambios/PaiyApp-Hackaton-Etherfuse/blob/main/Images/GUI%20Mobile.png"  width="250" height="500"></a>
</div>


Arquitectura


Paso
Descripción
Capa


Onboarding


1
Página de registro: La página de registro permite a los usuarios crear una cuenta en la aplicación utilizando sus cuentas de redes sociales. La página de registro incluye campos para la información de perfil.
1 
Presentación
2
Página de inicio de sesión: La página de inicio de sesión permite a los usuarios iniciar sesión en la aplicación utilizando sus cuentas de redes sociales. Los usuarios podrían iniciar sesión con su información de perfil existente en Facebook.
1 
Presentación
3
Página de perfil: La página de perfil muestra la información de perfil del usuario, incluyendo su foto de perfil, nombre y otra información personal que hayan proporcionado durante el registro. Desde la página de perfil, los usuarios también podrían acceder a sus carteras de USDC y realizar transacciones
1 
Presentación
4
Página de transacciones: La página de transacciones permite a los usuarios enviar y recibir remesas en USDC, pagar por servicios o productos en USDC, e invertir en DeFi mediante contratos inteligentes en solana. La página de transacciones incluye campos para ingresar la cantidad de USDC a enviar o recibir, el destinatario o el proveedor de servicios y una lista de transacciones recientes.
1 
Presentación
5
Menú de navegación: El menú de navegación es un elemento fijo en la aplicación que permitiría a los usuarios navegar entre las diferentes páginas de la aplicación. El menú de navegación podría incluir enlaces a la página de registro, la página de inicio de sesión, la página de perfil y la página de transacciones
1 
Presentación
6
Autenticación y validación de identidad: En esta etapa, la aplicación validaría la identidad del usuario utilizando la información de sus cuentas de redes sociales. La aplicación podría utilizar servicios de autenticación y verificación de identidad de terceros con el uso de API Meta. 
2 
Comercio 
7
Cartera de USDC: La aplicación permite a los usuarios mantener y gestionar su saldo de USDC  mediante una conexión con APIs Wallet Decaf para garantizar la seguridad y la compatibilidad.
2 
Comercio
8
Gestión de transacciones: La aplicación permite a los usuarios enviar y recibir remesas en USDC, pagar por servicios o productos en USDC, e invertir en DeFi mediante contratos inteligentes. La aplicación utilizaría contratos inteligentes en Solana para garantizar la seguridad y la rapidez de las transacciones.
2 
Comercio
9
Integración con servicios de terceros: La aplicación tiene integraciones con servicios de terceros como Decaf Wallet, para permitir a los usuarios convertir USDC en otras criptomonedas o monedas fiduciarias, realizar pagos en establecoins, e intercambiar criptomonedas en un exchange
2 
Comercio
10
Reportes y análisis: La aplicación permite a los usuarios generar reportes y análisis de sus transacciones en USDC. La aplicación podría integrarse con herramientas de análisis como Hello Moon para proporcionar a los usuarios información detallada sobre sus transacciones.
2 
Comercio
11
Red Solana: La aplicación esta construida sobre la red Solana, que es una blockchain de alto rendimiento y bajo costo diseñada para aplicaciones de DeFi. La red Solana permitiría una alta capacidad de procesamiento y una rápida validación de las transacciones en USDC
3
Infraestructura
12
Nodos de la red Solana: La aplicación tendrá nodos de la red Solana que procesan las transacciones de USDC y validan las identidades de los usuarios. Estos nodos estarán distribuidos en todo el mundo para garantizar una alta disponibilidad y una rápida validación de las transacciones
3
Infraestructura
13
Servicio de conversión de USDC: La aplicación podrá integrarse con un servicio de conversión de USDC a otras criptomonedas, como Bitcoin o Ethereum mediante el uso de API Decaf Wallet. 
3
Infraestructura
14
Seguridad y privacidad: La aplicación está diseñada con medidas de seguridad y privacidad para garantizar que los datos de los usuarios y las transacciones en USDC estén protegidos. La aplicación utiliza técnicas de encriptación y autenticación de dos factores para proteger los datos de los usuarios.
3
Infraestructura


Arquitectura:
   
![image](https://user-images.githubusercontent.com/17559524/221425040-1ffa914c-1b66-4fc6-8b7b-f0633e28511a.png)

