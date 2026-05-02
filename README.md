<div align="center">
  <img src="https://img.shields.io/badge/ScoreGrid-v1.0-FFB800?style=for-the-badge&logo=obs-studio&logoColor=white" alt="ScoreGrid">
  <p><em>Tournament overlay for OBS Studio. Elegant. Instant. Distraction-free.</em></p>
</div>

<br>

<p align="center">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS">
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io">
  <img src="https://img.shields.io/badge/OBS-302E31?style=for-the-badge&logo=obs-studio&logoColor=white" alt="OBS">
  <img src="https://img.shields.io/github/license/Jorge-Canales/ScoreGrid?style=for-the-badge&color=blue" alt="License">
</p>

---

## What is ScoreGrid?

**ScoreGrid** is a real-time scoreboard system designed for streamers and tournament organizers using OBS Studio. It consists of two parts:

- **Overlay** — integrates into OBS as a browser source. Background fully faded to transparent to blend into your scene without harsh borders.
- **Control Panel** — a clean web interface from which you can instantly modify player names, scores, tournament phase, and event title.

Everything communicates in real time via WebSockets. No plugins. No accounts.

---

## Features

| **Functionality** | **Detail** |
|:---|:---|
| **Tournament name** | Customizable field displayed at the top of the overlay |
| **Players** | Names editable on the fly from the panel |
| **Scores** | Numeric counter supporting 0 to 99 |
| **Tournament phase** | Dropdown with predefined phases (groups, ro16, quarters, etc.) |
| **Real-time** | WebSockets. No need to refresh OBS or the panel |
| **Lightweight** | Zero heavy dependencies. Just Express + Socket.io |

---

## Installation in 3 steps

### Clone the repository
```bash
git clone https://github.com/Jorge-Canales/ScoreGrid.git
cd ScoreGrid
```
### Install dependencies and start the server
```bash
npm install
node server.js
```
You should see something like:
```text
ScoreGrid running at http://localhost:3000
Overlay: http://localhost:3000/overlay.html
Control panel: http://localhost:3000/controller.html
```
---
## OBS Studio Setup
1. Open OBS Studio
2. In your scene, add a new source: + → Browser
3. Name it (e.g.: ScoreGrid)
4. Configure it with these values:

| Parameter  |  Value  |
|:---|:---|
| URL	| http://localhost:3000/overlay.html|
| Width	| 800 |
| Height	| 250 |
| Refresh browser when scene becomes active | Checked |
| Custom CSS	| Empty |

5. Click OK and place the overlay wherever you want
---
## Tech Stack
- Node.js — Runtime environment
- Express — Web server
- Socket.io — Real-time bidirectional communication
- HTML5 / CSS3 / Vanilla JavaScript — No frontend frameworks or dependencies
---
## FAQ
<details>
  <summary><strong>
    Do I need an internet connection?</strong> </summary>
  No. Everything runs on localhost. You only need the Node.js server running on your PC. </details>
<details>
  <summary><strong>
    Can I change colors or fonts?</strong></summary>
  Yes. Edit the CSS inside <code>overlay.html</code> and <code>controller.html</code>. Everything is commented and organized. </details>
<details>
  <summary><strong>
    Does it work with OBS Portable or Streamlabs?</strong></summary>
  Yes. Any streaming software that supports browser sources with local URLs will work. </details>
<details>
  <summary><strong>
    Can I use this for online tournaments with another organizer?</strong></summary>
  Currently designed for local use. Future versions will support secure remote access to the control panel. </details>

---
## Roadmap
- Integrated timer / countdown
- CSS animations on score updates
- "Best of X" mode (Bo3, Bo5)
- Export / import tournament configuration
- Secure remote access to the control panel
- Customizable color themes
---
## Contributing
Ideas, bugs, improvements? Open an [issue](https://github.com/Jorge-Canales/ScoreGrid/issues) or send a pull request. All feedback is welcome.

## License
MIT © Jorge Canales

<div align="center"> <sub>Made with love for the streaming & TO community</sub> </div>



