import type { FunctionComponent } from 'react'
import { IconCheck } from '@tabler/icons-react'
import {
  Anchor,
  Button,
  Container,
  Grid,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'

const Hero: FunctionComponent = () => {
  return (
    <Container size="lg" py="xl">
      <Grid align="center" gutter="xl">
        {/* Left: Text */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Title order={1} variant="h1">
            Иди на разходка, не бъди дебела топка.
            {/* играй баскетбол не бъди дебел трол */}
          </Title>
          <Text mt="md">
            Каква е идеята? От 2000 - 2019 има 10% повече дебели българи, все
            едно целия Пловдив да стане с наднормено тегло (
            <Anchor href="https://data.worldobesity.org/country/bulgaria-31/#data_trends">
              статистика
            </Anchor>
            ). Това е тежко (като голяма част от българите), включващо мен.
            Идеята е да се предизвикаме по забавен начин и свалим 1, 2, 30
            килограма.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={24} radius="xl" color="blue">
                <IconCheck size={16} stroke={1.5} />
              </ThemeIcon>
            }
          ></List>

          <Group mt={30}>
            <Button
            onClick={() => {window.location.href = "#challenge"}}
            radius="xl" size="md">
              Предизвикай се
            </Button>
            <Button
            onClick={() => {window.location.href = "#suggest"}}
            variant="default" radius="xl" size="md">
              Предложи предизвикателство
            </Button>
          </Group>
        </Grid.Col>

        {/* Right: Image */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image
            loading={'eager'}
            src="/images/muscle-guy.svg"
            alt="Hero image"
            radius="md"
          />
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Hero
