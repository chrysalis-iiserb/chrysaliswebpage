import PageLayout from 'components/PageLayout'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

type formDataType = {
  name: string, 
  email: string,
  message: string
}


const Contact = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: formDataType) => {
    
    console.log(data)
    toast.success("Submitted your message!")

    
  }

  return (
    <PageLayout>
      <div className="min-h- font-sfregular w-full grid  z-[10] p-4  lg:p-24">
        <Toaster />
        <h1 className=" flex items-center font-sfbold gap-4 justify-center drop-shadow-xl font-bold text-center text-6xl px-4 py-2 text-black rounded-xl w-fit mx-auto  z-[10]">
          Contact Us.
        </h1>
        <p className='mt-12 mb-12'>
          Contact us for queries, contribution, feedback or any other genuine
          concern. We are happy to help.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className='mb-12'>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 w-[60%] mb-6">
            <InputField
              name={'Full Name'}
              id={'name'}
              placeholder="Write your Full Name"
              register={register}
            />
            <InputField
              name={'Email ID'}
              id={'email'}
              placeholder="Enter your Email Address."
              register={register}
            />
          </div>
          <TextArea
            name={'Your Message'}
            id={'message'}
            placeholder={'Please try to be clear, precise and meaningful.'}
            register={register}
          />

          <button
            type="submit"
            value={'submit'}
            className="px-4 py-2 mt-4 rounded-xl hover:bg-blue-600 bg-blue-500 text-white"
          >
            Send Message
          </button>
        </form>

        <p>
          Please try to be as detailed as possible in your email if you are
          having a query or reporting a problem, such that we can reply to you
          with an appropriate and meaningful answer to your question(s). Please
          be patient after sending an email to us, we always reply to emails,
          but it may take some time to get back to you (at most 24 hrs.). Kindly
          wait for our reply before sending another email. If you want to get
          connected to some specific members behind Chrysalis, you can get a
          glance of our whole team on the <a href="/about">about</a> page. We
          really appreciate your support for Chrysalis and we urge you to
          continue exploring our magazine. Consider subscribing to our science
          magazine to stay updated and informed.
        </p>
      </div>
    </PageLayout>
  )
}

export default Contact

const InputField = ({ id, name, placeholder, register }) => {
  return (
    <div className="">
      <label htmlFor={id} className="block text-sm  leading-6 text-gray-900">
        {name}
      </label>
      <div className="mt-2">
        <input
          type={id}
          name={id}
          id={id}
          autoComplete="username"
          className=" flex-1 border rounded-md  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-xl  "
          placeholder={placeholder}
          required
          {...register(id)}
        />
      </div>
    </div>
  )
}

const TextArea = ({ name, placeholder, id, register }) => {
  return (
    <div className="col-span-2">
      <label
        htmlFor="username"
        className="block text-sm  leading-6 text-gray-900"
      >
        {name}
      </label>
      <div className="mt-2">
        <textarea
          name={name}
          id={id}
          autoComplete="username"
          className=" flex-1 border lg:w-[600px] w-full max-w-[1000px] lg:h-[100px] h-[200px] rounded-md  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600   "
          placeholder={placeholder}
          {...register(id)}
        />
      </div>
    </div>
  )
}
