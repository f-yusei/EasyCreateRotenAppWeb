import apiUrl from '@/constants/url'
import type { LoginStudentRequest, LoginStudentResponse } from '@/types/type'

export const studentLogin = async (reqData: LoginStudentRequest) => {
  const res = await fetch(`${apiUrl}/v1/student/login`, {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqData),
  })

  if (!res.ok) {
    throw new Error('Network response was not ok')
  }

  const data = await res.json()
  return data as LoginStudentResponse
}
