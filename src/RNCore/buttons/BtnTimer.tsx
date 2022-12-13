import {useEffect, useState} from "react";
import {BtnPrimary, BtnSecondary, IBtn} from "./Btn";

interface IBtnTimer extends IBtn {
    endMessage: string
    reset?: boolean
    startSeconds?: number
}

export function BtnTimer(props: IBtnTimer) {
    if (props.visible === false) return null
    const [counter, setCounter] = useState(props.startSeconds || 60)

    useEffect(() => {
        let isMounted = true
        let timer: NodeJS.Timer | undefined
        if (!timer) timer = setInterval(() => {
            if (counter && isMounted) setCounter(counter - 1)
            else clearInterval(counter)
        }, 1000)
        return () => {
            isMounted = false
            clearInterval(timer)
        }
    }, [props.reset, counter])

    if (counter) return <BtnSecondary
        {...props}
        title={String(counter)}
        disabled={true}
    />
    return <BtnPrimary
        {...props}
        title={props.endMessage}
    />
}
