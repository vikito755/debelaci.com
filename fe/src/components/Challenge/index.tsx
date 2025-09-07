import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Image,
  Title,
  Text,
  Checkbox,
  Stack,
} from '@mantine/core'

// Challenges and success messages
const challenges: string[] = [
  'Направи 10 лицеви опори (дори да ти отнеме).',
  'Изпий 8 чаши вода.',
  'Излез на разходка за 15 мин.',
  'Бягай 100 метра',
  'Не яж 2 часа преди лягане.',
  'Не пий кафе/кофейн след 17:00.',
]

const successMessages: string[] = [
  `- Петре, карай по-внимателно.
    - Е, кво искаш, ма!? Карам си както трябва.
    - Изобщо не псуваш...`,
  `- Ако ти се скъсат горните копчета на ризата - на любов е.
    - Ако ти се скъсат долните копчета - на диета е.`,
  `Първа среща. Тя:
    - Ох, извинявам се, че позакъснях!
    Той:
    - О, нищо подобно! Аз просто дойдох час и половина по-рано!`,
  `Кръчма - място, на което бозайникът се превръща във влечуго.`,
  `Всяка сутрин чистачката в Музея за съвременно изкуство, питаше директора:
    - Шефе, това изкуство ли е или да го хвърлям?`,
]

interface ChallengeData {
  challenge: string
  checked: boolean
  streak: number
  date: string // YYYY-MM-DD
}

const LOCAL_STORAGE_KEY = 'dailyChallenge'

const ChallengeHero: React.FC = () => {
  const [challenge, setChallenge] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)
  const [streak, setStreak] = useState<number>(0)
  const [date, setDate] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')

  const getToday = (): string => new Date().toISOString().split('T')[0]

  // Load challenge data
  useEffect(() => {
    const today = getToday()
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY)
    let data: ChallengeData | null = null

    if (savedData) {
      try {
        data = JSON.parse(savedData) as ChallengeData
      } catch (e) {
        console.error('Failed to parse localStorage data', e)
      }
    }

    if (data) {
      if (data.date === today) {
        setChallenge(data.challenge)
        setChecked(data.checked)
        setStreak(data.streak)
        setDate(data.date)
      } else {
        const newChallenge =
          challenges[Math.floor(Math.random() * challenges.length)]
        const updatedStreak = data.checked ? data.streak + 1 : 0

        const newData: ChallengeData = {
          challenge: newChallenge,
          checked: false,
          streak: updatedStreak,
          date: today,
        }

        setChallenge(newChallenge)
        setChecked(false)
        setStreak(updatedStreak)
        setDate(today)

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData))
      }
    } else {
      const newChallenge =
        challenges[Math.floor(Math.random() * challenges.length)]
      const newData: ChallengeData = {
        challenge: newChallenge,
        checked: false,
        streak: 0,
        date: today,
      }

      setChallenge(newChallenge)
      setChecked(false)
      setStreak(0)
      setDate(today)

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData))
    }
  }, [])

  const handleCheck = (value: boolean) => {
    setChecked(value)

    if (value) {
      const message =
        successMessages[Math.floor(Math.random() * successMessages.length)]
      setSuccessMessage(message)

      const savedData: ChallengeData = {
        challenge,
        checked: true,
        streak,
        date,
      }

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedData))
    } else {
      setSuccessMessage('')
    }
  }

  return (
    <Container size="lg" py="xl">
      <Grid align="center" gutter="xl">
        {/* Right: Hero Image */}
        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
          <Image
            src="/images/heavy-guy.png"
            alt="Challenge Hero"
            radius="md"
          />
        </Grid.Col>

        {/* Left: Text and Challenge */}
        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
          <Stack gap="md">
            <Title order={1}>Дневно предизвикателство 🚀</Title>
            <Text size="md">
              Изпълни предизвикателството и ще получиш произволен виц.
              Върни се утре и повтори.
            </Text>

            <Text fw={700} size="lg">
              Последователни дни: {streak} 🔥
            </Text>

            <Checkbox
              label={challenge}
              checked={checked}
              style={{cursor: 'pointer'}}
              onChange={(e) => handleCheck(e.currentTarget.checked)}
              size="lg"
            />

            {checked && (
              <Text fw={700} style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
                Твоят виц:<br />
                {successMessage}
              </Text>
            )}
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default ChallengeHero
