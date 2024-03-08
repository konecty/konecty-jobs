import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
	const baseUrl = env.API_BASE_URL
	const url = new URL(path, baseUrl)

	return fetch(url, init)
}