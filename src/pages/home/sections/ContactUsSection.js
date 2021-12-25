export function ContactUsSection() {
  return (
    <div className='container'>
      <form className='bg-gray-800 p-5 w-1/3 mx-auto rounded shadow flex flex-col items-center'>
        <h3 className='mb-7'>Contact us</h3>
        <div className='w-full mb-3'>
          <label className='block text-sm mb-2' for='contact-email'>
            Email
          </label>
          <input id='contact-email' type={"email"} name='email' />
        </div>
        <div className='w-full'>
          <label className='block text-sm mb-2' for='contact-message'>
            Message
          </label>
          <textarea
            id='contact-message'
            type={"text"}
            name='message'
            rows={4}
          />
        </div>
        <button className='btn mt-3'>Submit</button>
      </form>
    </div>
  );
}
