import React from 'react'
import JsonData from './data.json'

function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					
					<td className='px-10 py-2 text-center border border-gray-200'>{info.time}</td>
					<td className='px-10 py-2 text-center border border-gray-200'>{info.date}</td>
					<td className='px-10 py-2 text-center border border-gray-200' >{info.sugar}</td>
					<td className='px-10 py-2 text-center border border-gray-200'>{info.HA}</td>
				

				</tr>
			)
		}
	)

	return(
		<div className='flex mx-8 mt-5 w-[700px]'>
			<table class="table table-striped  border-collapse bg-gray-200 rounded-lg">
				<thead>
					<tr>
					<th className='px-10 py-2 text-center border-gray-200'>Giờ</th>
					<th className='px-10 py-2 text-center border border-gray-200'>Ngày</th>
					<th className='px-10 py-2 text-center border border-gray-200'>Chỉ số đường huyết</th>
					<th className='px-10 py-2 text-center border-gray-200'>Chỉ số huyết áp</th>

					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
		
		</div>
	)
}

export default JsonDataDisplay;