import React from 'react'

function MessageLoader() {
    return (
        <div className="Loader flex-1 flex flex-col gap-2">
            <hr className="rounded-sm border-0 bg-[#f6f7f8] h-[20px] w-full animation-loader" />
            <hr className="rounded-sm border-0 bg-[#f6f7f8] h-[15px] w-2/3 animation-loader" />
            <hr className="rounded-sm border-0 bg-[#f6f7f8] h-[10px] w-1/3 animation-loader" />
        </div>

    )
}

export default MessageLoader