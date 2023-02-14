import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from "../utils/defaultValues"

const FormUser = ({ createNewUser, updateInfo, UpdateUserById, handleClose, setUpdateInfo }) => {

  const {register, handleSubmit, reset} = useForm()

  useEffect (() => {
    if(updateInfo) {
      reset(updateInfo)
    }
  }, [updateInfo])
  
  const submit = data => {
    if (updateInfo) {
      UpdateUserById(updateInfo.id, data)
    }else{
      createNewUser(data)
    }
    handleClose()
    reset(defaultValues)
  }

  const handleX = () => {
    reset(defaultValues)
    setUpdateInfo()
    handleClose()
  }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
      <h2 className='form__title'>{'Form User'}</h2>
      <div onClick={handleX} className='form__x'>x</div>
        <div className='form__item'>
            <label className='form__label' htmlFor="email">Email</label>
            <input className='form__input' {...register('email')} id="email" type="email" />
        </div>
        <div className='form__item'>
            <label className='form__label' htmlFor="password">Password</label>
            <input className='form__input' {...register('password')} id="password" type="password" />
        </div>
        <div className='form__item'>
            <label className='form__label' htmlFor="firstName">First name</label>
            <input className='form__input' {...register('first_name')} id="firsName" type="text" />
        </div>
        <div className='form__item'>
            <label className='form__label' htmlFor="lastName">Last Name</label>
            <input className='form__input' {...register('last_name')} id="lastName" type="text" />
        </div>
        <div className='form__item'>
            <label className='form__label' htmlFor="birthday">Birthday</label>
            <input className='form__input' {...register('birthday')} id="birthday" type="date" />
        </div>
        <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormUser