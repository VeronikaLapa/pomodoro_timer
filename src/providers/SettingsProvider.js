import React from 'react'
import { SettingsContext, fonts, colors } from '../сontexts/SettingsContext'

const getFont = () => {
    const font = `${window?.localStorage?.getItem('font')}`
    if (Object.values(fonts).includes(font)) return font;
    return fonts.sans;
}

const getColor = () => {
    const color = `${window?.localStorage?.getItem('color')}`
    if (Object.values(colors).includes(color)) return color;
    return colors.red;
}
const getInitialState = () => {
    return {
        font: getFont(),
        color: getColor()
    }
}
const SettingsProvider = ({ children }) => {
    const [ settings, setSettings ] = React.useState(getInitialState)

    React.useEffect(() => {
        localStorage.setItem('font', settings.font);
    }, [ settings.font ])

    React.useEffect(() => {
        localStorage.setItem('color', settings.color);
    }, [ settings.color ])
    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsProvider
