import React from 'react'
import "./foot.css";


const Footer = () => {
    return (
        <>
            <footer>
                <div className="w-full p-9 bg-gray-200">
                    <div className=" flex  justify-center gap-40 footer">
                        <div className="col-lg-3  max-w-[270px]">
                            <div className="first-item flex flex-col gap-3">
                                <div className="logo">
                                    <span className=' font-bold text-2xl'>BLOG {'{ MUNEEB }'}</span>
                                </div>
                                <ul className='flex flex-col gap-2' >
                                    <li><a href="#">16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</a></li>
                                    <li><a href="#">shah@company.com</a></li>
                                    <li><a href="#">010-020-0340</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 flex flex-col gap-3">
                        <h4 className='font-semibold'>Discover More</h4>
                        <ul className='flex flex-col gap-2'>
                            <li><a href="#">Tech Essentials</a></li>
                            <li><a href="#">Bookworm's Haven</a></li>
                            <li><a href="#">Fitness Finds</a></li>
                        </ul>
                    </div>

                        <div className="col-lg-3 flex flex-col gap-3">
                            <h4 className='font-semibold'>Useful Links</h4>
                            <ul className='flex flex-col gap-2' >
                                <li><a href="#">Homepage</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 flex flex-col gap-3">
                            <h4 className='font-semibold'>Help &amp; Information</h4>
                            <ul className='flex flex-col gap-2' >
                                <li><a href="#">Help</a></li>
                                <li><a href="#">FAQ's</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Tracking ID</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12 flex items-center justify-center flex-col mt-8">
                    <hr className='h-[3px] w-[40%] bg-gray-400'/>
                        <div className="under-footer text-center flex flex-col gap-2 mt-5">
                            <p className=' font-medium'>Copyright © 2022 Blog {'{ MUNEEB }'} All Rights Reserved.

                                <br />Design: <a href="/" target="_parent" title="free css templates" className='text-blue-500'>Muneeb Shah</a></p>
                            <ul className='flex flex-col gap-2' >
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer