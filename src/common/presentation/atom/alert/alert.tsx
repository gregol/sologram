
interface AlertProps {
    children: React.ReactElement,
    color: string;
}

export const Alert: React.FC<AlertProps> = ({
    children,
    color
}) => {
    return (
        <div className={`bg-${color}-50 border-l-4 border-${color}-400 p-4`}>
        <div className="flex">
            <div className="flex-shrink-0">
            </div>
            <div className="ml-3">
                {children}
            </div>
        </div>
        </div>
    )
}