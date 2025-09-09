import { Configuration, FeedbackApi } from '@/client/openapi/src';
import envConfig from '@/envConfig';
import toast, { Toaster } from 'react-hot-toast';
import {
  Container,
  Grid,
  Title,
  Text,
  Stack,
  Button,
  Group,
  Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import type { FunctionComponent } from 'react';

const api = new FeedbackApi(
  new Configuration({
    basePath: envConfig.apiBaseUrl
  })
);

const SuggestChallenge: FunctionComponent = () => {
  const MAX_LENGTH = 1000;

  const form = useForm({
    initialValues: {
      challenge: '',
    },
    validate: {
      challenge: (value) => {
        if (!value.trim()) return 'Полето не може да бъде празно';
        return null;
      },
    },
  });

  // ✅ Mutation using TanStack Query
  const sendFeedback = useMutation({
    mutationFn: (message: string) =>
      api.feedbackCreate({ feedback: { message } }),
    onSuccess: () => {
      form.reset();
      toast.success('Благодаря, че писа. :)');
      // alert('Благодарим за обратната връзка!');
    },
    onError: () => {
      toast.error('Възникна грешка при изпращането.');
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value.slice(0, MAX_LENGTH);
    form.setFieldValue('challenge', value);
  };

  const handleSubmit = (values: typeof form.values) => {
    sendFeedback.mutate(values.challenge);
  };

  return (
    <Container id="suggest" size="lg" py="xl">
      <Grid align="center" gutter="xl">
        <Stack>
          <Title ta="center">Предложи предизвикателство или виц</Title>
          <Text ta="center" size="md">
            Стани част от движението като препоръчаш предизвикателство или виц. <br />
            Благодарим за подкрепата и се надяваме да е полезно.
          </Text>

          <form onSubmit={form.onSubmit(handleSubmit)}>
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
                disabled={form.values.challenge.trim().length === 0 || sendFeedback.isPending}
              >
                {sendFeedback.isPending ? 'Изпращане...' : 'ИЗПРАТИ'}
              </Button>
            </Group>
          </form>
        </Stack>
      </Grid>
    </Container>
  );
};

export default SuggestChallenge;
