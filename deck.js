import dark from '@mdx-deck/themes/dark'
import highlight from '@mdx-deck/themes/syntax-highlighter-prism'

import { slides as one } from './slides/one.mdx'
import { slides as two } from './slides/two.mdx'

export const themes = [
    dark,
    highlight
  ]

export const slides = [...one, ...two]