
interface DividerProps {
    children?: React.ReactElement
}
export const Divider: React.FC<DividerProps> = ({children}) => {
    return (
        <div className="mt-4">
            {children}
        </div>
    )
}