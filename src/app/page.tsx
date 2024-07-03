"use client";
// It is not recommended to use "use client here dispatch can be run on server but not selector"

import { increment } from "@/features/Slice1/slice";
import { useAppDispatch, useAppSelector } from "@/Hooks";
import {
    Button,
    Code,
    Container,
    Flex,
    List,
    ListItem,
    Text,
    Title,
} from "@mantine/core";
import Link from "next/link";
export default function Home() {
    const dispatch = useAppDispatch();
    const counter = useAppSelector((state) => state.counter);
    return (
        <Container mt={"md"}>
            <Title order={3} pb={"md"}>
                This is a Nextjs template with mantine 7.11.1 css library.
            </Title>
            <Text size="lg" pb={"md"}>
                It has following features....
            </Text>
            <List type="ordered" spacing={"lg"} size="lg" withPadding>
                <ListItem>
                    It is preconfigured with redux state management library with
                    already been configured in <Code>layout.tsx</Code> file
                    customize store according to you in{" "}
                    <Code>src/features/Slice1/slice.tsx</Code>
                </ListItem>
                <Flex
                    p={"sm"}
                    className="counter-container"
                    mih={50}
                    bg="rgba(0, 0, 0, .3)"
                    gap="md"
                    justify="center"
                    align="center"
                    direction="column"
                    wrap="wrap">
                    <Title order={1}>{counter}</Title>
                    <Button
                        variant="filled"
                        onClick={() => dispatch(increment(null))}>
                        Add to value
                    </Button>
                </Flex>
                <ListItem>
                    It is preinstall and configured with{" "}
                    <Link href={"https://mantine.dev/"}>mantine</Link>.
                </ListItem>
                <ListItem>
                    Dependencies are mantine core, mantine hooks and mantine
                    forms
                </ListItem>
                <ListItem>
                    It has configured navbar and if you wish to change title or
                    link then you can visit
                    <Text size="lg">
                        <Code>\src\constants\index.ts</Code>;
                    </Text>
                </ListItem>
                <ListItem>
                    With loader and custom animated not-found page
                </ListItem>
            </List>
        </Container>
    );
}
