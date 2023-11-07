# smallbang

Website generator for Astro projects with React.
Includes Font Awesome for icons.

Thought "big bang" was a bit too much for a simple Astro website generator, so I went with small bang instead.

## Usage

```npx smallbang@latest```

## Setup options

### Screen: Full or Compact

Full means the website will take up the full screen, while Compact means it will be centered and have a max width.

### Theme: Light or Dark

Light means the website will have a light background, while Dark means it will have a dark background.

### Theme: Color 

Choose between a few different color schemes. Here are the currently available options:

- Black and white
- Red
- Green
- Blue
- Orange
- Purple
- Turquoise

### Borders: Rounded or Squared

Rounded means components such as buttons or images will have rounded borders (border-radius: 8px), while Squared means they will have squared borders (border-radius: 2px).

### Font: Family

The font family to use for the website. You can choose from some of the fonts available on Google Fonts. Here are the currently available options:

- Montserrat
- Open Sans
- Roboto
- Ubuntu
- Inter
- Lato
- Jost

### Font: Weight

Choose between Confident, Standard or Elegant. This will affect the font weight of the headings and body text. Here are the actual font weights used for each option:

- Confident: 700 (bold) for headings, 500 (medium) for body text
- Standard: 500 (medium) for headings, 400 (normal) for body text
- Elegant: 400 (normal) for headings, 300 (light) for body text

### Scroll Animations: On or Off

If you choose to turn scroll animations on, the website will use the [AOS](https://michalsnik.github.io/aos/) library to animate elements as they enter the viewport.
