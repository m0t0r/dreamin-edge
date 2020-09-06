import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'

const ThemeProvider = ({ children }) => {
    let [isDarkTheme, updateIsDarkTheme] = useState(
        window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
    )

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', ({ matches }) => {
                updateIsDarkTheme(matches)
            })
    }, [])

    return (
        <Fragment>
            <meta
                name="theme-color"
                content={isDarkTheme ? '#222' : '#f9fafc'}
            />
            {children}
        </Fragment>
    )
}

export default ThemeProvider
