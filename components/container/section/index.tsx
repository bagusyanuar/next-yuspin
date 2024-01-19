import React from 'react'

interface ContainerProps { children: React.ReactNode, className?: string }

function Index({ children, className = '' }: ContainerProps) {
    return (
        <section className={`lg:px-8 lg:py-4 md:px-8 md:py-4 xl:px-8 xl:py-4 sm:px-2 sm:py-1 px-2 py-1 ${className}`}>
            {children}
        </section>
    )
}

export default Index