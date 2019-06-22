import future from '@mdx-deck/themes/future'
import highlight from '@mdx-deck/themes/syntax-highlighter-prism'

import { slides as one } from './slides/one.mdx'
import { slides as two } from './slides/two.mdx'
import { slides as three } from './slides/three.mdx'
import { slides as four } from './slides/four.mdx'

export const themes = [
    future,
    highlight
  ]

export const slides = [...one, ...two, ...three, ...four]