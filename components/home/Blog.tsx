"use client"
import React from 'react'

const Blog = () => {
  return (
    <div>
        
<div className="bg-gray-50 sm:px-6 px-4 py-10 font-[sans-serif]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#333] inline-block">LATEST BLOGS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 max-md:max-w-lg mx-auto">
          <div className="cursor-pointer rounded overflow-hidden group">
            <div>
              <span className="text-sm block text-gray-400 mb-2">10 FEB 2023</span>
              <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">A Guide to Igniting Your Imagination</h3>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex flex-wrap items-center gap-3">
              <img src='https://readymadeui.com/team-1.webp' className="w-9 h-9 rounded-full" />
              <p className="text-xs text-gray-400">BY JOHN DOE</p>
            </div>
          </div>
          <div className="cursor-pointer rounded overflow-hidden group">
            <div>
              <span className="text-sm block text-gray-400 mb-2">7 JUN 2023</span>
              <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">Hacks to Supercharge Your Day</h3>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex flex-wrap items-center gap-3">
              <img src='https://readymadeui.com/team-2.webp' className="w-9 h-9 rounded-full" />
              <p className="text-xs text-gray-400">BY MARK ADAIR</p>
            </div>
          </div>
          <div className="cursor-pointer rounded overflow-hidden group">
            <div>
              <span className="text-sm block text-gray-400 mb-2">5 OCT 2023</span>
              <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">Trends and Predictions</h3>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex flex-wrap items-center gap-3">
              <img src='https://readymadeui.com/team-3.webp' className="w-9 h-9 rounded-full" />
              <p className="text-xs text-gray-400">BY SIMON KONECKI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Blog
