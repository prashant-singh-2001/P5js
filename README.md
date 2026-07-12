# Prashant's Voyage in p5.js

A gallery of ~20 standalone [p5.js](https://p5js.org/) sketches — creative-coding exercises, games, and generative art, browsable from a single page.

**Live site:** https://prashant-singh-2001.github.io/P5js/

## What's inside

Every sketch is a self-contained folder (own `index.html` + `sketch.js`), listed and launched from the root [index.html](index.html) gallery — a dark, filterable card grid with a live mini-preview per project and a fullscreen modal viewer.

### Games & Interactive
| Project | Folder |
|---|---|
| Fractal Tree (OOP) | [`OOPFT/`](OOPFT) |
| Snake Game | [`SnakeGame/`](SnakeGame) |
| Star Invaders | [`StarInvaders/`](StarInvaders) |
| A* Pathfinding | [`ASTART/`](ASTART) |
| 2D Auto Supershape | [`2DSupershape/`](2DSupershape) |
| Multiple Sorts (visualized) | [`SorTME/`](SorTME) |
| The Diastic Machine | [`DiasticMachine/`](DiasticMachine) |

### Generative Art
| Project | Folder |
|---|---|
| Angle-Select Fractal Tree | [`FractalTrees/`](FractalTrees) |
| L-System Fractal Tree | [`LSystemFractalTree/`](LSystemFractalTree) |
| Space Colonization Tree | [`SpaceColonizationTree/`](SpaceColonizationTree) |
| Phyllotaxis | [`Phyllotaxis/`](Phyllotaxis) |
| Reaction-Diffusion Model | [`RactionDefusionModel/`](RactionDefusionModel) |
| Mandelbrot Set | [`MandelbrotSet/`](MandelbrotSet) |
| Wandering Rocket (Smart Rockets) | [`SmartRockets/`](SmartRockets) |
| Blobby | [`Blobby/`](Blobby) |
| Lexical | [`Lexical/`](Lexical) |

### Algorithms — Traveling Salesman Problem
| Project | Folder |
|---|---|
| TSP — Brute Force | [`TSP/`](TSP) |
| TSP Evolved — Lexical | [`TSPLexical/`](TSPLexical) |
| Genetic TSP | [`TSP-Genetic Alogrithm/`](<TSP-Genetic Alogrithm>) |
| Genetic TSP + Crossover | [`TSP-Genetic Alogrithm & Crossover/`](<TSP-Genetic Alogrithm & Crossover>) |

## Tech

- **[p5.js](https://p5js.org/) v0.5.6**, loaded from [jsDelivr](https://www.jsdelivr.com/) — no local install, no build step.
- Plain HTML/CSS/JS throughout; the gallery itself has no dependencies (no framework, no bundler).
- Deployed via **GitHub Pages** (legacy branch deployment from `main` root).

## Running locally

No build step — just serve the repo root and open it in a browser:

```bash
npx serve .
# or
python -m http.server 8080
```

Then visit `http://localhost:<port>/`.

Each project also works standalone by opening its own `index.html` directly, e.g. `MandelbrotSet/index.html`.
