import  { useState } from 'react'

export default function DropArea(props: { onDrop: () => void; }) {
    const [showDropArea, setShowDropArea] = useState(false)
    return (
        <section className={showDropArea ? "dropAreaShown" : "dropAreaHidden"}
            onDragEnter={() => setShowDropArea(true)}
            onDragLeave={() => setShowDropArea(false)}
            onDrop={() => {
                props?.onDrop()
                setShowDropArea(false)
            }}
            onDragOver={(e)=>e.preventDefault()}
        >Drop Here</section>
    )
}
