import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'



const EditContact = () => {
  const { id } : any = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const contacts: any = useSelector(state => state)
  const currentContact = contacts.find(((contact: any) => contact.id === parseInt(id)))
  
  
  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value)

  }

  useEffect(()=>{
    if(currentContact) {
      setFirstName(currentContact.first_name)
      setLastName(currentContact.last_name)
      setSelectedOption(currentContact.status)
    }
  },[currentContact])


  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      id:parseInt(id),
      first_name: firstName,
      last_name: lastName,
      status: selectedOption
    }
    dispatch({ type: "UPDATE_CONTACT", payload: data })
    alert("Contact Edited")
    navigate("/")
  }
  return (
    <>

<form onSubmit={handleSubmit} >
      <div className="p-4 sm:p-40 sm:ml-64 border-b border-gray-900/10 pb-12">
        <h2 className="font-semibold leading-9 text-2xl text-gray-900">Edit Contact {id}</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
          <div className="">
            <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e?.target?.value)}
                id="first_name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e?.target?.value)}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <fieldset>
          <div className="mt-6 space-y-6">
            <legend className="text-sm font-semibold leading-6 text-gray-900">Status</legend>
            <div className="flex items-center gap-x-3">
              <input
                id="push-active"
                name="active"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={handleOptionChange}
                value="active" checked={selectedOption === 'active'}
              />
              <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                Active
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="push-inactive"
                name="inactive"
                type="radio"
                onChange={handleOptionChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                value="inactive" checked={selectedOption === 'inactive'}
              />
              <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                InActive
              </label>
            </div>

          </div>
        </fieldset>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button onClick={() => navigate("/")} type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Edit Contact
          </button>
        </div>
      </div>
    </form>




    </>

  )
}

export default EditContact