import React from 'react'
import { Button } from '../../components/button'
import Nav from '../../components/Nav'

const Applyloan = () => {

    const Loans = [
        { type: "Loan Type", date: "May 12, 2019", duration:"12 month", status: "Rejected" },
        { type: "Loan Type", date: "May 12, 2019", duration:"12 month", status: "Rejected" },
        { type: "Loan Type", date: "May 12, 2019", duration:"12 month", status: "Rejected" },
        
      ];


  return (
    <div>
      <Nav />
      <div className="px-6">
        <div >
          <h2 className="font-mont text-[22px]">Apply Loan</h2>
        </div>

        <div className="flex justify-between px-14 mt-12">
          <h2 className="font-mont text-[20px] text-orange">Applications</h2>
          <Button type="dark" title="Apply for loan" _style=" px-5 py-2 "/>
        </div>


        
        <div class="flex w-full items-center justify-center border">
  <div class="overflow-x-auto">
    <table class="w-full bg-white shadow-md rounded-xl border">
      <thead>
        <tr class="bg-blue-gray-100 text-gray-700">
          <th class="py-4 px-6 text-left text-lg">Stock Name</th>
          <th class="py-4 px-6 text-left text-lg">Price</th>
          <th class="py-4 px-6 text-left text-lg">Quantity</th>
          <th class="py-4 px-6 text-left text-lg">Total</th>
          <th class="py-4 px-6 text-left text-lg">Action</th>
        </tr>
      </thead>
      <tbody class="text-blue-gray-900 text-base">
        <tr class="border-b border-blue-gray-200">
          <td class="py-4 px-6">Company A</td>
          <td class="py-4 px-6">$50.25</td>
          <td class="py-4 px-6">100</td>
          <td class="py-4 px-6">$5025.00</td>
          <td class="py-4 px-6">
            <a href="#" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
          </td>
        </tr>
        <tr class="border-b border-blue-gray-200">
          <td class="py-4 px-6">Company B</td>
          <td class="py-4 px-6">$75.60</td>
          <td class="py-4 px-6">150</td>
          <td class="py-4 px-6">$11340.00</td>
          <td class="py-4 px-6">
            <a href="#" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
          </td>
        </tr>
        <tr class="border-b border-blue-gray-200">
          <td class="py-4 px-6">Company C</td>
          <td class="py-4 px-6">$30.80</td>
          <td class="py-4 px-6">200</td>
          <td class="py-4 px-6">$6160.00</td>
          <td class="py-3 px-4">
            <a href="#" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
          </td>
        </tr>
        
    
      </tbody>
    </table>
  </div>
</div>

      </div>
    </div>
  )
}

export default Applyloan
