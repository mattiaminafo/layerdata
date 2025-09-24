import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Check if the pathname starts with a language code
  const pathnameHasLocale = pathname.startsWith('/en') || pathname.startsWith('/it');
  
  // If accessing root path, redirect to /en
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }
  
  // If pathname doesn't have a locale and is not an API route or static file
  if (!pathnameHasLocale && !pathname.startsWith('/api') && !pathname.startsWith('/_next') && !pathname.includes('.')) {
    // Redirect to /en version of the page
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
