export function ContactUsSection() {
  return (
    <section>
      <div className='mb-7 text-center'>
        <h2 className='mb-7'>Contact us</h2>
        <p>
          Interested in working with us or using our material? You can browse
          available resources through the
          <a
            href='https://www.nas.gov.sg/archivesonline/photographs/search-result'
            target='_blank'
          >
            National Library Board (NLB)
          </a>
          website. You can contact us using the form below and we will get back
          to you as soon as possible.
        </p>
      </div>
      <form
        id='contact-form'
        onSubmit={(e) => validateForm(e)}
        className='bg-gray-800 p-5 md:w-1/2 mx-auto rounded shadow flex flex-col items-center'
      >
        <div className='w-full mb-3'>
          <label className='block text-sm mb-2' htmlFor='contact-email'>
            Email
          </label>
          <input id='contact-email' type={"email"} name='email' />
        </div>
        <div className='w-full'>
          <label className='block text-sm mb-2' htmlFor='contact-message'>
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
    </section>
  );
}

function validateForm(e) {}
