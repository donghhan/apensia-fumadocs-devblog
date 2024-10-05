import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col pt-10 text-center">
      <h1 className="mb-4 text-2xl font-bold">Welcome to my blog</h1>
      <p className="text-fd-muted-foreground">
        This is my personal blog for recording what I learned
      </p>
    </main>
  );
}
