import future from '@mdx-deck/themes/future'
import highlight from '@mdx-deck/themes/syntax-highlighter-prism'

import { slides as one } from './slides/one.mdx'
import { slides as two } from './slides/two.mdx'

export const themes = [
    future,
    highlight
  ]

export const slides = [...one, ...two]