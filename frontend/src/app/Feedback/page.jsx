import Feedback from '@/components/Feedback/feedback'
export default function () {
  return (
    <section className='feedback pt-8'>
      <div>
        <h1 className='heading-md text-center'>Your FeedBack</h1>
      </div>

      <div className="flex justify-around gap-16 py-8 px-16 md:flex-row flex-col">
        <div className="basis-1/2">
          <Feedback />
        </div>
        <div className="basis-1/2 contact">
          <h2 className="heading text-center">Contact Us</h2>
          <div className='mt-4'>
            <div className="flex ">
              <div className='flex gap-4 basis-1/2 mt-5'>
                <div className="icon self-center text-3xl">
                  <i class="uil uil-phone text-[var(--primary-1)]"></i>
                </div>
                <div className="content">
                  <h2 className='heading-sm text-[var(--primary-1)]'>Phone</h2>
                  <p className="text">+91 9876543210</p>
                </div>
              </div>
              <div className='flex gap-4 basis-1/2 mt-5'>
                <div className="icon self-center text-3xl">
                  <i class="uil uil-at text-[var(--primary-1)]"></i>
                </div>
                <div className="content">
                  <h2 className='heading-sm text-[var(--primary-1)]'>Mail Us at </h2>
                  <p className='text'>H2Home@code.com</p>
                </div>
              </div>
            </div>
            <div className='flex gap-4 mt-5 self-center'>
              <div className="icon self-center text-3xl">
                <i class="uil uil-location-point text-[var(--primary-1)]"></i>
              </div>
              <div className="content">
                <h2 className='heading-sm text-[var(--primary-1)]'>Address</h2>
                <p className='text md:w-3/4'>4871, Dr. Akhilesh Das Gupta Institute of Technology and Management, Kashmere Gate, Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
