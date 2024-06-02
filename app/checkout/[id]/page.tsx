"use client"

import { db } from '@/config';
import Product from '@/models/Product';
import { collection, onSnapshot } from 'firebase/firestore';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { PaystackButton } from 'react-paystack';

const Checkout = () => {
    const { id } = useParams();
    console.log(id);

    const [product, setProduct] = useState<Product | null>(null);
    const [email , setEmail] = useState<string>('')
    const [name , setName] = useState<string>('')
    const [location , setLocation] = useState<string>('')
    const [phone , setPhone] = useState<string>('')


   useEffect(() => {
     const getProduct = async () => {

         onSnapshot(collection(db, 'products'), (snapshot) => {
                snapshot.docs.forEach((doc) => {
                    if (doc.id === id) {
                        setProduct({ ...doc.data(), id: doc.id } as Product);
                    }
                }
                );
            }
        );  
    }
    getProduct();
    }
    , [id]);
    








const config = {
  reference: new Date().getTime().toString(),
  email: email,
  amount: Number(product?.price), //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  phone: phone,

  //ACCESS PUBLIC KEY FROM ENV FILE

  publicKey: "pk_live_1bfde0dcafcfa125bf29adff0ed305f9c8b8aff0",
};
  
    // you can call this function anything
    const handlePaystackSuccessAction = (reference:any) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }

  

  return (
    <div>
      <div>
        <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
          <div className="flex flex-col justify-start items-start w-full space-y-9">
            <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
              <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                <div className="flex flex-col justify-start items-start w-full space-y-4">
                  <p className="text-xl md:text-2xl leading-normal text-gray-800 dark:text-gray-50">
                    {product?.title}
                  </p>
                  <p className="text-base font-semibold leading-none text-gray-600 dark:text-white">
                    GHS {product?.price}
                  </p>
                </div>
                <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                  <img src={product?.image} alt="headphones" />
                </div>
              </div>

              <div className="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
                <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                  Full name
                </label>
                <div className="mt-2 flex-col">
                  <div>
                    <input
                      className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      name=""
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id=""
                      placeholder="Full name"
                    />
                  </div>
                </div>

                <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                  Email
                </label>
                <div className="mt-2 flex-col">
                  <input
                    className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name=""
                    id=""
                    placeholder="Email"
                  />
                </div>

                <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                  Phone
                </label>
                <div className="mt-2 flex-col">
                  <input
                    className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name=""
                    id=""
                    placeholder="Phone"
                  />
                </div>

                <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                  Location
                </label>
                <div className="mt-2 flex-col">
                  <input
                    className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    name=""
                    id=""
                    placeholder="Location"
                  />
                </div>

                <PaystackButton
                  className="mt-8 border border-transparent  bg-blue-500 hover:bg-blue-600 text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full"
                  reference={config.reference}
                  email={config.email}
                  amount={Number(config.amount) * 100 || 0}
                  publicKey={config.publicKey || ""}
                  onSuccess={(reference: any) =>
                    handlePaystackSuccessAction(reference)
                  }
                  onClose={handlePaystackCloseAction}
                  currency="GHS"
                >
                    Pay
                    </PaystackButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout