import React from 'react'
import { FontContext, fonts } from '../сontexts/FontContext'

const getFont = () => {
    const font = `${window?.localStorage?.getItem('font')}`
    if (Object.values(fonts).includes(font)) return font;
    return fonts.sans;
}

const FontProvider = ({ children }) => {
    const [ font, setFont ] = React.useState(getFont)

    React.useEffect(() => {
        localStorage.setItem('font', font);
    }, [ font ])

    return (
        <FontContext.Provider value={{ font, setFont }}>
            {children}
        </FontContext.Provider>
    )
}

export default FontProvider
