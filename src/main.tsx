import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {ApiProvider} from '@reduxjs/toolkit/query/react'
import { myApis } from './redux/api.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ApiProvider api={myApis}>
   <App />
   </ApiProvider>
  </React.StrictMode>,
)
