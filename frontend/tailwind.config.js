module.exports = {
  theme: {
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem',
      },
      borderWidth: {
        '14': '14px',
      }
    },
    container: {
      padding: '1rem'
    },
    colors: {
      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        tertiary: 'var(--bg-background-tertiary)',

        form: 'var(--bg-background-form)',
      },

      copy: {
        primary: 'var(--text-copy-primary)',
        secondary: 'var(--text-copy-hover)',
      },

      'border-color': {
        primary: 'var(--border-border-color-primary)',
      },

      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      orange: {
        100: '#FF6F66',
        200: '#F25244',
        300: '#E32A20',
        400: '#D7271F',
        500: '#BD231A',
        600: '#961C15',
      },

      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
      },

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },

      purple: {
        100: '#F1C3FF',
        200: '#E8B0FF',
        300: '#DF99FF',
        400: '#D68AFF',
        500: '#BE51FC',
        600: '#B44DF0',
        700: '#A145D6',
        800: '#8438B0',
        900: '#542470'
      },

      yellow: {
        100: '#FFEFA8',
        200: '#F5E297',
        300: '#FFF952',
        400: '#EDE84C',
        500: '#F0DF5E',
        600: '#FFE83B',
        700: '#E0C75A',
        800: '#C2BB1B',
      },

      blue: {
        100: '#B8F4FF',
        200: '#94D5F5',
        300: '#7DC6F5',
        400: '#6FBDF5',
        500: '#62A3F5',
        600: '#5893DB',
        700: '#497BB8',
        800: '#2F4F75',
        900: '#152436',
      },

      pink: {
        100: '#F5B3DA',
        200: '#F274F2',
        300: '#FF7EE2',
        400: '#FC57FF',
        500: '#F277D7',
        600: '#D96AC1',
        700: '#B559A1',
        800: '#B53FB8',
        900: '#712773',
      }


    },
    fontFamily: {
      sans: [
        'Nunito Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
}
