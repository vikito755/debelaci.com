import { createTheme } from '@mantine/core'

const theme = createTheme({
  colors: {
    orange: [
      '#fff8f0', // 0 - lightest
      '#ffe8cc', // 1
      '#ffd199', // 2
      '#ffb766', // 3
      '#ff9d33', // 4
      '#ff8800', // 5 - main
      '#e67300', // 6
      '#cc6600', // 7
      '#b35900', // 8
      '#994d00', // 9 - darkest
    ],
  },

  primaryColor: 'orange',
  primaryShade: 5,
})

export { theme }
