import React, { useEffect, useState } from 'react'
import '../assets/tailwind.css'
import { Sun, Moon } from 'lucide-react'
import ThemeContext from '../context/themecontext'

export default () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <button
          onClick={() => context.setDark(!context.dark)}
          className={`text-white ${
            context.dark
              ? 'navbreak:text-white navbreak:hover:text-lightPurpleDesat'
              : 'navbreak:text-black navbreak:hover:text-mediumPurple'
          }`}
        >
          {context.dark ? <Moon size={32} /> : <Sun size={32} />}
        </button>
      )}
    </ThemeContext.Consumer>
  )
}