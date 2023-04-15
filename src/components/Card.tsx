import React from 'react'
import {useDispatch} from 'react-redux'
import { Link } from "react-router-dom";


const Card = ({contacts}) => {
    const dispatch = useDispatch()
    const deleteContact = (id:any) => {
        dispatch({type:"DELETE_CONTACT" , payload:id})
        alert("Are you sure you want to delete this contact?")
    }
    return (
        <div className="p-4 sm:ml-64">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {contacts.map((obj: any, index: any) => {
                return (
                    <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                            {/* <span className="sr-only">Open dropdown</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg> */}
                        </button>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://www.pngall.com/wp-content/uploads/5/User-Profile-Transparent.png" alt="user" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{obj?.first_name} {obj?.last_name}</h5>
                        <span className={`text-sm capitalize ${obj.status === 'active' ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>{obj?.status}</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <Link to={`/edit/${obj.id}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Contact</Link>
                            <button onClick={()=>deleteContact(obj.id)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Delete Contact</button>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
            
        </div>
    )
}

export default Card