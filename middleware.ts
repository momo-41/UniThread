import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// sign-inはページが保護されていない
// sign-in以降のルートをisPublicRouteにしている
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/api/webhooks/clerk", // clerkのwebhookを行うために追加
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect(); //sign-in以降のルート以外を保護する => リダイレクトさせる
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
