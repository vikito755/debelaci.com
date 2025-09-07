import {
  IconBowlChopsticks,
  IconCake,
  IconChevronDown,
  IconCookieFilled,
  IconCup,
  IconPizzaFilled,
  IconSalad,
} from '@tabler/icons-react'
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from './header.module.css'
import Logo from './Logo'

const mockdata = [
  {
    icon: IconBowlChopsticks,
    title: 'Soups',
    
    description: 'Lorem ipsum dolor sit amet, consectetur kiral.',
  },
  {
    icon: IconSalad,
    title: 'Salads',
    description: 'Lorem ipsum dolor sit amet, consectetur kiral liviumas.',
  },
  {
    icon: IconPizzaFilled,
    title: 'Pizzas',
    description: 'Lorem ipsum dolor sit amet, consectetur kiral liviumas.',
  },
  {
    icon: IconCake,
    title: 'Desserts',
    description: 'Lorem ipsum dolor sit amet, consectetur kiral liviumas.',
  },
  {
    icon: IconCookieFilled,
    title: 'Snacks',
    description: 'Lorem ipsum dolor sit amet, consectetur kiral liviumas.',
  },
  {
    icon: IconCup,
    title: 'Drinks',
    description: 'Lorem ipsum dolor sit amet, consectetur kiral liviumas.',
  },
]

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const theme = useMantineTheme()

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.orange[5]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))
  return (
    <>
      <Box pb={120}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
              <Logo />
            <Group h="100%" gap={'lg'} visibleFrom="sm">
              <a href="#" className={classes.link}>
                Начало
              </a>
              <a href="#" className={classes.link}>
                Предложи предизвикателство
              </a>
              <a href="#" className={classes.link}>
                Предложи шега
              </a>
            </Group>
            <Group visibleFrom="sm">
              <Button>Предизвикай се</Button>
            </Group>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Group>
        </header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          // title="Tasty Food, Good Mood."
          hiddenFrom="sm"
          zIndex={1000000}
        >

          <Logo />
          <ScrollArea h="calc(100vh - 80px" mx="-md">
            <Divider my="sm" />

            <Stack p={'lg'}>
              <a href="#" className={classes.link}>
                Начало
              </a>
              <UnstyledButton className={classes.link} onClick={toggleLinks}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Menu
                  </Box>
                  <IconChevronDown size={16} color={theme.colors.orange[5]} />
                </Center>
              </UnstyledButton>
              <Collapse in={linksOpened}><Stack gap={'lg'}>{links}</Stack></Collapse>
              <a href="#" className={classes.link}>
                Learn
              </a>
              <a href="#" className={classes.link}>
                Academy
              </a>
            </Stack>

            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
              <Button>Предизвикай се</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    </>
  )
}
