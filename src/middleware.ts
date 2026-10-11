import { NextResponse, type NextRequest } from 'next/server'
import { isLocale, LOCALE_COOKIE } from '@/lib/i18n'

export function middleware(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get('lang')
  if (!isLocale(lang)) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.searchParams.delete('lang')
  const response = NextResponse.redirect(url)
  response.cookies.set(LOCALE_COOKIE, lang, { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' })
  return response
}

export const config = {
  matcher: ['/((?!api|_next|images|.*\\..*).*)'],
}
