import {
  Container,
  Grid,
  Title,
  Text,
  Stack,
  Button,
  Group,
  Textarea,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import type { FunctionComponent } from 'react'

const SuggestChallenge: FunctionComponent = () => {
  const MAX_LENGTH = 1000

  const form = useForm({
    initialValues: {
      challenge: '',
    },
    validate: {
      challenge: (value) => {
        if (!value.trim()) return 'Полето не може да бъде празно'
        return null
      },
    },
  })

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value.slice(0, MAX_LENGTH)
    form.setFieldValue('challenge', value)
  }

  return (
    <Container size="lg" py="xl">
      <Grid align="center" gutter="xl">
        <Stack>
          <Title ta="center">Предложи предизвикателство или виц</Title>
          <Text ta="center" size="md">
            Стани част от движението като препоръчаш предизвикателство или виц. <br />
            Благодарим за подкрепата и се надяваме да е полезно.
          </Text>

          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Textarea
              withAsterisk
              label="Предизвикателство / Виц"
              placeholder="Предизвиквам... / Американец, германец и българин влизат в бар..."
              autosize
              minRows={4}
              value={form.values.challenge}
              onChange={handleChange}
            />

            <Text
              size="sm"
              c={form.values.challenge.length >= MAX_LENGTH ? 'red' : 'dimmed'}
            >
              {form.values.challenge.length} / {MAX_LENGTH} символа
            </Text>

            <Group justify="flex" mt="md">
              <Button
                type="submit"
                disabled={form.values.challenge.trim().length === 0}
              >
                ИЗПРАТИ
              </Button>
            </Group>
          </form>
        </Stack>
      </Grid>
    </Container>
  )
}

export default SuggestChallenge
