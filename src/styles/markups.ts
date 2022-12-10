export const fRow = {flexDirection: 'row'}
export const fWrap = {flexWrap: 'wrap'}
export const noWrap = {flexWrap: 'nowrap'}
export const fStart = {alignItems: 'flex-start', textAlign: 'left'}
export const fEnd = {alignItems: 'flex-end', textAlign: 'right'}
export const fCenter = {alignItems: 'center', textAlign: 'center'}

export const jStart = {justifyContent: 'flex-start'}
export const jEnd = {justifyContent: 'flex-end'}
export const jCenter = {justifyContent: 'center'}
export const jAround = {justifyContent: 'space-around'}
export const jBetween = {justifyContent: 'space-between'}

export const flex1 = {display: 'flex', flex: 1}
export const flex2 = {display: 'flex', flex: 2}
export const flex3 = {display: 'flex', flex: 3}
export const flex4 = {display: 'flex', flex: 4}
export const flex5 = {display: 'flex', flex: 5}
export const flex6 = {display: 'flex', flex: 6}

export const stickRight = {
    marginRight: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0
}

export const stickLeft = {
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
}

export const stickBottom = {
    marginBottom: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
}

export const stickTop = {
    marginTop: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
}

export const stick = {
    ...stickLeft,
    ...stickRight
}

export const absolute = {position: 'absolute'}

