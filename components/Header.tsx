export default function Header({isDarkMode, toggleDarkMode}: {isDarkMode: boolean; toggleDarkMode: () => void}) {
    return <div>
        <button onClick={toggleDarkMode}>{isDarkMode ? <i className="bi bi-moon-fill"/> : <i className="bi bi-sun-fill"/>}</button>
    </div>
}