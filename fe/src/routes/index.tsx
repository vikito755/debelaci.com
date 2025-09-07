import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import { Button, Stack } from '@mantine/core'
import Hero from '@/components/Hero'
import Challenge from '@/components/Challenge'
import SuggestChallenge from '@/components/SuggestChallenge'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
    <Stack gap={'lg'}>
      <Hero />
    <Challenge />
    <SuggestChallenge />
    </Stack>
      {/* <Button>test</Button> */}
    </>
  )
}
