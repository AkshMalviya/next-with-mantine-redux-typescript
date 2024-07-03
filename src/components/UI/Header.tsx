"use client";
import { navLinks } from "@/constants";
import {
    Burger,
    Button,
    Container,
    Flex,
    Group,
    Text,
    Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const router = usePathname();
    const items = navLinks.map((link) => (
        <Link
            key={link.title}
            href={link.link}
            className={"link"}
            data-active={router === link.link || undefined}>
            {link.title}
        </Link>
    ));

    return (
        <nav className={"header"}>
            <Container size="xl" className={"inner"}>
                <Link href={"/"} className={"link"}>
                    <Title order={2}>Flipr</Title>
                </Link>
                <Group gap={"lg"} visibleFrom="md">
                    {items}
                </Group>

                <Link href={"/login"} className={"login-btn"}>
                    <Button
                        variant="gradient"
                        gradient={{
                            from: "blue",
                            to: "cyan",
                            deg: 90,
                        }}>
                        Login
                    </Button>
                </Link>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="md"
                    size="md"
                />
            </Container>
            {opened && (
                <Flex direction="column" align="center" gap="xs">
                    {items}
                </Flex>
            )}
        </nav>
    );
};

export default React.memo(Header);
