'use client'
import PC from '@/app/components/pc'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { IoPersonAddSharp, IoSearch } from 'react-icons/io5'

export default function ToolBar({ lang }: { lang: string }) {
    const [typing, setTyping] = useState(false)
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)
    const [value, setValue] = useState('') // State to store the input value
    const router = useRouter()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setValue(newValue) // Update the value state with the input text

        if (timer) clearTimeout(timer)

        setTyping(true)
        const newTimer = setTimeout(() => {
            if (newValue.replaceAll(' ', '').length === 0) {
                router.replace('/workspace/clients')
            }
            router.replace(`/workspace/clients?search=${newValue}`)

            setTyping(false)
        }, 1000)
        setTimer(newTimer)
    }

    useEffect(() => {
        return () => {
            if (timer) {
                clearTimeout(timer)
            }
        }
    }, [timer])

    return (
        <div className="flex flex-col justify-between md:flex-row md:items-center">
            <PC></PC>
            <h1>Clients</h1>
            <div className="flex gap-3">
                <label className="input input-bordered flex w-full items-center gap-2">
                    <IoSearch className="h-5 w-5 opacity-40" />
                    <input
                        className="w-full md:w-auto"
                        placeholder="Search for a client..."
                        value={value} // Bind the input's value to the state
                        onChange={handleInputChange}
                    />
                </label>
                <Link href={`/workspace/clients/new`} className="btn">
                    <IoPersonAddSharp />
                    <PC>Add client</PC>
                </Link>
            </div>
        </div>
    )
}
