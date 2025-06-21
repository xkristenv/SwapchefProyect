import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/changePassword')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/changePassword"!</div>
}
