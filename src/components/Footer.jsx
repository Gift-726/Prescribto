// import React from 'react'

import { assets } from "../assets/assets_frontend/assets"

const Footer = () => {
    return (
        <div className="md:mx-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">


                {/*-------------- Left Section ---------- */}
                <div>
                    <img className="mb-5 w-40" src={assets.logo} />
                    <p className="w-full md:w-2/3 text-gray-600 leading-6">Prescribto is a platform where doctors meet theer potential client and also where client connect with various medical practitioner. We also hope to reduce death rate major health crisis amongst, hpoping to hear good remarks of the app from you </p>
                </div>
                {/*-------------- middle Section ---------- */}
                <div className="">
                    <p className="text-xl font-medium mb-4">Company</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                {/*-------------- Right Section ---------- */}
                <div>
                    <p className="text-xl font-medium mb-6">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+234-810-313-5256</li>
                        <li>ayanogift@gmail.com</li>
                    </ul>
                </div>
            </div>
            {/*-------------- CopyRight Section ---------- */}

            <div>
                <hr/>
                <p className="text-center text-sm text-gray-900 py-5">CopyRight ©️ 2025  Prescribto - All Rights Reserved.</p>
            </div>
        </div>
    )
}
export default Footer