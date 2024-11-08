'use client'
import PC from '@/app/components/pc'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { IoPersonAddSharp, IoSearch } from 'react-icons/io5'
import { useClientsList } from '../context/clientsListContext'

export default function ToolBar() {
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)
    const [value, setValue] = useState('') // State to store the input value

    const { setSearchString, clients, loading } = useClientsList()

    // this is bouncing search input, it will wait for 0.3s after user stops typing
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setValue(newValue) // Update the value state with the input text

        if (timer) clearTimeout(timer)
        const newTimer = setTimeout(async () => {
            setSearchString(newValue)
        }, 300)
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
        <div className=" z-30 flex items-center gap-3 border-b border-solid border-base-200 bg-white p-2">
            <div className="flex gap-3">
                <label className="input input-bordered flex w-full items-center gap-2">
                    {clients.status === 'pending' || loading ? (
                        <span className="loading loading-dots h-5 w-5 opacity-40"></span>
                    ) : (
                        <IoSearch className="h-5 w-5 opacity-40" />
                    )}
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
