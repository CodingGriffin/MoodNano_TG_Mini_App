const themes = {
  light: {

    background: 'bg-black',
    containerBg:  'bg-app-background bg-cover bg-center', //'bg-gradient-to-b from-[#0D4976] to-[#7dd3fc]', // Light blue gradient
    gradientBg: 'bg-gradient-to-b from-[#e0f2fe] to-[#7dd3fc]', // Light blue gradient
    glassEffect: 'bg-white/30 backdrop-blur-md',
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      accent: 'text-blue-600',
    },
    button: {
      active: 'bg-blue-500 text-white hover:bg-blue-600',
      inactive: 'bg-gray-300 text-gray-500',
    },
    actionButtons: {
      default: 'bg-gray-100 border border-gray-300 text-gray-700 shadow-sm',
      active: 'bg-blue-500 text-white',
    },
    progressBar: {
      happy: 'text-green-500',
      neutral: 'text-yellow-500',
      sad: 'text-red-500',
      background: 'bg-blue-300',
    },
    energyJar: {
      fill: 'bg-blue-500',
      background: 'bg-gray-200',
    },
    character: {
      background: 'bg-gray-400',
    },
    header: {
      background: 'bg-white',
      border: 'border-b border-gray-200',
    },
    footer: {
      background: 'bg-gray-100/70 backdrop-blur-md',
    
      text: 'text-gray-600',
    },
    accentBackground: 'bg-blue-100',
    border: 'border-gray-200',
  },
  dark: {
    background: 'bg-black',
    gradientBg: 'bg-gradient-to-b from-[#0c4976] to-[#1e3a8a]', // Dark blue gradient
    containerBg:  'bg-app-background bg-cover bg-center',//'bg-gradient-to-b from-[#0c4976] to-[#1e3a8a]',
    glassEffect: 'bg-black/30 backdrop-blur-md',
    text: {
      primary: 'text-gray-100',
      secondary: 'text-gray-300',
      accent: 'text-blue-400',
    },
    button: {
      active: 'bg-blue-600 text-white hover:bg-blue-700',
      inactive: 'bg-gray-700 text-gray-400',
    },
    actionButtons: {
      default: 'bg-gray-800/70 backdrop-blur-md border border-gray-700 text-gray-300',
      active: 'bg-blue-500 text-white',
    },
    progressBar: {
      happy: 'text-green-400',
      neutral: 'text-yellow-400',
      sad: 'text-red-400',
      background: 'bg-gray-700',
    },
    energyJar: {
      fill: 'bg-blue-500',
      background: 'bg-gray-700',
    },
    character: {
      background: 'bg-gray-800',
    },
    header: {
      background: 'bg-gray-800',
      border: 'border-b border-gray-700',
    },
    footer: {
      background: 'bg-gray-800/70 backdrop-blur-md',
     
      text: 'text-gray-300',
    },
    accentBackground: 'bg-blue-900',
    border: 'border-gray-700',
  },
};

export default themes;