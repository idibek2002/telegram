'use client'
import { useToggle, upperFirst } from '@mantine/hooks';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
    Container,
    Box,
} from '@mantine/core';

export function LoginPage(props: PaperProps) {
    const [type, toggle] = useToggle(['login', 'register']);
    //   const form = useForm({
    //     initialValues: {
    //       email: '',
    //       name: '',
    //       password: '',
    //       terms: true,
    //     },

    //     validate: {
    //       email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
    //       password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    //     },`
    //   });

    return (
        <Container size={'xl'}>
            <Box className='flex items-center justify-center min-h-screen'>
                <Paper radius="md" p="xl" withBorder {...props}>
                    <Text size="lg" fw={500}>
                        Welcome to Mantine, {type} with
                    </Text>

                    <Divider label="Or continue with email" labelPosition="center" my="lg" />

                    <form>
                        <Stack>
                            {type === 'register' && (
                                <TextInput
                                    label="Name"
                                    placeholder="Your name"
                                    //   value={form.values.name}
                                    //   onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                    radius="md"
                                />
                            )}

                            <TextInput
                                required
                                label="Email"
                                placeholder="hello@mantine.dev"
                                // value={form.values.email}
                                // onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                // error={form.errors.email && 'Invalid email'}
                                radius="md"
                            />

                            <PasswordInput
                                required
                                label="Password"
                                placeholder="Your password"
                                // value={form.values.password}
                                // onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                // error={form.errors.password && 'Password should include at least 6 characters'}
                                radius="md"
                            />

                            {type === 'register' && (
                                <Checkbox
                                    label="I accept terms and conditions"
                                //   checked={form.values.terms}
                                //   onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                                />
                            )}
                        </Stack>

                        <Group justify="space-between" mt="xl">
                            <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                                {type === 'register'
                                    ? 'Already have an account? Login'
                                    : "Don't have an account? Register"}
                            </Anchor>
                            <Button type="submit" radius="xl">
                                {upperFirst(type)}
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </Box>
        </Container>


    );
}