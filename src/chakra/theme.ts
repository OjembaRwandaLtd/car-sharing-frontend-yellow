import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  components: {
    Modal: {
      baseStyle: {
        dialog: {
          bg: 'rgb(38, 94, 120)',
          color: 'white',
          borderRadius: 'lg',
        },
      },
    },
  },
})

export default customTheme
