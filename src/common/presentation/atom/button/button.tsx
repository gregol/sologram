import * as React from 'react'

type ButtonProps = React.HTMLProps<HTMLButtonElement>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <button 
      type="button" 
      ref={ref} 
      className={
        props.className ?? 
        'inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-700' 
      }
      onClick={props.onClick}
    >
    {props.children}
  </button>
))

// // You can now get a ref directly to the DOM button:
// const ref = React.createRef<HTMLButtonElement>()

// <FancyButton ref={ref}>Click me!</FancyButton>