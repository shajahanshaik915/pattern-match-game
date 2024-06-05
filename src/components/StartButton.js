import React from 'react'

const StartButton = ({ nextSequence, isStarted, setIsStarted }) => {

    return (
        <div className="absolute bottom-20 sm:bottom-14 md:bottom-8 lg:bottom-4 left-1/2 -translate-x-[50%]">
            {!isStarted && <button
                className={` px-5 py-3 mt-5 text-[#fef2bf] bg-black rounded-full items-center text-xl`}
                onClick={() => {
                    setIsStarted(true)
                    setTimeout(() => {
                        nextSequence()
                    }, 1000)
                }}
            >
                START
            </button>}
        </div>
    )
}

export default StartButton;