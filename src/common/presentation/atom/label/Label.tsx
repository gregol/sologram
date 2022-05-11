import React from 'react'

interface LabelProps {
    children: React.ReactNode;
    props?: React.AllHTMLAttributes<HTMLLabelElement>;
}

export const Label: React.FC<LabelProps> = ({children, props}) => {
  return (
    <label htmlFor={props?.htmlFor} className={ props?.className ?? "block text-sm font-medium text-gray-700"}>
        {children}
    </label>
  )
}
