import React, { useRef } from 'react'
import './Items.css'
import { useState, useEffect } from 'react'
const Items = () => {
	const [bacround, setBacround] = useState(false)
	const myRef = useRef()
	useEffect(() => {
		setTimeout(() => {
			setBacround(!bacround)
		}, 1000)
		bacround
			? (myRef.current.style.backgroundColor = 'red')
			: (myRef.current.style.backgroundColor = 'darkgreen')
	}, [bacround])

	return <div ref={myRef} className='item'></div>
}

export default Items
