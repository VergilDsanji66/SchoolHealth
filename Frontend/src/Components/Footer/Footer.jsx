import React from 'react'

const Footer = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prev) => prev + 1)
    }

    return (
        <div>
            <button onClick={increment}>+1</button>
        </div>
    )
}

export default Footer