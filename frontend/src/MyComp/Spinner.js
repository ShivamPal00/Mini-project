import React from 'react'
import spinner from './spinner.gif'

export default function Spinner() {
    return (
        <div class="text-center">
            <img src={spinner} alt="loading" />
        </div>
    )
}
