import { NextResponse } from 'next/server';

export function middleware(request) {
  // Proteger rotas admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Lógica de verificação de admin
    const token = request.cookies.get('token');
    if (!token) {
      return NextResponse.redirect(new URL('/signIn', request.url));
    }
  }

  // Proteger rotas app (usuário logado)
  if (request.nextUrl.pathname.startsWith('/app')) {
    const token = request.cookies.get('token');
    if (!token) {
      return NextResponse.redirect(new URL('/signIn', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/app/:path*']
};