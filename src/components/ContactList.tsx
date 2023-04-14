import React from 'react'
import Card from './Card'
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";



function ContactList() {
  const contacts:any = useSelector((state)=> state)  
   
    return (
        <>
            <div className="p-8 sm:ml-64 fixed bottom-0 right-0">
                <Link to='/add' className="inline-flex items-center px-4 cursor-pointer py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </Link>
            </div>
            <Card/>
        </>
    )
}

export default ContactList