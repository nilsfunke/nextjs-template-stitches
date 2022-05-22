const getPaletteColor = (base: string, lightness: number) => {
  return `var(--colors-${base}), ${lightness}%`;
};

const getColor = (paletteColor: string) => {
  return `hsla(var(--colors-palette-${paletteColor}), 100%)`;
};

const paletteColors = {
  'palette-gray-base': '0, 0%',
  'palette-gray-00': getPaletteColor('palette-gray-base', 100),
  'palette-gray-05': getPaletteColor('palette-gray-base', 95),
  'palette-gray-10': getPaletteColor('palette-gray-base', 90),
  'palette-gray-15': getPaletteColor('palette-gray-base', 85),
  'palette-gray-20': getPaletteColor('palette-gray-base', 80),
  'palette-gray-25': getPaletteColor('palette-gray-base', 75),
  'palette-gray-30': getPaletteColor('palette-gray-base', 70),
  'palette-gray-35': getPaletteColor('palette-gray-base', 65),
  'palette-gray-40': getPaletteColor('palette-gray-base', 60),
  'palette-gray-45': getPaletteColor('palette-gray-base', 55),
  'palette-gray-50': getPaletteColor('palette-gray-base', 50),
  'palette-gray-55': getPaletteColor('palette-gray-base', 45),
  'palette-gray-60': getPaletteColor('palette-gray-base', 40),
  'palette-gray-65': getPaletteColor('palette-gray-base', 35),
  'palette-gray-70': getPaletteColor('palette-gray-base', 30),
  'palette-gray-75': getPaletteColor('palette-gray-base', 25),
  'palette-gray-80': getPaletteColor('palette-gray-base', 20),
  'palette-gray-85': getPaletteColor('palette-gray-base', 15),
  'palette-gray-90': getPaletteColor('palette-gray-base', 10),
  'palette-gray-95': getPaletteColor('palette-gray-base', 5),
  'palette-gray-100': getPaletteColor('palette-gray-base', 0),
};

const typeFaceColors = {
  'typeface-primary': getColor('gray-85'),
  'typeface-secondary': getColor('gray-70'),
};

const backgroundColors = {
  'background-primary': getColor('gray-00'),
  'background-secondary': getColor('gray-05'),
};

const colors = {
  ...paletteColors,
  ...typeFaceColors,
  ...backgroundColors,
};

export { colors, typeFaceColors, backgroundColors };
