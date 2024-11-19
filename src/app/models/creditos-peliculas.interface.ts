export interface CreditosPeliResponse {
  cast: Cast[]
  crew: any[]
  id: number
}

export interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
  character: string
  credit_id: string
  order: number
}
