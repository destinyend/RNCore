export const fRow: object = {flexDirection: 'row'}
export const fWrap: object = {flexWrap: 'wrap'}
export const noWrap: object = {flexWrap: 'nowrap'}

export const aLeft: object = {}
export const aCenter: object = {textAlign: 'center'}
export const aRight: object = {}
export const aTop: object = {}
export const aMiddle: object = {justifyContent: 'center', textAlignVertical: 'middle'}
export const aBottom: object = {}

export const aLeftMiddle: object = {...aLeft, ...aMiddle}
export const aCenterMiddle: object = {justifyContent: 'center', }
export const aRightMiddle: object = {...aRight, ...aMiddle}

export const aLeftBottom: object = {...aLeft, ...aBottom}
export const aCenterBottom: object = {...aCenter, ...aBottom}
export const aRightBottom: object = {...aRight, ...aBottom}

export const aAround = {justifyContent: 'space-around'}
export const aBetween = {justifyContent: 'space-between'}

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

