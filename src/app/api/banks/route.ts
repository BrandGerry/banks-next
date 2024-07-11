import { NextResponse } from 'next/server'
import type { Bank } from '../../../types/Bank'

export async function GET() {
  const response = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks')
  const banks: Bank[] = await response.json()
  return NextResponse.json(banks)
}