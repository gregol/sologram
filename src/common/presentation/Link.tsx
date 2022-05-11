import React from 'react';
import { Link } from "react-router-dom";

interface LinkProps {
    children: React.ReactElement
    linkHref?: string;
    className?: string;
}
export const LinkRouter: React.FC<LinkProps> = ({ 
    linkHref = '#',
    className,
    children
}) =>  {  
    return (
        <Link to={linkHref} className={className ?? 'Link'}>
            {children}
        </Link>
    );
}