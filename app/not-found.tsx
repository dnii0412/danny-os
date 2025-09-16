import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          
          <div className="text-sm text-muted-foreground">
            <p>Try these commands in the terminal:</p>
            <div className="mt-2 space-y-1 font-mono text-xs">
              <div><span className="text-blue-400">help</span> - See all commands</div>
              <div><span className="text-blue-400">about</span> - Learn about me</div>
              <div><span className="text-blue-400">apps</span> - View projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
