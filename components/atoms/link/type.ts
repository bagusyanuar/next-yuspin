export interface IProps {
    text: string,
    to: string,
    className?: string,
    color?: string,
}

export interface INavMenuProps {
    icon: string,
    to: string,
    children?: React.ReactNode,
    className?: string,
}

export interface INavSidebarTriggerProps {
    icon: string,
    className?: string,
    onClick: () => void
}

export interface IStyledProps {
    color: string
}