import {TouchableOpacity, View} from "react-native";
import {flattenStyle, IComponent} from "../component";
import {TextPrimary} from "../text/text";
import {flex1, flex2, flex3, flex4, flex5, flex6, fRow, fWrap} from "../../../styles/markups";

export function RNView(props: IComponent) {
    if (props.visible === false) return null
    const style = flattenStyle(props.style)
    const children = ['string', 'number'].includes(typeof props.children) ?
        <TextPrimary style={props.fontStyle}>{props.children}</TextPrimary>
        :
        props.children
    if (props.onPress) return <TouchableOpacity style={style} onPress={props.onPress}>{children}</TouchableOpacity>
    return <View style={style}>{children}</View>
}

export function Row(props: IComponent): JSX.Element | null {
    const style = flattenStyle([fRow, fWrap, props.style])
    return <RNView {...props} style={style}/>
}

export function Row1(props: IComponent): JSX.Element | null {
    return <Row {...props} style={flattenStyle([flex1, props.style])}/>
}

export function Row2(props: IComponent): JSX.Element | null {
    return <Row {...props} style={flattenStyle([flex2, props.style])}/>
}

export function Row3(props: IComponent): JSX.Element | null {
    return <Row {...props} style={flattenStyle([flex3, props.style])}/>
}

export function Row4(props: IComponent): JSX.Element | null {
    return <Row {...props} style={flattenStyle([flex4, props.style])}/>
}

export function Row5(props: IComponent): JSX.Element | null {
    return <Row {...props} style={flattenStyle([flex5, props.style])}/>
}

export function Row6(props: IComponent): JSX.Element | null {
    return <Row {...props} style={flattenStyle([flex6, props.style])}/>
}

export function Col(props: IComponent) {
    return <RNView {...props}/>
}

export function Col1(props: IComponent) {
    return <Col {...props} style={[flex1, props.style]}/>
}

export function Col2(props: IComponent) {
    return <Col {...props} style={[flex2, props.style]}/>
}

export function Col3(props: IComponent) {
    return <Col {...props} style={[flex3, props.style]}/>
}

export function Col4(props: IComponent) {
    return <Col {...props} style={[flex4, props.style]}/>
}

export function Col5(props: IComponent) {
    return <Col {...props} style={[flex5, props.style]}/>
}

export function Col6(props: IComponent) {
    return <Col {...props} style={[flex6, props.style]}/>
}

