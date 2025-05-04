import 'fontsource-open-sans/700.css'
import 'fontsource-open-sans/400.css'
import {createRoot} from 'react-dom/client';
import React from 'react'

import {Homepage} from './pages/Homepage'

const root = createRoot(document.getElementById('root'))

root.render(<Homepage/>);