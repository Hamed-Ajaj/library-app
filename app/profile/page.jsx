"use client"
import { IconBell } from '@tabler/icons-react'
import { account } from '../Config.js'
import { useEffect, useState } from 'react'
import { countries } from '@/utils/constants.js'
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card.jsx'
// import MyButton from '@/components/MyButton.jsx'
import { useAuth } from '@/utils/AuthContext.js'
const ProfilePage =  () => {
  const {logoutUser} = useAuth()
  const [userData, setUserData] = useState({})
  const [disabled, setDisabled] = useState(true)
  const getProfile = async () => {
    try {
      let res = await account.get()
      setUserData(res)
    } catch (error) {
      console.error(error)
    }
  
  }
  

  useEffect(() => {
    getProfile()
  }, [])
  const transformDate = (date) => {
    let newDate = new Date(date)
    return newDate.toDateString()
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setDisabled(true)
  }

  const upperCaseName =userData.name ?userData.name.toUpperCase() : ""

  const date =userData["$createdAt"] ? transformDate(userData["$createdAt"]):""
  return (
    <section className='p-20 mt-10 bg-[#f0efef] min-h-screen'>
      <header className='flex justify-between items-center'>
      <div className='space-y-4 z-1'>
        <h1 className='text-[1.5rem] font-medium'>Welcome, {upperCaseName}</h1>
        <p className='text-[#ADA7A7] font-light'>{date}</p>
      </div>
      <div className='flex gap-8 items-center justify-center z-1'> 
        <div className='w-[40px] h-[40px] flex justify-center items-center cursor-pointer bg-white rounded-md'>
          <IconBell width={20} height={20} color='#ADA7A7'/>
        </div>
        <div className='w-[52px] h-[52px] rounded-md'> 
            <img src="/userImgs/user1.svg" alt="user1" className='w-full h-full object-cover' />
        </div>  
      </div>
      </header>
      <div className='mt-10'>
        <NeonGradientCard className={"flex flex-col gap-8 z-0"}>

          <div className='flex justify-between items-center py-8 px-4'>
            <div className='flex gap-8 justify-center items-center'>
              <img src="/userImgs/user1.svg" alt="user1" className='w-[100px] h-[100px] rounded-full object-cover' />
              <div className='space-y-3'>
                <h1 className='text-[1.2rem] font-medium'>{upperCaseName}</h1>
                <p className='text-[#bcbcbc] font-light'>{userData.email}</p>
              </div>
            </div>

            <div>
              <button className={`bg-[#FF971D] ${!disabled&& "bg-[#f8ca96]"} py-3 px-8 rounded-lg text-white cursor-pointer hover:opacity-90`} disabled={!disabled} onClick={() => setDisabled(!disabled)}>Edit</button>
            </div>
          </div>
          <div className='px-4'> 
            <form >
              <div className='flex flex-col gap-4 px-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="name" className='text-[#bcbcbc]'>Name</label>
                  <input type="text" disabled={disabled} name="name" id="name" value={userData.name} className='py-3 px-4 rounded-lg border border-[#bcbcbc]' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="email" className='text-[#bcbcbc]'>Email</label>
                  <input type="email" disabled={disabled} name="email" id="email" value={userData.email} className='py-3 px-4 rounded-lg border border-[#bcbcbc]' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="password" className='text-[#bcbcbc]'>Password</label>
                  <input type="password" disabled={disabled} name="password" id="password" value='********' className='py-3 px-4 rounded-lg border border-[#bcbcbc]' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="country" className='text-[#bcbcbc]'>Country</label>
                  <select name="country" disabled={disabled} id="country" className='py-3 px-4 rounded-lg border border-[#bcbcbc]'>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div className='flex justify-between items-center'>
                  <button type='submit' onClick={handleSubmit} className='bg-[#FF971D] py-3 px-8 rounded-lg max-w-[150px] mt-10 text-white cursor-pointer hover:opacity-90'>Save</button>
                  <button  onClick={logoutUser} className='bg-[#ccc] py-3 px-8 rounded-lg max-w-[150px] mt-10 text-white cursor-pointer hover:opacity-90'>Logout</button>
                </div>
              </div>
            </form>
          </div>
        </NeonGradientCard>
      </div>
    </section>
  )
}

export default ProfilePage
