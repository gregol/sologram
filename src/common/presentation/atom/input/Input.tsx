import * as React from 'react'

type InputProps =  React.HTMLProps<HTMLInputElement>;

const transformName = (name?: string): string => {
  
  if(name){
    return name.toLowerCase().replace(/\s/g, '-');
  }

  return 'input'
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <input 
      ref={ref} 
      type={props.type ?? 'text'} 
      required={props.required ?? false}
      name={transformName(props?.name) }
      className={props.className ?? 'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'}
      placeholder={props.placeholder ?? ''}
      value={props.value ?? ''}
      onChange={props.onChange ?? (() => {})}
    /> 
  ))
