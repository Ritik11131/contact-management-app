import React from 'react'

function CovidCards({ casesCountObj }) {

    return (
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 h-96 mx-7 '>
            <div className="block  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Total Cases </h5>
                <p className="font-normal text-xl text-gray-700 dark:text-gray-400">{casesCountObj?.cases}</p>
            </div>
            <div className="block  max-w-sm p-6 bg-white border border-red-200 rounded-lg shadow hover:bg-red-100 dark:bg-red-800 dark:border-red-700 dark:hover:bg-red-700">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-red-900 dark:text-white">Total Deaths </h5>
                <p className="font-normal text-xl text-white dark:text-white">{casesCountObj?.deaths}</p>
            </div>
            <div className="block  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Total Tests </h5>
                <p className="font-normal text-xl text-gray-700 dark:text-gray-400">{casesCountObj?.tests}</p>
            </div>
            <div className="block  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Total Recovered </h5>
                <p className="font-normal text-xl text-gray-700 dark:text-gray-400">{casesCountObj?.recovered}</p>
            </div>
        </div>
    )
}

export default CovidCards;