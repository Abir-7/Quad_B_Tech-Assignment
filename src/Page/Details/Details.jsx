
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form, useLoaderData, useParams } from 'react-router-dom';
const Details = () => {
    const data = useParams()
    const id = data.id;
const [bookForm,setForm]=useState(false)
    const data2 = useLoaderData()
    console.log(data2)

    const details = [];

    const item = data2.map(item => {
        if (item.show.id == id) {
            details.push(item.show)
        }
    })

    console.log(details[0])

    const handleform=event=>{
        event.preventDefault()
       const form=event.target 
        const movie=form.movie.value
        const email=form.email.value
        const mobile=form.mobile.value
        console.log(movie,email,mobile)
        const userDetails={movie,email,mobile}
   
        let array=[userDetails]
        const priviousData= JSON.parse(localStorage.getItem('user-details'))
      if( priviousData ){
        array=[...priviousData,userDetails]
      }
        console.log(priviousData)

        localStorage.setItem('user-details',JSON.stringify(array))
    }

    return (

        <div className="d-grid mt-5">
            <div className=" row ">
                <div className='col col-12 col-md-6'>
                    <img src={details[0].image.original} style={{ width: '400px' }} className="" />
                </div>
                <div className="col col-12 col-md-6">

                    <p className="fs-3 fw-bold  mb-2">Show Name:
                        <span className="fs-3 fw-normal"> {details[0].name}</span>
                    </p>
                    <p className="fs-3 fw-bold  mb-2">Language:
                        <span className="fs-3 fw-normal"> {details[0].language}</span>
                    </p>
                    <p className="fs-3 fw-bold  mb-2">Schedule:
                        <span className="fs-3 fw-normal"> {details[0].schedule.time} {details[0].schedule.days} </span>
                    </p>


                    <div className='d-flex align-items-center'>
                        <div>
                            <p className="fs-3 fw-bold  mb-2">Rrating:
                                <span className="fs-3 fw-normal"> {details[0].rating.average}   </span>
                            </p>
                        </div>
                        <div className='mb-2'>
                            <span style={{ color: "yellow", width: '10px', }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ color: "yellow", width: '30px' }} >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            </span>
                        </div>
                    </div>
                    <button onClick={()=>{setForm(!bookForm)}} className='btn btn-dark mt-5'>{bookForm? 'Cencel': 'Book Now'}</button>
                </div>
            </div>
            <div className="col-12 mt-5">
                <h3 className="text-lg font-bold mb-2"><span dangerouslySetInnerHTML={{ __html: details[0].summary }}></span></h3>
                <p className="text-gray-600"></p>
            </div>


{
    bookForm && 
<form onSubmit={ handleform} className=' mb-5'> 
    <h1 className='text-center mt-5'>Fill The Form</h1>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Show Name</label>
    <input name='movie' type="text" defaultValue={details[0].name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input name='email' placeholder=' your Email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Mobile</label>
    <input name='mobile' type="number" className="form-control" placeholder='Number' id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>


  <input type="submit" value={'Submit'} className="btn btn-primary"/>
</form>
}


        





        </div>

    );
};

export default Details;