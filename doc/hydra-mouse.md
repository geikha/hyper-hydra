# hydra-mouse

This extension replaces the default mouse object used by Hydra, adding new properties.

---

## Properties

***Note:** In the next list, `mouse x y` means `mouse.x` and `mouse.y`*

| properties         | range / unit     | relative to / absolute |
|--------------------|------------------|------------------------|
|`mouse x y`         | pixels           | browser's viewport     |
|`mouse ax ay`       | pixels           | absolute               |
|`mouse cx cy`       | pixels           | canvas (like p5)       |
|`mouse rx ry`       | [0; 1]           | browser's viewport     |
|`mouse crx cry`     | [0; 1]           | canvas                 |
|`mouse posx posy`   | [0.5; -0.5]      | browser's viewport     |
|`mouse cposx cposy` | [0.5; -0.5]      | canvas                 |

### Note

You may wonder why is the range `[0.5; -0.5]` in an inverted order. This is because inside Hydra, scrolling by a positive number scrolls to the left or up, while scrolling by a negative one scrolls to the right or down.