// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchMethod } from './apiGate'
import { API_URL,JSON_URL } from '../../config'

type Data = {
  page: number
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

const ApiCalls = () => ({
  getAllLists: async (data:any) => { 
    try{
      const res = await fetchMethod(`https://jsonplaceholder.typicode.com/posts`,data,'get')
      return res
    }
    catch (e) {
      console.log('Error in getAllLists')
    }
  }})

  export default ApiCalls