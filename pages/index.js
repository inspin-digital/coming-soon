//Modules
import React from 'react';
import Link from 'next/link'
import Axios from 'axios';

import { useState } from "react";

function Index() {
  const [email, setEmail] = useState("")
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = { email }
    
    Axios.post('/api/sendgrid', data)
      .then(() => {
        window.location.reload()
        //document.getElementById("email").value = ""
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  return (
    <div className='index'>

      <Link href="/">
        <a className="logo">Inspin.Digital</a>
      </Link>

      <div className='hero'>
        <h2>Coming Soon</h2>
        <h3>Reimagine your online presence with a masterfully <br/>designed and effectively developed website.</h3>
        <h4>Get notified <br/>when we launch</h4>

        <form onSubmit={handleSubmit}>
          <label className="hide" htmlFor="email">email</label>
          <input type="email" name="email" placeholder="Email address"
            spellCheck="false" onChange={e => setEmail(e.target.value)} />
          <button type="submit">Subscribe</button>
        </form>

        <div className="links">
          <Link href="https://gab.com/inspin_digital"><a target="_blank"><span className="icon-gab"></span></a></Link>
          <Link href="https://github.com/inspin-digital"><a target="_blank"><span className="icon-github"></span></a></Link>
          <Link href="https://linkedin.com/company/inspin-digital"><a target="_blank"><span className="icon-linkedin"></span></a></Link>
          <Link href="https://dribbble.com/inspin-digital"><a target="_blank"><span className="icon-dribbble"></span></a></Link>
        </div>
      </div>

    </div>
  )
}

export default Index