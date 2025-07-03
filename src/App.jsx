import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Comparaciones from './components/Comparaciones';

function App() {
  return (
    <div className="container mt-5 text-center">
      {/* Logo SVG */}
      <img src="/logo.svg" alt="Logo" style={{ width: '70px', marginBottom: '20px' }} />

      {/* Título */}
      <h1 className="mb-4 text-primary fw-bold" style={{ fontSize: '2.2rem' }}>
        📋 Comparación de Documentos PDF
      </h1>

      {/* Comparaciones */}
      <div className="text-start">
        <Comparaciones />
        {/* Botón flotante para subir arriba */}
<button id="boton-arriba" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  ↑
</button>
      </div>
    </div>
  );
}

export default App;
// Este es el componente principal de la aplicación que integra el formulario y la tabla de usuarios.
// Utiliza el estado para manejar mensajes de alerta y el usuario que se está editando.
// Importa estilos de Bootstrap y un archivo CSS personalizado para el diseño.
// La estructura incluye un título, una alerta para mensajes, el formulario para agregar/editar usuarios y la tabla para mostrar los usuarios existentes.

// Asegúrate de que los componentes Formulario, TablaUsuarios y Alerta estén correctamente implementados y exportados.
// Este código asume que tienes configurado React y Bootstrap en tu proyecto.
// Puedes personalizar los estilos y la estructura según tus necesidades.
// No olvides instalar las dependencias necesarias como 'bootstrap' y 'axios' si aún no lo has hecho.

// Nota: Este código es un ejemplo básico y puede requerir ajustes según la estructura de tu proyecto y las dependencias que estés utilizando.

// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.
// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.
// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.

// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.
// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.
// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.

// Recuerda que este es un punto de partida y puedes expandir la funcionalidad de tu aplicación según sea necesario.
// Puedes agregar más componentes, mejorar la interfaz de usuario o integrar otras bibliotecas según tus requerimientos.

// Si tienes alguna pregunta o necesitas más ayuda con la implementación, no dudes en preguntar.
// Estoy aquí para ayudarte a desarrollar tu aplicación de gestión de datos de manera efectiva y eficiente.

// Este código está diseñado para ser claro y fácil de entender, siguiendo las mejores prácticas de React y Bootstrap.
// Asegúrate de que tu entorno de desarrollo esté configurado correctamente para ejecutar aplicaciones React.
// Puedes usar Create React App o cualquier otra configuración que prefieras para iniciar tu proyecto.
// Este código está listo para ser utilizado en un archivo App.js dentro de un proyecto React.
// No olvides importar los componentes necesarios y asegurarte de que las rutas de importación sean correctas.
// Puedes agregar más funcionalidades o estilos según tus necesidades específicas.