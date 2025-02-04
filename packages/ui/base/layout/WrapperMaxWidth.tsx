import React from 'react'
import { cn } from '../lib/utils';


interface Props {
    className?: string;
    children?: React.ReactNode;
}
function WrapperMaxWidth({ className, children }: Props) {
    return (
        <div className={cn(' mx-auto max-w-screen-xl w-full my-12 flex flex-col  ', className)}>
            thi si wrappe!
            {children}
        </div>
    )
}

export default WrapperMaxWidth
