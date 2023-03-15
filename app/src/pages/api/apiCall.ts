import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchMethod } from './apiGate'
import { API_URL,JSON_URL } from '../../config'
import {HttpMethod} from '../../types/types'
import {IUser} from '../../types/types'
import { AxiosResponse } from 'axios'

const GET: HttpMethod = "GET";

async function getAllLists() {
  try {
    const res = await fetchMethod(`${JSON_URL}`, `${GET}`);
    const users: IUser = res.data.map((data: any) => ({
      userId: data.userId ?? undefined,
      id: data.id ?? undefined,
      title: data.title ?? undefined,
      body: data.body ?? null,
    }));

    console.log("Users:", users);
    return users;
  } catch (e) {
    console.log('Error in getAllLists:');
    throw e;
  }
}

const apiCalls = { getAllLists };

export default apiCalls;
