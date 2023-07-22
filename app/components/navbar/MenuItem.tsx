"use client"

interface MenuItemProps {
    label : string
    onclick : () => void
}

const MenuItem : React.FC<MenuItemProps> = ({label, onclick}) => {
    return(
        <div className="py-3 px-4 hover:bg-neutral-100 transition font-semibold" onClick={onclick}>
            {label}
        </div>
    )
}
export default MenuItem;