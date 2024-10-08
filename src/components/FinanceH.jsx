import React from 'react'
import jspdf from "jspdf";
import "jspdf-autotable";
// import useFetch from '../hooks/useFetch';

// import { useNavigate } from "react-router-dom";
import { HiDownload } from "react-icons/hi";

const FinanceH = () => {


    // const { data, loading, error } = useFetch("/salary");
    // const navigate = useNavigate();

    function generatePDF(data) {
        const doc = new jspdf();
        const tableColumn = [
            "Refund ID",
            "Name",
            "Email",
            "Request Date",
            "Package Name",
            "Booking ID",
            "Additional note",
        ];


        const tableRows = data
            .slice(0)
            .reverse()
            .map((data, index) => {
                return [
                    index + 1,
                    data.Name,
                    data.Email,
                    data.Requested_Date,
                    data.Package_name,
                    data.BookingId,
                    data.Additional_note

                ];
            });

        doc.autoTable(tableColumn, tableRows, {
            styles: { fontSize: 7 },
            startY: 35,
        });
        const date = Date().split(" ");
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];
        doc.text("Traverly-Refund-Details-Report ", 14, 15).setFontSize(12);
        doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
        doc.save(`Refund-Details-Report_${dateStr}.pdf`);
    }
    return (

        <div className='pt-[25px] px-[25px] bg-[#F8F9FC] mt-3 ' >
            <div className='flex items-center justify-between'>
                <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>Finance Health</h1>

                <div className='flex  items-center bg-red-500 gap-1 px-2' >
                    <button className='bg-red-500 rounded-md hover:bg-red-700 '>Generate Reports</button>
                    <HiDownload color='white' className='cursor-pointer p-[5]' onClick={() => {
                        generatePDF();
                    }}
                    />
                </div>
            </div>

            <div className='mt-5'>


                <div class="mb-3">


                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400" >

                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">

                                    </th>

                                    <th scope="col" class="px-6 py-3">
                                        Section
                                    </th>

                                    <th scope="col" class="px-6 py-3">
                                        Month
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Income
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Expences
                                    </th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">

                                    <td class="px-6 py-4">

                                    </td>

                                    <td class="px-6 py-4">

                                    </td>
                                    <td class="px-6 py-4">

                                    </td>
                                    <td class="px-6 py-4">
                                    </td>
                                    <td class="px-6 py-4">
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

export default FinanceH