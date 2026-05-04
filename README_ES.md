<div align="center">
  <img src="https://img.shields.io/badge/ScoreGrid-v1.0-FFB800?style=for-the-badge&logo=obs-studio&logoColor=white" alt="ScoreGrid">
  <p><em>Overlay para torneos en OBS Studio. Elegante. Instantáneo. Sin distracciones.</em></p>
</div>

<br>

<p align="center">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS">
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io">
  <img src="https://img.shields.io/badge/OBS-302E31?style=for-the-badge&logo=obs-studio&logoColor=white" alt="OBS">
  <img src="https://img.shields.io/github/license/Jorge-Canales/ScoreGrid?style=for-the-badge&color=blue" alt="License">
</p>

---

## ¿Qué es ScoreGrid?

**ScoreGrid** es un sistema de marcador en tiempo real diseñado para streamers y organizadores de torneos que usan OBS Studio. Consta de dos partes:

- **Overlay** — se integra en OBS como fuente de navegador. Fondo completamente degradado a transparente para fundirse con tu escena sin bordes agresivos.
- **Panel de Control** — interfaz web limpia desde la que modificas al instante nombres, puntuaciones, fase del torneo y el título del evento.

Todo se comunica en tiempo real vía WebSockets. Sin plugins ni cuentas. 

---

## Características

| **Funcionalidad** |  **Detalle** |
|:---|:---|
| **Nombre del torneo** | Campo personalizable que encabeza el overlay |
| **Jugadores** | Nombres editables al vuelo desde el panel |
| **Puntuaciones** | Contador numérico con soporte de 0 a 99 |
| **Fase del torneo** | Selector con fases predefinidas (grupos, octavos, cuartos, etc.) |
| **Tiempo real** | WebSockets. Sin refrescar OBS ni el panel |
| **Ligero** | Cero dependencias pesadas. Solo Express + Socket.io |

---

## Instalación en 3 pasos

### Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/ScoreGrid.git
cd ScoreGrid
```
### Instalar dependencias e iniciar el servidor
```bash
npm install
node server.js
```
Verás algo como:
```text
ScoreGrid corriendo en http://localhost:3000
Overlay: http://localhost:3000/overlay.html
Panel de control: http://localhost:3000/controller.html
```
## Configuración en OBS Studio
1. Abre OBS Studio
2. En tu escena, añade una nueva fuente: + → Navegador
3. Asígnale un nombre (ej: ScoreGrid)
4. Configúralo con estos valores:

| Parámetro  |  Valor  |
|:---|:---|
|URL	| http://localhost:3000/overlay.html|
|Ancho	| 800 |
|Alto	| 250 |
|Actualizar navegador cuando la escena se active |	✅ Marcado |
| Personalizar CSS	| Vacío |

5. Acepta y coloca el overlay donde prefieras

## Tecnologías
- Node.js — Entorno de ejecución
- Express — Servidor web
- Socket.io — Comunicación bidireccional en tiempo real
- HTML5 / CSS3 / JavaScript vanilla — Sin frameworks ni dependencias en el frontend

## FAQ
<details> <summary><strong>¿Necesito conexión a internet?</strong></summary> No. Todo corre en localhost. Solo necesitas tener el servidor Node.js corriendo en tu PC. </details><details> <summary><strong>¿Puedo cambiar los colores o fuentes?</strong></summary> Sí. Edita el CSS dentro de <code>overlay.html</code> y <code>controller.html</code>. Está todo comentado y organizado. </details><details> <summary><strong>¿Funciona en OBS Portable o Streamlabs?</strong></summary> Sí. Cualquier software que soporte fuentes de navegador con URL local funcionará. </details><details> <summary><strong>¿Puedo usar esto en torneos online con otro organizador?</strong></summary> Por ahora está diseñado para uso local. En futuras versiones se podrá exponer el panel de control de forma segura para acceso remoto. </details>

## Roadmap
- Temporizador / countdown integrado
- Animaciones CSS al actualizar puntuaciones
- Modo "Mejor de X" (Bo3, Bo5)
- Exportar / importar configuración de torneo
- Acceso remoto seguro al panel de control
- Temas de color personalizables

## Contribuciones
¿Ideas, bugs, mejoras? Abre un [issue](https://github.com/Jorge-Canales/ScoreGrid/issues) o envía un pull request. Todo feedback es bienvenido.

## Licencia
MIT © [Jorge Canales]

<div align="center"> <sub>Hecho con amor para la comunidad de streamers y TOs</sub> </div>