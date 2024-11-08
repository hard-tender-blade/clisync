import React from 'react'

export default function ToolBar() {
    return (
        <div className="flex items-center gap-3 border-b border-solid border-base-200 p-2">
            {/* <div className="join">
                <button
                    // onClick={handleClickMonthView}
                    className={`btn join-item ${mode === 'month' ? 'disabled btn-primary' : ''}`}
                >
                    Month
                </button>
                <button
                    // onClick={() => setMode('editor')}
                    className={`btn join-item ${mode === 'editor' ? 'disabled btn-primary' : ''}`}
                >
                    Day
                </button>
            </div> */}
            <button
                // onClick={goToToday}
                className={`btn btn-primary join-item`}
            >
                Save
            </button>

            <button
                // onClick={goToToday}
                className={`btn btn-error join-item text-white`}
            >
                Delete
            </button>
        </div>
    )
}
