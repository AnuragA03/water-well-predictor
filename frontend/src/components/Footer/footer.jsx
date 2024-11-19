import './footer.css';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className='footer p-5 pb-24 md:pb-5'>
      <h2 className="heading mb-8">Water Well Predictor</h2>
      <div className="flex flex-wrap">
        <div className="basis-full md:basis-1/4">
          <h4 className="heading-sm">Social link</h4>
          <ul>
            <li className='text-lg font-medium'>
              <Link href=''>
                <i className="uil uil-github"></i> Github
              </Link>
            </li>
            <li>
              <Link href='' className='text-lg font-medium'>
                <i className="uil uil-linkedin"></i> LinkedIn
              </Link>
            </li>
          </ul>
        </div>
        <div className="basis-full md:basis-1/4">
          <h4 className="heading-sm">Important links</h4>
          <ul>
            <li>
              <Link href='/Feedback'>Feedback</Link>
            </li>
            <li>
              <Link href='/Privacy'>Privacy Policy</Link>
            </li>
            <li>
              <Link href=''>Terms and Conditions</Link>
            </li>
            <li>
              <Link href='/Guideline'>Guidelines & Recommendations</Link>
            </li>
            <li>
              <Link href='/Resources'>Resources and Documentation</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:grid md:basis-1/4 place-items-center">
          <div className="rounded-full logo overflow-hidden">
            <img src="/image/logo.png" alt="logo" width={150} />
          </div>
        </div>
      </div>
    </footer>
  )
}