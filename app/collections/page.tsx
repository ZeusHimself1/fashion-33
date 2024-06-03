"use client"
import { db } from "@/config";
import Product from "@/models/Product";
import {
  collection,
  DocumentData,
  onSnapshot,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";



const Collection = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    // Fetch data when component mounts
    getMatches();
  }, []);

  const getMatches = async () => {

    try {
      setLoading(true);
    
      onSnapshot(collection(db, "products"), (querySnapshot) => {
        const products: Product[] = [];
        querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => { // Specify the type of 'doc' as 'QueryDocumentSnapshot<DocumentData>'
          // Use 'doc.data()' to get strongly typed data
          products.push({ ...doc.data(), id: doc.id } as Product);
        });
        setData(products);
        setLoading(false);
      });
    } catch (error) { 
      console.log("Error getting documents: ", error);
    }

  }


  return (
    <div>

<div className="font-sans">
      <div className="py-4 mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-10">

          <div className="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
            <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/watch1.webp" alt="product1"
                className="h-full w-full object-contain" />
            </div>

            <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-[15px] font-semibold text-[#333]">French Connection Timex</h3>
                <h4 className="text-xl text-blue-600 font-bold mt-2">$95.00</h4>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
            <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/product14.webp" alt="product2"
                className="h-full w-full object-contain" />
            </div>

            <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-[15px] font-semibold text-[#333]">Echo Elegance</h3>
                <h4 className="text-xl text-blue-600 font-bold mt-2">$20.00</h4>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
            <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/laptop4.webp" alt="product3"
                className="h-full w-full object-contain" />
            </div>

            <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-[15px] font-semibold text-[#333]">Acer One 14 AMD</h3>
                <h4 className="text-xl text-blue-600 font-bold mt-2">$400.00</h4>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
            <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/watch2.webp" alt="product4"
                className="h-full w-full object-contain" />
            </div>

            <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-[15px] font-semibold text-[#333]">Irish Cream Dream</h3>
                <h4 className="text-xl text-blue-600 font-bold mt-2">$11.00</h4>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
            <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/coffee7.webp" alt="product5"
                className="h-full w-full object-contain" />
            </div>

            <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-[15px] font-semibold text-[#333]">Luxury desk clock</h3>
                <h4 className="text-xl text-blue-600 font-bold mt-2">$90.00</h4>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
            <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/watch6.webp" alt="product6"
                className="h-full w-full object-contain" />
            </div>

            <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-[15px] font-semibold text-[#333]">Smart Watch</h3>
                <h4 className="text-xl text-blue-600 font-bold mt-2">$110.00</h4>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
            <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/watch3.webp" alt="product7"
                className="h-full w-full object-contain" />
            </div>

            <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-[15px] font-semibold text-[#333]">Creative Wall Clock</h3>
                <h4 className="text-xl text-blue-600 font-bold mt-2">$50.00</h4>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
            <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/laptop2.webp" alt="product8"
                className="h-full w-full object-contain" />
            </div>

            <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-[15px] font-semibold text-[#333]">ASUS Vivobook 15</h3>
                <h4 className="text-xl text-blue-600 font-bold mt-2">$450.00</h4>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-3.5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Collection;

